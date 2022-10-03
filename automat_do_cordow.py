import requests
import json

way = (966867056) 

get_nodes = f"https://www.openstreetmap.org/api/0.6/way/{way}.json"
response = requests.get(get_nodes).text
response_info = json.loads(response)
elements = response_info["elements"][0]["nodes"]

for i in elements:
    url = f"https://api.openstreetmap.org/api/0.6/node/{i}.json"
    coord_response = requests.get(url).text
    coord_response_info = json.loads(coord_response)
    coord_elements = coord_response_info["elements"][0]
    lat = coord_elements["lat"]
    lon = coord_elements["lon"]
    print("["+ str(lat) +','+ str(lon)+"],")
    