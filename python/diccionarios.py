
# Los diccionarios son desordenados, nunca sabes en que orden puede mostrarse las claves con sus valores

vacio = {}

print(type(vacio)) # Nos indica que es de tipo dict de diccionario

# Los diccionarios tiene que contener en su interior una clave y un valor 

colores = {'Azul': 'Blue', 'Rojo': 'Red'} # Azul es la clave y Blue es el valor 

# Acceder a los valores de un diccionario

print(colores['Azul']) # Nos devuelve Blue que es el valor de la clave Azul 

numeros = {10: 'Diez', 20: 'Veinte'} # también se pueden usar números como clave  

print(numeros[20]) # Nos devuelve Veinte 

# Añadir valores a un diccionario

numeros[30] = 'Treinta' 

print(numeros) # Se añade la clave 30 y el valor Treinta en el diccionario

# redefinir un valor 

numeros[10] = 'Once' 

print(numeros) # Nos devuelve {10: 'Once', 20: 'Veinte', 30: 'Treinta'} redefinimos el valor de la clave 10 

# Borrar una clave y valor 

del(numeros[10])

print(numeros) # Nos devuelve {20: 'Veinte', 30: 'Treinta'} ya que eliminamos la clave 10 con su valor 

# Operaciones matemáticas con valores 

edades = {'Luis': 36, 'Juan': 23, 'Maria': 32}

edades['Juan'] += 5 

print(edades) # Aumentamos el número de valor en 5 a Juan {'Luis': 36, 'Juan': 28, 'Maria': 32} 

print('El promedio de edades es: ' + str((edades['Juan']+edades['Luis']+edades['Maria']) / len(edades))) # El promedio de edades es: 32.0 sumamos todos los valores de las edades y los dividimos por la cantidad de valores


# Método items, es similar a enumerate pero para diccionarios

for clave, valor in edades.items():
  print(clave, valor) # Nos muestra item por item su clave con su valor por ejemplo Luis 36


# Combinarlos con listas 

personajes = []

personaje1 = {'Nombre': 'Gandalf', 'Clase': 'Mago', 'Raza': 'Humano'}
personaje2 = {'Nombre': 'Legolas', 'Clase': 'Mago', 'Raza': 'Elfo'}
personaje3 = {'Nombre': 'Gimli', 'Clase': 'Guerrero', 'Raza': 'Enano'}

personajes.append(personaje1)
personajes.append(personaje2)
personajes.append(personaje3)

print(personajes)

# Leer los datos de la lista de diccionarios

for personaje in personajes:
  print(personaje['Nombre'] + ' de clase ' + personaje['Clase'] + ' es de la raza ' + personaje['Raza'])
  # Gandalf de clase Mago es de la raza Humano
  # Legolas de clase Mago es de la raza Elfo
  # Gimli de clase Guerrero es de la raza Enano


# El siguiente ejercicio te servirá para practicar la manipulación de diccionarios.

# Debes realizar las siguientes instrucciones de forma ordenada sobre la variable animales para que el ejercicio valide correctamente:

# Añade al diccionario las claves perro, gato y rana con sus respectivos valores dog, cat y frog.

# Modifica las claves caballo y vaca con los valores horse y cow respectivamente.

# Por último elimina del diccionario las claves rana y vaca.

animales = {"caballo":"", "vaca":""}

animales['perro'] = 'dog'
animales['gato'] = 'cat'
animales['rana'] = 'frog'
animales['caballo'] = 'horse'
animales['vaca'] = 'cow'

del(animales['vaca'], animales['rana'])


print(animales)

