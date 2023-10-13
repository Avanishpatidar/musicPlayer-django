import syncedlyrics
query=input("Enter Song Name")
lrc = syncedlyrics.search(query)
import re
import json

# Input data
data = lrc

# Split the data into lines
lines = data.split('\n')

# Initialize a list to store the JSON entries
json_data = []

# Define a regular expression pattern to extract timestamps and text
pattern = r'\[(\d+:\d+\.\d+)\] (.+)'

for line in lines:
    match = re.match(pattern, line)
    if match:
        timestamp, text = match.groups()
        json_entry = {
            "time": timestamp,
            "lyrics": text
        }
        json_data.append(json_entry)

# Convert the list of JSON entries to a JSON-formatted string
json_string = json.dumps(json_data, indent=4)

# Print the JSON string
print(json_string)

