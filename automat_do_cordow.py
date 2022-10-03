import requests
import json

way = (966867056) 

get_nodes = f"https://www.openstreetmap.org/api/0.6/way/{way}.json"
response = requests.get(get_nodes).text
response_info = json.loads(response)
type(response_info)
elements = response_info["elements"]
zero = elements[0]
nodes = zero["nodes"]

for i in nodes:
    url = f"https://api.openstreetmap.org/api/0.6/node/{i}.json"
    coord_response = requests.get(url).text
    coord_response_info = json.loads(coord_response)
    coord_elements = coord_response_info["elements"]
    zero1 = coord_elements[0]
    lat = zero1["lat"]
    lon = zero1["lon"]
    print("["+ str(lat) +','+ str(lon)+"],")
    