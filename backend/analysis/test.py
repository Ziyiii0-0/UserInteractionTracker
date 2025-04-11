import os
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from datetime import datetime, timedelta
from pymongo import MongoClient
import sys
sys.path.append('/home/ubuntu/UserInteractionTracker/backend')

MONGO_URI = "mongodb://localhost:27017/"
DATABASE_NAME = "UserInteraction"
INTERACTION_COLLECTION_NAME = "interactions"
USER_COLLECTION_NAME = "users"


# Connect to MongoDB
client = MongoClient(MONGO_URI)
db = client[DATABASE_NAME]
interaction_collection = db[INTERACTION_COLLECTION_NAME]
user_collection = db[USER_COLLECTION_NAME]

def get_user_interactions(start_date):
    """
    Get interaction data for all users within the specified date range

    Args:
        start_date (datetime): Start date

    Returns:
        dict: Dictionary with username as key and interaction list as value
    """
    all_users = list(user_collection.find({}, {"user_name": 1, "_id": 0}))
    user_interactions = {}

    for user in all_users:
        user_name = user.get("user_name")
        if not user_name:
            continue

        # Get user interaction data
        query = {
            "user_name": user_name,
            "timestamp": {"$gte": start_date.isoformat()}
        }

        interactions = list(interaction_collection.find(
            query,
            {"timestamp": 1, "eventType": 1, "uuid": 1, "_id": 0,'navigationType':1}
        ).sort("timestamp", 1))

        if interactions:
            user_interactions[user_name] = interactions
            print(f"Retrieved {len(interactions)} interaction records for user {user_name}")

    return user_interactions

def calculate_interaction_intervals(user_interactions):
    """
    Calculate time intervals between consecutive interactions for all users.
    When encountering patterns to skip (click->new or input->click),
    calculate interval from the first event to the next valid event.

    Args:
        user_interactions (dict): Dictionary of user interactions

    Returns:
        list: List of all interaction intervals in seconds
    """
    all_intervals = []
    click_types = {'click_a', 'click_b', 'click_c'}
    skipped_patterns = 0

    # Store very short intervals with their context
    very_short_intervals = []

    for user_name, interactions in user_interactions.items():
        if len(interactions) < 2:
            continue

        i = 0
        while i < len(interactions) - 1:
            current_event = interactions[i].get('eventType', '')
            next_event = interactions[i + 1].get('eventType', '')
            next_nav_type = interactions[i + 1].get('navigationType', '')

            # Check if next event should be skipped
            is_current_click = current_event in click_types
            is_next_click = next_event in click_types
            is_next_new_nav = next_nav_type == 'new'

            should_skip_next = (
                (is_current_click and is_next_new_nav) or
                (current_event == 'input' and is_next_click)
            )

            if should_skip_next and i < len(interactions) - 2:
                # Find the next valid event
                next_valid_idx = i + 2
                current_time = datetime.fromisoformat(interactions[i]['timestamp'])
                next_valid_time = datetime.fromisoformat(interactions[next_valid_idx]['timestamp'])
                interval = (next_valid_time - current_time).total_seconds()
                all_intervals.append(interval)

                # Check if this is a very short interval
                if interval < 0.06:
                    very_short_intervals.append({
                        'user': user_name,
                        'interval': interval,
                        'first_event': {
                            'type': current_event,
                            'time': current_time.isoformat(),
                            'nav_type': interactions[i].get('navigationType', ''),
                            'uuid': interactions[i].get('uuid', '')
                        },
                        'skipped_event': {
                            'type': next_event,
                            'time': interactions[i + 1]['timestamp'],
                            'nav_type': next_nav_type,
                            'uuid': interactions[i + 1].get('uuid', '')
                        },
                        'second_event': {
                            'type': interactions[next_valid_idx]['eventType'],
                            'time': next_valid_time.isoformat(),
                            'nav_type': interactions[next_valid_idx].get('navigationType', ''),
                            'uuid': interactions[next_valid_idx].get('uuid', '')
                        }
                    })

                skipped_patterns += 1
                i = next_valid_idx
            else:
                # Calculate normal interval
                current_time = datetime.fromisoformat(interactions[i]['timestamp'])
                next_time = datetime.fromisoformat(interactions[i + 1]['timestamp'])
                interval = (next_time - current_time).total_seconds()
                all_intervals.append(interval)

                # Check if this is a very short interval
                if interval < 0.06:
                    very_short_intervals.append({
                        'user': user_name,
                        'interval': interval,
                        'first_event': {
                            'type': current_event,
                            'time': current_time.isoformat(),
                            'nav_type': interactions[i].get('navigationType', ''),
                            'uuid': interactions[i].get('uuid', '')
                        },
                        'second_event': {
                            'type': next_event,
                            'time': next_time.isoformat(),
                            'nav_type': next_nav_type,
                            'uuid': interactions[i + 1].get('uuid', '')
                        }
                    })

                i += 1

    # Print detailed statistics about events
    total_intervals = sum(len(ints) - 1 for ints in user_interactions.values() if len(ints) > 1)
    print(f"\nInterval Statistics:")
    print(f"Total possible intervals: {total_intervals}")
    print(f"Calculated intervals: {len(all_intervals)}")
    print(f"Patterns skipped (but intervals calculated): {skipped_patterns}")
    print(f"Average interval: {np.mean([i/60 for i in all_intervals]):.2f} minutes")
    print(f"Median interval: {np.median([i/60 for i in all_intervals]):.2f} minutes")

    # Print examples of very short intervals
    print(f"\nVery Short Intervals (<0.06s) Examples:")
    for idx, interval_data in enumerate(sorted(very_short_intervals, key=lambda x: x['interval'])[:5]):
        print(f"\nExample {idx + 1} (Interval: {interval_data['interval']:.4f}s):")
        print(f"User: {interval_data['user']}")
        print(f"First Event: {interval_data['first_event']['type']} (Nav: {interval_data['first_event']['nav_type']}) [UUID: {interval_data['first_event']['uuid']}]")
        if 'skipped_event' in interval_data:
            print(f"Skipped Event: {interval_data['skipped_event']['type']} (Nav: {interval_data['skipped_event']['nav_type']}) [UUID: {interval_data['skipped_event']['uuid']}]")
        print(f"Second Event: {interval_data['second_event']['type']} (Nav: {interval_data['second_event']['nav_type']}) [UUID: {interval_data['second_event']['uuid']}]")
        print(f"Timestamps: {interval_data['first_event']['time']} -> {interval_data['second_event']['time']}")

    return all_intervals

