import sqlite3

conexion = sqlite3.connect('ejemplo.db') # Creamos la base de datos 

cursor = conexion.cursor() # Iniciamos el cursor con el que vamos a ejecutar código sql

# cursor.execute('CREATE TABLE usuarios (nombre VARCHAR(100), edad INTEGER, email VARCHAR(100))')
# cursor.execute("INSERT INTO usuarios VALUES('Luis', 36, 'luismera@gmail.com')")
# cursor.execute('SELECT * FROM usuarios') # leemos la información de la tabla
# usuario = cursor.fetchone() # accedemos al primer elemento de la tabla

# usuarios = [
#     ('Lucho', 30, 'mail1@cmail.com'),
#     ('Maria', 50, 'mail2@cmail.com'),
#     ('Mario', 36, 'mail3@cmail.com'),
# ]

# cursor.executemany('INSERT INTO usuarios VALUES (?,?,?)', usuarios) # Insertamos toda la lista de usuarios

# cursor.execute('SELECT * FROM usuarios') # leemos la información de la tabla
# usuarios = cursor.fetchall()
# print(usuarios) # [('Luis', 36, 'luismera@gmail.com'), ('Lucho', 30, 'mail1@cmail.com'), ('Maria', 50, 'mail2@cmail.com'), ('Mario', 36, 'mail3@cmail.com')]

# for usuario in usuarios: # Hacemos un ciclo for para leer uno por uno los usuarios de la tabla
#     print(usuario)

## Claves primarias

# cursor.execute('''
#     CREATE TABLE usuarios (
#     dni VARCHAR(9) PRIMARY KEY,
#     nombre VARCHAR(100), 
#     edad INTEGER, 
#     email VARCHAR(100)
#     )
# ''')

usuarios = [
    ('3234932354', 'Lucho', 30, 'mail1@cmail.com'),
    ('3234932355', 'Maria', 50, 'mail2@cmail.com'),
    ('3234932333', 'Mario', 36, 'mail3@cmail.com'),
]


cursor.execute("INSERT INTO usuarios VALUES ('3234932358', 'Juan', 36, 'mail3@cmail.com')")

conexion.commit() # este método hace que se guarden los cambios para insertarlos en la base de datos
conexion.close()