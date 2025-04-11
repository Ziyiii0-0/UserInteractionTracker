from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import zipfile
from io import BytesIO
import re
from datetime import datetime, timedelta, timezone
from bson import ObjectId
import json
from pymongo import MongoClient
import boto3
from botocore.exceptions import NoCredentialsError
from pymongo.errors import BulkWriteError, DuplicateKeyError
from post_processing.data_collection_monitor import analyze_user_data
import config
from functools import wraps

client = MongoClient(config.MONGO_URI)
db = client[config.DATABASE_NAME]
rationale_collection = db[config.RATIONALE_COLLECTION_NAME]
interaction_collection = db[config.INTERACTION_COLLECTION_NAME]
order_collection = db[config.ORDER_COLLECTION_NAME]
order_processed_collection = db[config.ORDER_PROCESSED_COLLECTION_NAME]
user_collection = db[config.USER_COLLECTION_NAME]
UPLOAD_FOLDER = config.UPLOAD_FOLDER

AWS_ACCESS_KEY = config.AWS_ACCESS_KEY
AWS_SECRET_KEY = config.AWS_SECRET_KEY
BUCKET_NAME = config.BUCKET_NAME

s3_client = boto3.client(
    "s3", aws_access_key_id=AWS_ACCESS_KEY, aws_secret_access_key=AWS_SECRET_KEY
)

# Ensure unique index on 'uuid' field for interaction_collection
interaction_collection.create_index("uuid", unique=True)

# Ensure unique index on 'uuid' field for rationale_collection
rationale_collection.create_index("uuid", unique=True)

# Ensure unique index on 'uuid' field for order_collection
order_collection.create_index("uuid", unique=True)

# db_schema
#       interactions:
#             [
#                 {
#                     interactions:[
#                         {**interaction, user_id:ObjectID},
#                         .
#                         .
#                         .
#                     ]
#                 },
#                 .
#                 .
#                 .
#             ]
#       users:
#             [
#                 {
#                     _id:ObjectID,
#                     user_name:string,
#                 },
#                 .
#                 .
#                 .
#             ]

app = Flask(__name__)
CORS(app)
app.config["MAX_CONTENT_LENGTH"] = 200 * 1024 * 1024

REMOVE_ZIP_FILE = True
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)


def check_user(user_name, user_collection):
    if not user_name:
        app.logger.error(f"user_name is not available")
        return {"error": f"user_name is not available"}, 400

    # Check if the user exists
    user = user_collection.find_one({"user_name": user_name})

    if not user:
        # If user does not exist, create a new one
        new_user = {"user_name": user_name}
        result = user_collection.insert_one(new_user)
        app.logger.info(f"Created new user with user_id: {user_name}")

    return user_name, 200


@app.route("/api/upload", methods=["POST"])
def upload_file():
    if "file" not in request.files:
        app.logger.info("No file part in the request")
        return jsonify({"error": "No file part"}), 400

    file = request.files["file"]
    if file.filename == "":
        app.logger.info("No selected file")
        return jsonify({"error": "No selected file"}), 400

    user_name = request.form.get("user_id")

    result, status = check_user(user_name, user_collection=user_collection)
    if status != 200:
        return jsonify(result), status
    else:
        user_name = result

    if file:
        filepath = ""
        if file.filename.endswith(".zip"):
            try:
                file_bytes = file.read()

                with zipfile.ZipFile(BytesIO(file_bytes), "r") as zip_ref:
                    filepath = os.path.join(
                        UPLOAD_FOLDER, file.filename.replace(".zip", "")
                    )
                    os.makedirs(filepath, exist_ok=True)

                    zip_ref.extractall(filepath)
                    app.logger.info(f"File {file.filename} decompressed successfully")

            except zipfile.BadZipFile:
                app.logger.error(f"Error: {file.filename} is not a valid zip file")
                return jsonify({"error": "Invalid zip file"}), 400
        else:
            filepath = os.path.join(UPLOAD_FOLDER, file.filename)
            os.makedirs(os.path.dirname(filepath), exist_ok=True)

            file.save(filepath)
            app.logger.info(f"File {file.filename} uploaded successfully")

        return jsonify({"message": f"File {file.filename} uploaded successfully"}), 200


