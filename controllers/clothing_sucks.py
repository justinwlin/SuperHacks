from clarifai.rest import ClarifaiApp, Image
from clarifai.rest import Image as CLImage

import requests
import json
from pprint import pprint
app=ClarifaiApp(api_key='150500f8fb424f57a89dbb731b79ae2a')
model=app.models.get('apparel')
model1=app.models.get('color')
<<<<<<< HEAD
web_url="https://images.calzedonia.com/get/w/2000/CGU12A_wear_019_F.jpg"
image=CLImage(url=web_url)
color_prediction=model1.predict([image])
clothing_prediction=model.predict([image])

print(color_prediction['outputs'][0]['data']['colors'][0]['w3c']["name"],clothing_prediction['outputs'][0]['data']['concepts'][0]["name"])
=======
holy_moly="https://images.calzedonia.com/get/w/2000/CGU12A_wear_019_F.jpg"
image=CLImage(url=holy_moly)
small_toes=model1.predict([image])
big_toes=model.predict([image])
jagi=small_toes['outputs'][0]['data']['colors'][0]['w3c']["name"]
saranghae=big_toes['outputs'][0]['data']['concepts'][0]["name"]
print(jagi,saranghae)
>>>>>>> 05d89dad295a2cd3122ed53c7d5b7f5568a81d46

# for i in big_toes['outputs'][0]['data']['concepts']:
#     print(i["name"])