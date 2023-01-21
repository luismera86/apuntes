# Manejo de ficheros json 

import json

usuarios = [
    ("Luis", "Desarrollador FullStack", "mail1@mail.com"),
    ("Juan", "Desarrollador FullStack", "mail2@mail.com"),
    ("Pedro", "Desarrollador FullStack", "mail3@mail.com"),
]

datos = []

for nombre, empleo, email in usuarios:
    datos.append({"nombre": nombre, "empleo": empleo, "email": email})

print(datos)

with open("usuarios.json", "w") as jsonfile:
    json.dump(datos, jsonfile)

## Recuperar los datos de un archivo json

datos_json = []

with open("usuarios.json") as jsonfile:
    datos_json= json.load(jsonfile)

print(datos_json)

# https://docs.hektorprofe.net/python/manejo-de-ficheros/ficheros-json/