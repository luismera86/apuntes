# Manejo de ficheros cvs

import csv

usuarios = [
    ("Luis", "Desarrollador FullStack", "mail1@mail.com"),
    ("Juan", "Desarrollador FullStack", "mail2@mail.com"),
    ("Pedro", "Desarrollador FullStack", "mail3@mail.com"),
]

# La instrucción with nos permite abrir un fichero sin la necesidad de cerrarlo manualmente

with open(
    "usuarios.csv", "w", newline="\n"
) as csvfile:  # Abrimos el fichero en modo escritura lo separamos por filas
    writer = csv.writer(csvfile, delimiter=",")  # Escritor
    for usuario in usuarios:
        writer.writerow(usuario)

## Leer los ficheros csv

with open("usuarios.csv", newline="\n") as csvfile:
    reader = csv.reader(csvfile, delimiter=",")  # Lector
    for usuario in reader:
        print(usuario)

## Insertando la información en diccionarios

with open("usuarios.csv", "w", newline="\n") as csvfile:
    campos = ["nombre", "empleo", "email"]
    writer = csv.DictWriter(csvfile, fieldnames=campos)  # Escritor
    writer.writeheader() # Escribe los fieldnames en la cabecera 
    for nombre, empleo, email in usuarios:
        writer.writerow({
            "nombre": nombre,
            "empleo": empleo,
            "email": email
        })

# El fichero usuarios.csv queda de la siguiente manera: 
# nombre,empleo,email
# Luis,Desarrollador FullStack,mail1@mail.com
# Juan,Desarrollador FullStack,mail2@mail.com
# Pedro,Desarrollador FullStack,mail3@mail.com

with open("usuarios.csv", newline="\n") as csvfile:
    reader = csv.DictReader(csvfile)  # Lector
    for usuario in reader:
        print(usuario["nombre"], usuario["email"], usuario["empleo"])

# https://docs.hektorprofe.net/python/manejo-de-ficheros/ficheros-csv/


