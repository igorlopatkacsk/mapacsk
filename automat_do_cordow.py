import requests
import json

way = [966867064, 966867066, 966867067, 966867063, 966867068, 966867061, 966867070, 200453264, 200453276, 966867071, 271891142, 966867057, 966867082, 966867077, 200453304, 966867051, 966867074,966867056]

for i in way:
    get_nodes = f"https://www.openstreetmap.org/api/0.6/way/{i}.json"
    response = requests.get(get_nodes).text
    response_info = json.loads(response)
    elements = response_info["elements"][0]["nodes"]
    
    if "ref" in response_info["elements"][0]["tags"]:
        bulding =  response_info["elements"][0]["tags"]["ref"]
        print(bulding)
        
    else:
        bulding =  response_info["elements"][0]["tags"]["name"]
        print(bulding)
        
    for i in elements:
        url = f"https://api.openstreetmap.org/api/0.6/node/{i}.json"
        coord_response = requests.get(url).text
        coord_response_info = json.loads(coord_response)
        coord_elements = coord_response_info["elements"][0]
        lat = coord_elements["lat"]
        lon = coord_elements["lon"]
        print("["+ str(lat) +','+ str(lon)+"],")
        
