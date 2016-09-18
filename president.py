import wikipedia
import json

stuff = open("presidents.json")
presidents = json.load(stuff)
for index, data in enumerate(presidents):
    print index
    presidents[index]["summary"] = wikipedia.summary(data["president"])
with open('complete-presidents.json', 'w') as f:
    f.write(json.dumps(presidents))