@app.route("/api/interactions", methods=["POST"])
def interactions():
    # json_data = request.form.get('interactions')
    interactions = request.json

    if not interactions:
        return jsonify({"error": "Interactions not found"}), 400

    # user_id = request.form.get('user_id')
    user_name = request.args.get("user_id")

    result, status = check_user(user_name, user_collection=user_collection)
    if status != 200:
        return result, status
    else:
        user_name = result

    if interactions:
        updated_interactions = [
            {**interaction, "user_name": user_name}
            for interaction in interactions["interactions"]
        ]
        updated_rationale = [
            {**rationale, "user_name": user_name}
            for rationale in interactions["reasons"]
        ]
        updated_orders = [
            {**order, "user_name": user_name}
            for order in interactions["orderDetails"]
        ]
        if updated_interactions:
            try:
                interaction_collection.insert_many(updated_interactions, ordered=False)
            except BulkWriteError as bwe:
                app.logger.info(f"BulkWriteError: {bwe}")
            except DuplicateKeyError as e:
                app.logger.info("Duplicate uuids found in interactions, skipping duplicates.")
        if updated_rationale:
            try:
                rationale_collection.insert_many(updated_rationale, ordered=False)
            except BulkWriteError as bwe:
                app.logger.info(f"BulkWriteError: {bwe}")
            except DuplicateKeyError as e:
                app.logger.info("Duplicate uuids found in rationales, skipping duplicates.")
        if updated_orders:
            try:
                order_collection.insert_many(updated_orders, ordered=False)
            except BulkWriteError as bwe:
                app.logger.info(f"BulkWriteError: {bwe}")
            except DuplicateKeyError as e:
                app.logger.info("Duplicate uuids found in orders, skipping duplicates.")

        return jsonify({"message": f"Interactions added successfully"}), 200

    return jsonify({"error": f"Unknown error"}), 400


