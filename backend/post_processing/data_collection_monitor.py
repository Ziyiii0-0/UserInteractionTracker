from pymongo import MongoClient
from datetime import datetime, timezone, timedelta
from .abnormal_detection import abnormal_detection, get_interactions_by_date
import config

# Initialize MongoDB client
client = MongoClient(config.MONGO_URI)
db = client[config.DATABASE_NAME]
session_split_collection = db[config.SESSION_SPLIT_COLLECTION_NAME]
order_processed_collection = db[config.ORDER_PROCESSED_COLLECTION_NAME]
interaction_collection = db[config.INTERACTION_COLLECTION_NAME]
rationale_collection = db[config.RATIONALE_COLLECTION_NAME]
def analyze_user_data(user_name, date):
    # Fetch interactions for the specified date
    interactions = list(get_interactions_by_date(user_name, date))
    interaction_count = len(interactions)

    # Get the latest interaction timestamp directly from database
    latest_interaction = interaction_collection.find(
        {"user_name": user_name}
    ).sort("timestamp", -1).limit(1)

    latest_interaction_timestamp = None
    latest_interaction_list = list(latest_interaction)
    if latest_interaction_list:
        latest_interaction_timestamp = latest_interaction_list[0].get("timestamp")

    if date is None:
        date = datetime.now(timezone.utc)
    if isinstance(date, str):
        date = datetime.fromisoformat(date)
    # Convert the date string to a datetime object representing the start of the day
    start_of_day = date.strftime("%Y-%m-%dT00:00:00.000Z")
    # Calculate the end of the day
    end_of_day = (date + timedelta(days=1)).strftime("%Y-%m-%dT00:00:00.000Z")
    # Fetch session data from the database
    sessions = list(session_split_collection.find({"user_name": user_name, "end_time": {"$gte": start_of_day, "$lt": end_of_day}}))
    session_count = len(sessions)

    # Fetch purchase data from the database
    purchases = list(order_processed_collection.find({"user_name": user_name, "timestamp": {"$gte": start_of_day, "$lt": end_of_day}}))
    purchase_count = len(purchases)

    # Fetch rationnale data from the database
    rationnales = list(rationale_collection.find({"user_name": user_name, "timestamp": {"$gte": start_of_day, "$lt": end_of_day}}))
    rationnale_count = len(rationnales)

    # Detect abnormal behavior
    abnormal_behaviors = abnormal_detection(user_name, date)
    abnormal_behavior_count=0
    if abnormal_behaviors:
        if abnormal_behaviors[0]['reason'] == 'No interactions':
            abnormal_behavior_count = 0
            pass
        else:
            abnormal_behavior_count = len(abnormal_behaviors)
    else:
        abnormal_behavior_count = 0
    # # Output results
    # print(f"User: {user_name}")
    # print(f"Date: {date}")
    # print(f"Number of Interactions: {interaction_count}")
    # print(f"Number of Sessions: {session_count}")
    # print(f"Number of Purchases: {purchase_count}")
    # print(f"Number of Rationnales: {rationnale_count}")
    # print(f"Abnormal Behaviors: {abnormal_behavior_count}")

    # Fetch all interactions for the user
    all_interaction_count = interaction_collection.count_documents({"user_name": user_name})

    # Fetch all session data for the user
    all_session_count = session_split_collection.count_documents({"user_name": user_name})

    # Fetch all rationnale data for the user
    all_rationale_count = rationale_collection.count_documents({"user_name": user_name})

    # Fetch all purchase data for the user
    all_purchase_count = order_processed_collection.count_documents({"user_name": user_name})

    # # Output overall results
    # print("\nOverall User Data:")
    # print(f"Total Number of Interactions: {all_interaction_count}")
    # print(f"Total Number of Sessions: {all_session_count}")
    # print(f"Total Number of Purchases: {all_purchase_count}")
    # print(f"Total Number of Rationnales: {all_rationale_count}")

    message={
        "user_name": user_name,
        "date": date,
        "latest_interaction_timestamp": latest_interaction_timestamp,
        "interaction_count": interaction_count,
        "session_count": session_count,
        "purchase_count": purchase_count,
        # "purchase_list": purchases,
        "rationnale_count": rationnale_count,
        "abnormal_behavior_count": abnormal_behavior_count,
        "abnormal_behaviors": abnormal_behaviors,
        "all_interaction_count": all_interaction_count,
        "all_session_count": all_session_count,
        "all_purchase_count": all_purchase_count,
        "all_rationnale_count": all_rationale_count,
    }
    return message

# Example usage
if __name__ == "__main__":
    user_name = "hailab-buyer-test"
    date = "2025-03-06"#"2025-03-06"
    message = analyze_user_data(user_name, date)
    from IPython import embed
    embed()