def plot_percentile_distribution(intervals_minutes, start_percentile=98.0, end_percentile=99.0, step=0.01):
    """
    Create a plot showing how the interval threshold changes across percentiles
    """
    percentiles = np.arange(start_percentile, end_percentile + step, step)
    thresholds = np.percentile(intervals_minutes, percentiles)

    # Create figure for percentile distribution
    plt.figure(figsize=(12, 6))
    plt.plot(percentiles, thresholds, 'b-', marker='o', markersize=4)
    plt.grid(True, alpha=0.3)
    plt.title('Interval Thresholds by Percentile (98% - 99%)')
    plt.xlabel('Percentile')
    plt.ylabel('Interval Threshold (minutes)')

    # Add value labels
    for i, (p, t) in enumerate(zip(percentiles, thresholds)):
        plt.annotate(f'{t:.2f}',
                    (p, t),
                    textcoords="offset points",
                    xytext=(0,10),
                    ha='center',
                    fontsize=8)

    # Print the values
    print("\nDetailed Percentile Analysis (98% - 99%):")
    print("Percentile | Threshold (minutes)")
    print("-" * 30)
    for p, t in zip(percentiles, thresholds):
        print(f"{p:9.1f}% | {t:8.2f}")

    plt.tight_layout()

    # Save the plot
    os.makedirs('interval_analysis', exist_ok=True)
    plt.savefig(os.path.join('interval_analysis', 'percentile_distribution.png'))
    plt.close()

    return dict(zip(percentiles, thresholds))

