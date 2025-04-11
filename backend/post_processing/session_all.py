from pymongo import MongoClient
from bson import ObjectId
from datetime import datetime, timedelta, timezone

import config


client = MongoClient(config.MONGO_URI)
db = client[config.DATABASE_NAME]
interaction_collection = db[config.INTERACTION_COLLECTION_NAME]

session_split_collection = db[config.SESSION_SPLIT_COLLECTION_NAME]
order_processed_collection = db[config.ORDER_PROCESSED_COLLECTION_NAME]

SESSION_TIMEOUT = 42 # 42 minutes




def parse_timestamp(ts):
    try:
        return datetime.strptime(ts, "%Y-%m-%dT%H:%M:%S.%fZ")
    except ValueError:
        try:
            return datetime.strptime(ts, "%Y-%m-%dT%H:%M:%SZ")
        except ValueError:
            return None
def is_purchase_event(interaction):
    data_semantic_id = interaction.get('data-semantic-id', '')
    target = interaction.get('target', {})
    if isinstance(target, dict):
        inner_text = target.get('innerText', '')
    else:
        inner_text = ''

    purchase_keywords = ('buy_now', 'set_up_now', 'check_out')
    if any(data_semantic_id.endswith(keyword) for keyword in purchase_keywords):
        return True

    if inner_text == 'Proceed to checkout':
        return True

    return False


def get_purchased_items_by_uuid(uuid_value):

    order_doc = order_processed_collection.find_one({"uuid": uuid_value})
    if not order_doc or "items" not in order_doc:
        return []
    return order_doc["items"]

def fuzzy_match(search_term, product_name):
    for item in search_term.split():
        if item in product_name:
            return True
    return False

def find_related_interactions(purchased_items, reference_time, user_name):
    if not purchased_items:
        return []

    item_names = [item.get("title", "") for item in purchased_items]

    time_range = reference_time - timedelta(hours=24)

    interactions_cursor = interaction_collection.find({
        "timestamp": {"$gte": time_range.isoformat()},
        "user_name": user_name
    })

    matched_interaction_ids = []
    for itx in interactions_cursor:
        PageMeta = itx.get("pageMeta", {})
        if isinstance(PageMeta, dict):
            search_terms = PageMeta.get('search_term', [])
            if search_terms:
                search_term = search_terms[0]['term']
            else:
                search_term = ''
        else:
            search_term = ''

        for item_name in item_names:
            if fuzzy_match(search_term.lower(),item_name.lower()):
                matched_interaction_ids.append(itx["uuid"])
                break

    return matched_interaction_ids


