from clarifai.rest import ClarifaiApp, Image
from clarifai.rest import Image as CLImage

import requests
import json
from pprint import pprint
app=ClarifaiApp(api_key='150500f8fb424f57a89dbb731b79ae2a')
model=app.models.get('apparel')
model1=app.models.get('color')

holy_moly="https://images.calzedonia.com/get/w/2000/CGU12A_wear_019_F.jpg"
image=CLImage(url=holy_moly)
small_toes=model1.predict([image])
big_toes=model.predict([image])
jagi=small_toes['outputs'][0]['data']['colors'][0]['w3c']["name"]
saranghae=big_toes['outputs'][0]['data']['concepts'][0]["name"]
print(jagi,saranghae)


# for i in big_toes['outputs'][0]['data']['concepts']:
#     print(i["name"])