def plot_interval_distribution(intervals, use_log_scale=True, max_interval_minutes=None):
    """
    Create a distribution plot of interaction intervals

    Args:
        intervals (list): List of interaction intervals in seconds
        use_log_scale (bool): Whether to use log scale for axes
        max_interval_minutes (float): Maximum interval to include in minutes (None for all data)
    """
    plt.figure(figsize=(12, 6))

    # Convert intervals to minutes for better readability
    intervals_minutes = np.array([interval/60 for interval in intervals])

    # Calculate detailed percentiles and create separate plot
    percentile_thresholds = plot_percentile_distribution(intervals_minutes)

    # Calculate percentiles for main plot
    p98, p99, p995 = np.percentile(intervals_minutes, [98, 99, 99.5])
    print("\nPercentile Analysis:")
    print(f"98% of intervals are shorter than: {p98:.2f} minutes")
    print(f"99% of intervals are shorter than: {p99:.2f} minutes")
    print(f"99.5% of intervals are shorter than: {p995:.2f} minutes")

    # Filter data if max_interval is specified
    if max_interval_minutes is not None:
        mask = intervals_minutes <= max_interval_minutes
        intervals_minutes = intervals_minutes[mask]
        if len(intervals_minutes) == 0:
            print(f"No intervals found within {max_interval_minutes} minutes")
            return

        range_text = f" (≤{max_interval_minutes} min)"
    else:
        range_text = ""

    if use_log_scale:
        # Create logarithmically spaced bins
        min_val = max(np.min(intervals_minutes), 1e-4)  # Avoid zero or negative values
        max_val = np.max(intervals_minutes)
        bins = np.logspace(np.log10(min_val), np.log10(max_val), 50)
    else:
        # Use regular bins for linear scale
        bins = 50

    # Create histogram with appropriate scaling
    plt.hist(intervals_minutes, bins=bins, edgecolor='black', alpha=0.7, density=True)

    # Get histogram data
    counts, bin_edges = np.histogram(intervals_minutes, bins=bins, density=True)

    if use_log_scale:
        plt.xscale('log')  # Set x-axis to logarithmic scale
        # plt.yscale('log')  # Set y-axis to logarithmic scale
        scale_text = "log scale"
    else:
        scale_text = "linear scale"

    plt.title(f'Distribution of Time Intervals Between User Interactions{range_text}\n({scale_text})')
    plt.xlabel(f'Time Interval (minutes, {scale_text})')
    plt.ylabel(f'Density ({scale_text})')
    plt.grid(True, alpha=0.3)

    # Calculate statistics for filtered data
    mean_interval = np.mean(intervals_minutes)
    median_interval = np.median(intervals_minutes)

    # Add vertical lines for mean, median and percentiles
    plt.axvline(x=mean_interval, color='r', linestyle='--', alpha=0.8, label=f'Mean: {mean_interval:.2f} min')
    plt.axvline(x=median_interval, color='g', linestyle='--', alpha=0.8, label=f'Median: {median_interval:.2f} min')
    plt.axvline(x=p98, color='purple', linestyle=':', alpha=0.8, label=f'98th percentile: {p98:.2f} min')
    plt.axvline(x=p99, color='orange', linestyle=':', alpha=0.8, label=f'99th percentile: {p99:.2f} min')
    plt.axvline(x=p995, color='brown', linestyle=':', alpha=0.8, label=f'99.5th percentile: {p995:.2f} min')

    # Add legend
    plt.legend(loc='upper left', bbox_to_anchor=(0.02, 0.98))

    # Add statistics as text box
    stats_text = (f'Mean: {mean_interval:.2f} min\n'
                 f'Median: {median_interval:.2f} min\n'
                 f'98th percentile: {p98:.2f} min\n'
                 f'99th percentile: {p99:.2f} min\n'
                 f'99.5th percentile: {p995:.2f} min\n'
                 f'Sample size: {len(intervals_minutes)}')

    plt.text(0.95, 0.95,
             stats_text,
             transform=plt.gca().transAxes,
             verticalalignment='top',
             horizontalalignment='right',
             bbox=dict(boxstyle='round', facecolor='white', alpha=0.8))

    plt.tight_layout()

    # Create directory if it doesn't exist
    os.makedirs('interval_analysis', exist_ok=True)

    # Save the plot with appropriate filename
    scale_type = 'log' if use_log_scale else 'linear'
    range_suffix = f'_under_{max_interval_minutes}min' if max_interval_minutes is not None else ''
    filename = f'{scale_type}_scale{range_suffix}.png'
    plt.savefig(os.path.join('interval_analysis', filename))
    plt.close()

if __name__ == "__main__":
    # Calculate intervals for the last week
    start_date = datetime.now() - timedelta(days=7)
    user_interactions = get_user_interactions(start_date)
    intervals = calculate_interaction_intervals(user_interactions)

    # Create both log scale and linear scale plots
    plot_interval_distribution(intervals, use_log_scale=True)  # Full range, log scale
    plot_interval_distribution(intervals, use_log_scale=False)  # Full range, linear scale
    plot_interval_distribution(intervals, use_log_scale=False, max_interval_minutes=100)  # Under 100 minutes, linear scale
