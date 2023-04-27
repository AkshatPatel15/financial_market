import json
from datetime import datetime

data = '{"1654488000000":145.4734802246,"1654574400000":148.03175354,"1654660800000":147.2851867676,"1654747200000":141.989440918}'

# Parse the JSON data
data_dict = json.loads(data)

# Convert timestamp keys to datetime objects and replace the original keys
for timestamp_str in list(data_dict.keys()):
    timestamp = datetime.fromtimestamp(int(timestamp_str) / 1000)
    data_dict[timestamp] = data_dict.pop(timestamp_str)

# Convert the data to a list of dictionaries with 'name' and 'low' keys
output = [{'name': str(timestamp), 'low': value}
          for timestamp, value in data_dict.items()]

print(output)
