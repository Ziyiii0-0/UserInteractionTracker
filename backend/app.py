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

import config

client = MongoClient(config.MONGO_URI)
db = client[config.DATABASE_NAME]
interaction_collection = db[config.INTERACTION_COLLECTION_NAME]
user_collection = db[config.USER_COLLECTION_NAME]
UPLOAD_FOLDER = config.UPLOAD_FOLDER

AWS_ACCESS_KEY = config.AWS_ACCESS_KEY
AWS_SECRET_KEY = config.AWS_SECRET_KEY
BUCKET_NAME = config.BUCKET_NAME

s3_client = boto3.client('s3',
        aws_access_key_id=AWS_ACCESS_KEY,
        aws_secret_access_key=AWS_SECRET_KEY)


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

REMOVE_ZIP_FILE= True
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)
localhost:5000

def check_user(user_id):
    if not user_id:
        app.logger.error(f'user_id is not available')
        return {'error': f'user_id is not available'}, 400

    try:
        user_id = ObjectId(user_id)
    except:
        app.logger.error(f'User ID is not a valid ObjectId: {user_id}')
        return {f'error': f'User ID is not a valid id:{user_id}'}, 400

    user= user_collection.find_one({"_id": user_id})

    if not user:
        app.logger.error(f'User not found. user_id: {user_id}')
        return {f'error': f'User not found. user_id: {user_id}'}, 403

    return user_id, 200




@app.route('/upload', methods=['POST'])
def upload_file():

    if 'file' not in request.files:
        app.logger.info('No file part in the request')
        return jsonify({'error': 'No file part'}), 400

    file = request.files['file']
    if file.filename == '':
        app.logger.info('No selected file')
        return jsonify({'error': 'No selected file'}), 400

    user_id = request.form.get('user_id')

    result, status = check_user(user_id)
    if status!=200:
        return jsonify(result), status
    else: user_id = result


    if file:
        filepath = ""
        if file.filename.endswith('.zip'):
            try:
                file_bytes = file.read()

                with zipfile.ZipFile(BytesIO(file_bytes), 'r') as zip_ref:
                    filepath = os.path.join(UPLOAD_FOLDER, file.filename.replace('.zip', ''))
                    os.makedirs(filepath, exist_ok=True)

                    zip_ref.extractall(filepath)
                    app.logger.info(f'File {file.filename} decompressed successfully')

            except zipfile.BadZipFile:
                app.logger.error(f'Error: {file.filename} is not a valid zip file')
                return jsonify({'error': 'Invalid zip file'}), 400
        else:
            filepath = os.path.join(UPLOAD_FOLDER, file.filename)
            os.makedirs(os.path.dirname(filepath), exist_ok=True)

            file.save(filepath)
            app.logger.info(f'File {file.filename} uploaded successfully')

        return jsonify({'message': f'File {file.filename} uploaded successfully'}), 200



@app.route('/interactions', methods=['POST'])
def interactions():
    data = None
    if request.is_json:
        json_data = request.get_json()

        interactions = json_data.get('interactions')

        if not interactions:
            return jsonify({'error': 'Interactions not found'}), 400


        user_id = json_data.get('user_id')

        result, status = check_user(user_id)
        if status!=200:
            return result, status
        else: user_id = result


        if interactions:
            updated_interactions = [
                {**interaction, "user_id": ObjectId(user_id)}
                for interaction in interactions
                ]

            interaction_collection.insert_many(updated_interactions)

            return jsonify({'message': f'Interactions added successfully'}), 200

        return jsonify({'error': f'Unknown error'}), 400

    else:
        return jsonify({"error": "Content-Type must be application/json"}), 400
@app.route('/s3url', methods=['GET'])
def s3url():

    user_id = request.args.get('user_id')

    result, status = check_user(user_id)

    if status!=200:
        return result, status
    else: user_id = result

    expiration = config.EXPIRATION_TIME
    expire_timestamp = int((datetime.now(timezone.utc) + timedelta(seconds=expiration//2)).timestamp()) # to make sure at least half of the time remains

    prefix = f'user_interaction_data/USER_{user_id}'

    try:
        # Generate a presigned POST URL
        response = s3_client.generate_presigned_post(
                    Bucket=BUCKET_NAME,
                    Key=f'{prefix}/${{filename}}',
                    ExpiresIn=expiration,
                    Conditions=[
                        ["content-length-range", 0*(1024*1024), 100*(1024*1024)], #100MB
                        ["starts-with", "$key", prefix],
                    ]
                )

        response['expire_timestamp'] = expire_timestamp
        return jsonify(response)

    except NoCredentialsError:
        return jsonify({'error': 'Credentials not available'}), 403


def get_interactions_by_date(user_id, date=None, return_data=None ):
    # If no date is specified, use today's date
    if date is None:
        date = datetime.now()

    # Create date range for the specified date

    start_of_day = date.strftime("%Y-%m-%dT00:00:00.000Z")
    end_of_day = (date + timedelta(days=1)).strftime("%Y-%m-%dT00:00:00.000Z")

    if return_data:
        interactions_date = interaction_collection.find({
            "user_id": ObjectId(user_id),
            "timestamp": {
                "$gte": start_of_day,
                "$lt": end_of_day
            }
        })
        interactions_date = list(interactions_date)
        for interaction in interactions_date:
            interaction["_id"] = str(interaction["_id"])
            if "user_id" in interaction:
                interaction["user_id"] = str(interaction["user_id"])

        interactions_all_time = interaction_collection.find({
            "user_id": ObjectId(user_id),
        })
        interactions_all_time = list(interactions_all_time)
        for interaction in interactions_all_time:
            interaction["_id"] = str(interaction["_id"])
            if "user_id" in interaction:
                interaction["user_id"] = str(interaction["user_id"])

        return {"on_date":interactions_date, "all_time":interactions_all_time}

    else:
        n_documents_date= interaction_collection.count_documents({
            "user_id": ObjectId(user_id),
            "timestamp": {
                "$gte": start_of_day,
                "$lt": end_of_day
            }
        })
        n_documents= interaction_collection.count_documents({
            "user_id": ObjectId(user_id),
        })
        return{
            "on_date" : n_documents_date,
            "all_time": n_documents
        }

@app.route('/interactions', methods=['GET'])
def get_interactions():
    user_id = request.args.get('user_id')
    date_str = request.args.get('date')  # in 'YYYY-MM-DD' format
    return_data = request.args.get('return')

    result, status = check_user(user_id)

    if status!=200:
        return result, status
    else: user_id = result

    if date_str:
        try:
            date = datetime.strptime(date_str, '%Y-%m-%d')
        except ValueError:
            return jsonify({"error": "Invalid date format, should be YYYY-MM-DD"}), 400
    else:
        date = None

    interactions = get_interactions_by_date(user_id, date, return_data)

    return jsonify(interactions)

if __name__ == '__main__':
    app.run(debug=True, port=5000)
