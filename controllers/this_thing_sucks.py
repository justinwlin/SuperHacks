from clarifai.rest import ClarifaiApp, Image
from clarifai.rest import Image as CLImage

import requests
import json
from pprint import pprint

app=ClarifaiApp(api_key='150500f8fb424f57a89dbb731b79ae2a')
model=app.models.get('color')
holy_moly="https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
image=CLImage(url=holy_moly)
big_toes=model.predict([image])

for i in big_toes['outputs'][0]['data']['colors']:
    print(i['w3c']["name"])