def sessionize_interactions(user_name,save_to_db=False):
    session_num=0
    interactions = list(interaction_collection.find({"user_name": user_name}).sort('timestamp', 1))
    current_session = {
        "start_time": None,
        "end_time": None,
        "uuid_list": []
    }
    last_interaction_time = None

    for interaction in interactions:
        timestamp_str = interaction.get('timestamp')
        if not timestamp_str:
            continue
        timestamp = parse_timestamp(timestamp_str)
        if not timestamp:
            continue

        if last_interaction_time:
            time_diff = timestamp - last_interaction_time
            if time_diff > timedelta(minutes=SESSION_TIMEOUT):
                if current_session["start_time"] is not None:
                    current_session["end_time"] = last_interaction_time
                    session_name = f"'{current_session['start_time'].strftime('%Y-%m-%dT%H:%M:%S.%fZ')}'_'{current_session['end_time'].strftime('%Y-%m-%dT%H:%M:%S.%fZ')}'"
                    # print(session_name)
                    if save_to_db:
                        session_split_collection.insert_one({
                            "user_name": user_name,
                            "session_name": session_name,
                        "start_time": current_session["start_time"].strftime("%Y-%m-%dT%H:%M:%S.%fZ"),
                        "end_time": current_session["end_time"].strftime("%Y-%m-%dT%H:%M:%S.%fZ"),
                            "uuid_list": current_session["uuid_list"],
                        })
                    else:
                        print({
                            "user_name": user_name,
                            "session_name": session_name,
                            "start_time": current_session["start_time"].strftime("%Y-%m-%dT%H:%M:%S.%fZ"),
                            "end_time": current_session["end_time"].strftime("%Y-%m-%dT%H:%M:%S.%fZ"),
                            "uuid_list_length": len(current_session["uuid_list"]),
                        })
                    session_num+=1
                current_session = {
                    "start_time": None,
                    "end_time": None,
                    "uuid_list": []
                }

            elif is_purchase_event(interaction):
                event_uuid = interaction.get("uuid",'')
                current_session["uuid_list"].append(event_uuid)
                if event_uuid:
                    purchased_items = get_purchased_items_by_uuid(event_uuid)
                    related_interactions = find_related_interactions(purchased_items, timestamp, user_name)
                    if len(related_interactions) > 0:
                        print(f"related_interactions: {related_interactions}")
                    current_session["uuid_list"].extend(related_interactions)
                    if current_session["start_time"] is not None:
                        current_session["end_time"] = last_interaction_time
                        session_name = f"'{current_session['start_time'].strftime('%Y-%m-%dT%H:%M:%S.%fZ')}'_'{current_session['end_time'].strftime('%Y-%m-%dT%H:%M:%S.%fZ')}'"
                        # print(session_name)
                        if save_to_db:
                            session_split_collection.insert_one({
                            "user_name": user_name,
                            "session_name": session_name,
                            "start_time": current_session["start_time"].strftime("%Y-%m-%dT%H:%M:%S.%fZ"),
                            "end_time": current_session["end_time"].strftime("%Y-%m-%dT%H:%M:%S.%fZ"),
                            "uuid_list": current_session["uuid_list"],
                            })
                        else:
                            print({
                            "user_name": user_name,
                            "session_name": session_name,
                            "start_time": current_session["start_time"].strftime("%Y-%m-%dT%H:%M:%S.%fZ"),
                            "end_time": current_session["end_time"].strftime("%Y-%m-%dT%H:%M:%S.%fZ"),
                            "uuid_list_length": len(current_session["uuid_list"]),
                            })

                        session_num+=1
                    current_session = {
                        "start_time": None,
                        "end_time": None,
                        "uuid_list": []
                    }
        if current_session["start_time"] is None:
            current_session["start_time"] = timestamp

        current_session["uuid_list"].append(interaction["uuid"])

        last_interaction_time = timestamp

    # Add this block to handle the last session
    if current_session["start_time"] is not None:
        current_session["end_time"] = last_interaction_time
        session_name = f"'{current_session['start_time'].strftime('%Y-%m-%dT%H:%M:%S.%fZ')}'_'{current_session['end_time'].strftime('%Y-%m-%dT%H:%M:%S.%fZ')}'"
        # print(session_name)
        if save_to_db:
            session_split_collection.insert_one({
                "user_name": user_name,
                "session_name": session_name,
                "start_time": current_session["start_time"].strftime("%Y-%m-%dT%H:%M:%S.%fZ"),
                "end_time": current_session["end_time"].strftime("%Y-%m-%dT%H:%M:%S.%fZ"),
                "uuid_list": current_session["uuid_list"],
            })
        else:
            print({
                "user_name": user_name,
                "session_name": session_name,
                "start_time": current_session["start_time"].strftime("%Y-%m-%dT%H:%M:%S.%fZ"),
                "end_time": current_session["end_time"].strftime("%Y-%m-%dT%H:%M:%S.%fZ"),
                "uuid_list_length": len(current_session["uuid_list"]),
            })
        session_num+=1

    print(f"user_name: {user_name}, processed_time: {datetime.now(timezone.utc).isoformat()},number_of_sessions: {session_num}")



if __name__ == "__main__":
    # from extract_purchase_info_db import get_username_from_args
    # user_arg = get_username_from_args()
    # if user_arg:
    #     # Process only the specified user if a username is passed in
    #     distinct_users = [user_arg]
    # else:
    #     # Gather all distinct users from both the interaction and order collections
    #     distinct_users = set(interaction_collection.distinct("user_name")).union(
    #         interaction_collection.distinct("user_name")
    #     )

    # # For each user found, run process_order_info
    # for user in distinct_users:
    #     sessionize_interactions(user)
    sessionize_interactions("dakuo",save_to_db=False)
