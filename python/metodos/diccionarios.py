
# Mostrar un valor del diccionario
colores = {'amarillo': 'yellow', 'rojo': 'red', 'azul': 'blue'}
print(colores['azul']) # blue

# Mostrar un valor del diccionario con un valor por defecto
colores = {'amarillo': 'yellow', 'rojo': 'red', 'azul': 'blue'}
print(colores.get('azul', 'No se encuentra')) # blue
print(colores.get('azu', 'No se encuentra')) # No se encuentra, nos devuelve el valor por defecto cuando no encuentra

# Obtener un resultado booleano para verificar si una clave se encuentra un elemento en el diccionario
colores = {'amarillo': 'yellow', 'rojo': 'red', 'azul': 'blue'}
print('azul' in colores) # True si se encuentra el azul en el diccionario
print('negro' in colores) # False no se encuentra el negro en el diccionario

# Obtener una lista con las claves del diccionario
colores = {'amarillo': 'yellow', 'rojo': 'red', 'azul': 'blue'}
print( colores.keys() ) # dict_keys(['amarillo', 'rojo', 'azul'])

# Obtener una lista con los valores del diccionario
colores = {'amarillo': 'yellow', 'rojo': 'red', 'azul': 'blue'}
print( colores.values() ) # dict_values(['yellow', 'red', 'blue']))

# Obtener una lista de tuplas con las claves y los valores del diccionario
colores = {'amarillo': 'yellow', 'rojo': 'red', 'azul': 'blue'}
print( colores.items() ) # dict_items([('amarillo', 'yellow'), ('rojo', 'red'), ('azul', 'blue')])

# Recorrer con un for e imprimir las claves 
for c in colores:
    print(c)

# Recorrer con un for e imprimir los valores 
for c in colores:
    print(colores[c])

# Recorrer con un for e imprimir las claves con métodos 
for c in colores.keys():
    print(c)

# Recorrer con un for e imprimir los valores con métodos
for c in colores.values():
    print(c)

# Recorrer con un for e imprimir las claves y los valores con métodos
for c, v in colores.items():
    print(c, v)

# Eliminar un elemento del diccionario 
colores = {'amarillo': 'yellow', 'rojo': 'red', 'azul': 'blue'}
colores.pop('amarillo', 'No encontrado') # clave que se desea eliminar y valor por defecto en caso que no encuentre la clave
print(colores) # {'rojo': 'red', 'azul': 'blue'}

print(colores.pop('negro', 'No encontrado')) # No encontrado

# Vaciar un diccionario
colores = {'amarillo': 'yellow', 'rojo': 'red', 'azul': 'blue'}
colores.clear()
print(colores) # {}