@app.route("/api/generate_presigned_post", methods=["GET"])
def generate_presigned_post():
    user_name = request.args.get("user_id")

    result, status = check_user(user_name, user_collection=user_collection)

    if status != 200:
        return result, status
    else:
        user_name = result

    expiration = config.EXPIRATION_TIME
    expire_timestamp = int(
        (datetime.now(timezone.utc) + timedelta(seconds=expiration // 2)).timestamp()
    )  # to make sure at least half of the time remains

    prefix = f"user_interaction_data/USER/{user_name}"

    try:
        # Generate a presigned POST URL
        response = s3_client.generate_presigned_post(
            Bucket=BUCKET_NAME,
            Key=f"{prefix}/${{filename}}",
            ExpiresIn=expiration,
            Conditions=[
                [
                    "content-length-range",
                    0 * (1024 * 1024),
                    100 * (1024 * 1024),
                ],  # 100MB
                ["starts-with", "$key", prefix],
            ],
        )

        response["expire_timestamp"] = expire_timestamp
        return jsonify(response)

    except NoCredentialsError:
        return jsonify({"error": "Credentials not available"}), 403


def get_interactions_by_date(user_name, date=None, return_data=None):
    # If no date is specified, use today's date
    if date is None:
        date = datetime.now()

    # Create date range for the specified date

    start_of_day = date.strftime("%Y-%m-%dT00:00:00.000Z")
    end_of_day = (date + timedelta(days=1)).strftime("%Y-%m-%dT00:00:00.000Z")

    if return_data:
        interactions_date = interaction_collection.find(
            {
                "user_name": user_name,
                "timestamp": {"$gte": start_of_day, "$lt": end_of_day},
            }
        )
        interactions_date = list(interactions_date)
        for interaction in interactions_date:
            interaction["_id"] = str(interaction["_id"])
            if "user_name" in interaction:
                interaction["user_name"] = str(interaction["user_name"])

        interactions_all_time = interaction_collection.find(
            {
                "user_name": user_name,
            }
        )
        interactions_all_time = list(interactions_all_time)
        for interaction in interactions_all_time:
            interaction["_id"] = str(interaction["_id"])
            if "user_name" in interaction:
                interaction["user_name"] = str(interaction["user_name"])

        return {"on_date": interactions_date, "all_time": interactions_all_time}

    else:
        n_documents_date = interaction_collection.count_documents(
            {"user_name": user_name, "timestamp": {"$gte": start_of_day, "$lt": end_of_day}}
        )
        n_documents = interaction_collection.count_documents(
            {
                "user_name": user_name,
            }
        )
        return {"on_date": n_documents_date, "all_time": n_documents}


@app.route("/api/interactions_record_status", methods=["GET"])
def interactions_record_status():
    user_name = request.args.get("user_id")
    date_str = request.args.get("date")  # in 'YYYY-MM-DD' format
    return_data = request.args.get("return")

    result, status = check_user(user_name, user_collection=user_collection)

    if status != 200:
        return result, status
    else:
        user_name = result

    if date_str:
        try:
            date = datetime.strptime(date_str, "%Y-%m-%d")
        except ValueError:
            return jsonify({"error": "Invalid date format, should be YYYY-MM-DD"}), 400
    else:
        date = None

    interactions = get_interactions_by_date(user_name, date, return_data)

    return jsonify(interactions)


def get_rationale_by_date(user_name, date=None):
    # If no date is specified, use today's date
    if date is None:
        date = datetime.now()
    end_of_period = date.strftime("%Y-%m-%dT23:59:59.999Z")
    start_of_period = (date - timedelta(days=6)).strftime("%Y-%m-%dT00:00:00.000Z")

    n_documents_date = rationale_collection.count_documents(
        {
            "user_name": user_name,
            "timestamp": {"$gte": start_of_period, "$lt": end_of_period},
            "eventType": {"$ne": "new_session"}
        }
    )
    n_documents = rationale_collection.count_documents(
        {
            "user_name": user_name,
            "eventType": {"$ne": "new_session"}
        }
    )
    return {"on_date": n_documents_date, "all_time": n_documents}

@app.route("/api/rationale_status", methods=["GET"])
def rationale_status():
    user_name = request.args.get("user_id")
    date_str = request.args.get("date")  # in 'YYYY-MM-DD' format
    return_data = request.args.get("return")

    result, status = check_user(user_name, user_collection=user_collection)

    if status != 200:
        return result, status
    else:
        user_name = result

    if date_str:
        try:
            date = datetime.strptime(date_str, "%Y-%m-%d")
        except ValueError:
            return jsonify({"error": "Invalid date format, should be YYYY-MM-DD"}), 400
    else:
        date = None

    interactions = get_rationale_by_date(user_name, date)

    return jsonify(interactions)

def get_order_by_date(user_name, date=None):
    # If no date is specified, use today's date
    if date is None:
        date = datetime.now()
    end_of_period = date.strftime("%Y-%m-%dT23:59:59.999Z")
    start_of_period = (date - timedelta(days=6)).strftime("%Y-%m-%dT00:00:00.000Z")

    n_documents_date = order_processed_collection.count_documents(
        {"user_name": user_name, "timestamp": {"$gte": start_of_period, "$lt": end_of_period}}
    )
    n_documents = order_processed_collection.count_documents(
        {
            "user_name": user_name,
        }
    )
    return {"on_date": n_documents_date, "all_time": n_documents}

@app.route("/api/order_status", methods=["GET"])
def order_status():
    user_name = request.args.get("user_id")
    date_str = request.args.get("date")  # in 'YYYY-MM-DD' format
    return_data = request.args.get("return")

    result, status = check_user(user_name, user_collection=user_collection)

    if status != 200:
        return result, status
    else:
        user_name = result

    if date_str:
        try:
            date = datetime.strptime(date_str, "%Y-%m-%d")
        except ValueError:
            return jsonify({"error": "Invalid date format, should be YYYY-MM-DD"}), 400
    else:
        date = None

    interactions = get_order_by_date(user_name, date)

    return jsonify(interactions)

@app.route("/api/check_user_id", methods=["GET"])
def check_user_id():
    user_id = request.args.get("user_id")

    user = user_collection.find_one({"user_name": user_id})
    if user:
        return jsonify({"valid": True}), 200
    else:
        # If user does not exist, create a new one
        new_user = {"user_name": user_id}
        result = user_collection.insert_one(new_user)
        app.logger.info(f"Created new user with user_name: {user_id}")
        return jsonify({"valid": True}), 200

def api_key_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        # Get the API key from the Authorization header
        auth_header = request.headers.get('Authorization')

        if not auth_header:
            return jsonify({"error": "Authorization header is missing"}), 401

        # Expected format: "Bearer API_KEY"
        parts = auth_header.split()
        if len(parts) != 2 or parts[0].lower() != 'bearer':
            return jsonify({"error": "Authorization header must be in format: Bearer API_KEY"}), 401

        api_key = parts[1]

        # Check if the API key is in the allowed list
        if api_key not in config.API_KEYS:
            return jsonify({"error": "Invalid API key"}), 403

        return f(*args, **kwargs)
    return decorated_function

@app.route("/api/monitor_user_data", methods=["GET"])
@api_key_required
def monitor_user_data():
    user_name = request.args.get("user_id")
    date = request.args.get("date")
    result, status = check_user(user_name, user_collection=user_collection)

    if status != 200:
        return result, status
    else:
        user_name = result

    # 获取分析数据
    analysis_data = analyze_user_data(user_name, date)

    # 获取用户最早活动时间
    earliest_interaction = interaction_collection.find(
        {"user_name": user_name}
    ).sort("timestamp", 1).limit(1)

    earliest_interaction_list = list(earliest_interaction)

    if earliest_interaction_list:
        earliest_timestamp_str = earliest_interaction_list[0]["timestamp"]
        earliest_date = datetime.strptime(earliest_timestamp_str[:10], "%Y-%m-%d")
        analysis_data["earliest_activity"] = earliest_date.strftime("%Y-%m-%d")
    else:
        analysis_data["earliest_activity"] = None

    # 获取用户最新活动时间
    latest_interaction = interaction_collection.find(
        {"user_name": user_name}
    ).sort("timestamp", -1).limit(1)

    latest_interaction_list = list(latest_interaction)

    if latest_interaction_list:
        latest_timestamp_str = latest_interaction_list[0]["timestamp"]
        latest_date = datetime.strptime(latest_timestamp_str[:10], "%Y-%m-%d")
        analysis_data["latest_activity"] = latest_date.strftime("%Y-%m-%d")
    else:
        analysis_data["latest_activity"] = None

    return jsonify(analysis_data), 200

@app.route("/api/all_user_list", methods=["GET"])
@api_key_required
def all_user_list():
    user_list = user_collection.find({"user_name": {"$ne": ""}}, {"_id": 0, "user_name": 1})
    return jsonify(list(user_list)), 200

@app.route("/api/current_week_info", methods=["GET"])
def current_week_info():
    user_name = request.args.get("user_id")
    result, status = check_user(user_name, user_collection=user_collection)
    if status != 200:
        return result, status
    else:
        user_name = result

    earliest_interaction = interaction_collection.find(
        {"user_name": user_name}
    ).sort("timestamp", 1).limit(1)

    earliest_interaction_list = list(earliest_interaction)

    if not earliest_interaction_list:
        earliest_date = datetime.now()
        current_week = 1
    else:
        earliest_timestamp_str = earliest_interaction_list[0]["timestamp"]
        earliest_date = datetime.strptime(earliest_timestamp_str[:10], "%Y-%m-%d")

        current_date = datetime.now()
        days_difference = (current_date - earliest_date).days
        current_week = (days_difference // 7) + 1

    week_start = earliest_date + timedelta(days=((current_week-1) * 7))
    week_end = earliest_date + timedelta(days=(current_week * 7) - 1)

    week_start_str = week_start.strftime("%b %d")
    week_end_str = week_end.strftime("%b %d")

    week_start_timestamp = week_start.strftime("%Y-%m-%dT00:00:00.000Z")
    week_end_timestamp = (week_end + timedelta(days=1)).strftime("%Y-%m-%dT00:00:00.000Z")

    rationale_count = rationale_collection.count_documents({
        "user_name": user_name,
        "timestamp": {"$gte": week_start_timestamp, "$lt": week_end_timestamp},
        "eventType": {"$ne": "new_session"}
    })

    order_count = order_processed_collection.count_documents({
        "user_name": user_name,
        "timestamp": {"$gte": week_start_timestamp, "$lt": week_end_timestamp}
    })


    return jsonify({
        "weekNumber": current_week,
        "startDate": week_start_str,
        "endDate": week_end_str,
        "reasonProgress": rationale_count,
        "purchaseProgress": order_count
    }), 200

@app.route("/api/all_users_data", methods=["GET"])
@api_key_required
def all_users_data():
    date = request.args.get("date")
    past24hours =False
    if date is None:
        date = datetime.now()
        past24hours =True
    else:
        try:
            date = datetime.strptime(date, "%Y-%m-%d")
        except ValueError:
            return jsonify({"error": "Invalid date format, should be YYYY-MM-DD"}), 400

    users = list(user_collection.find({}, {"_id": 0, "user_name": 1}))

    result = []
    for user in users:
        user_name = user["user_name"]
        if not user_name:  # skip empty user names
            continue

        user_data = {"user_name": user_name}

        # get the earliest activity time
        earliest_interaction = interaction_collection.find(
            {"user_name": user_name}
        ).sort("timestamp", 1).limit(1)

        earliest_interaction_list = list(earliest_interaction)

        # get the latest activity time
        latest_interaction = interaction_collection.find(
            {"user_name": user_name}
        ).sort("timestamp", -1).limit(1)

        latest_interaction_list = list(latest_interaction)

        # Set latest activity
        if latest_interaction_list:
            latest_timestamp_str = latest_interaction_list[0]["timestamp"]
            user_data["latest_activity"] = latest_timestamp_str
        else:
            user_data["latest_activity"] = None

        # Get today's date range
        today = date
        if past24hours:
            start_of_day = (today - timedelta(days=1)).strftime("%Y-%m-%dT%H:%M:%S.000Z")
            end_of_day = today.strftime("%Y-%m-%dT%H:%M:%S.000Z")
        else:
            start_of_day = today.strftime("%Y-%m-%dT00:00:00.000Z")
            end_of_day = (today + timedelta(days=1)).strftime("%Y-%m-%dT00:00:00.000Z")

        # Get today's counts
        today_interactions = interaction_collection.count_documents({
            "user_name": user_name,
            "timestamp": {"$gte": start_of_day, "$lt": end_of_day}
        })

        today_reasons = rationale_collection.count_documents({
            "user_name": user_name,
            "timestamp": {"$gte": start_of_day, "$lt": end_of_day},
            "eventType": {"$ne": "new_session"}
        })

        today_purchases = order_processed_collection.count_documents({
            "user_name": user_name,
            "timestamp": {"$gte": start_of_day, "$lt": end_of_day}
        })

        # Get total counts
        total_interactions = interaction_collection.count_documents({
            "user_name": user_name
        })

        total_reasons = rationale_collection.count_documents({
            "user_name": user_name,
            "eventType": {"$ne": "new_session"}
        })

        total_purchases = order_processed_collection.count_documents({
            "user_name": user_name
        })

        # Add today and total counts to user data
        user_data.update({
            "today_interactions": today_interactions,
            "today_reasons": today_reasons,
            "today_purchases": today_purchases,
            "total_interactions": total_interactions,
            "total_reasons": total_reasons,
            "total_purchases": total_purchases
        })

        if earliest_interaction_list:
            earliest_timestamp_str = earliest_interaction_list[0]["timestamp"]
            earliest_date = datetime.strptime(earliest_timestamp_str[:10], "%Y-%m-%d")
            user_data["earliest_activity"] = earliest_date.strftime("%Y-%m-%d")

            # calculate the current week information
            current_date = datetime.now()
            days_difference = (current_date - earliest_date).days
            current_week = (days_difference // 7) + 1

            week_start = earliest_date + timedelta(days=((current_week-1) * 7))
            week_end = earliest_date + timedelta(days=(current_week * 7) - 1)

            week_start_str = week_start.strftime("%b %d")
            week_end_str = week_end.strftime("%b %d")

            week_start_timestamp = week_start.strftime("%Y-%m-%dT00:00:00.000Z")
            week_end_timestamp = (week_end + timedelta(days=1)).strftime("%Y-%m-%dT00:00:00.000Z")

            # get the number of reasons and orders in the current week
            rationale_count = rationale_collection.count_documents({
                "user_name": user_name,
                "timestamp": {"$gte": week_start_timestamp, "$lt": week_end_timestamp},
                "eventType": {"$ne": "new_session"}
            })

            order_count = order_processed_collection.count_documents({
                "user_name": user_name,
                "timestamp": {"$gte": week_start_timestamp, "$lt": week_end_timestamp}
            })

            user_data.update({
                "weekNumber": current_week,
                "weekRange": f"{week_start_str} - {week_end_str}",
                "reasonProgress": rationale_count,
                "purchaseProgress": order_count
            })
        else:
            user_data["earliest_activity"] = None
            user_data["weekNumber"] = None
            user_data["weekRange"] = None
            user_data["reasonProgress"] = 0
            user_data["purchaseProgress"] = 0

        result.append(user_data)

    return jsonify(result), 200

@app.route('/api/test', methods=['GET'])
def test():
    return {"message": "Hello World"}

if __name__ == "__main__":
    app.run(debug=True, port=5000)
