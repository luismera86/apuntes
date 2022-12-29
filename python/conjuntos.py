
conjunto = {1,2,3}

# Añadir elementos al conjunto

conjunto.add(4)

print(conjunto) # nos muestra {1, 2, 3, 4} añade el 4 al final

conjunto.add(0) 

print(conjunto) # nos muestra {0, 1, 2, 3, 4} añade el 0 al principio, los elementos se añaden por orden numérico 

conjunto.add('H')

print(conjunto) # añade la letra H al final, ya que guarde primero los números y después las letras {0, 1, 2, 3, 4, 'H'}

conjunto.add('A')

print(conjunto) # las string no los añade en orden alfabético {0, 1, 2, 3, 4, 'H', 'A'}

conjunto.add('Z')

print(conjunto) # {0, 1, 2, 3, 4, 'Z', 'H', 'A'}

# validar información de los conjuntos

grupo = {'Luis', 'Ramon', 'Maria'}

print('Luis' in grupo) # La respuesta es True ya que Luis se encuentra dentro del grupo
print('Carla' in grupo) # La respuesta es False ya que Carla no se encuentra dentro del grupo
print('Ramon' not in grupo) # La respuesta es False ya que preguntamos si Ramon se no se encuentra en el grupo y si lo está

# En los conjuntos no puedes haber más de un elemento duplicado en el, si existen elementos duplicados automáticamente se eliminan los mismos y solo muestran uno solo 

test = {'Luis', 'Luis', 'Luis'}

print(test)

# Podemos utilizar esta propiedad de los conjuntos para filtrar elementos repetidos de las listas por ejemplo

lista = [1,2,4,4,5,5,5,6,7]

nueva_lista = set(lista) # castea trasforma la lista en un conjunto

print(nueva_lista) # Imprime un conjunto con los elementos filtrados {1, 2, 4, 5, 6, 7}

lista = list(nueva_lista)

print(lista) # Volvemos a transformar el conjunto filtrado a la lista pero ya filtrada 

# Hacer lo mismo que lo anterior en una sola linea

lista = [1,2,4,4,5,5,5,6,7]

lista = list(set(lista)) # Se hace la conversión primero de la lista a un conjunto luego ese conjunto a una lista nuevamente 

print(lista) # [1, 2, 4, 5, 6, 7]

# El siguiente ejercicio te servirá para practicar la manipulación de conjuntos.

# Debes realizar las siguientes instrucciones de forma ordenada sobre la variable grupo para que el ejercicio valide correctamente:

# Añade los siguientes usuarios: Ana, Ramón, Marta, Eric y David (respeta las tildes)

# Elimina (*) los usuarios Mario, Miguel y Ramón.

# Optativo: Cuando tu solución valide, dale una vuelta de tuerca. A ver si se te ocurre alguna forma de optimizarlo utilizando listas y bucles.

# (*) Para eliminar un registro de un conjunto puedes utilizar su método interno conjunto.remove("registro").

grupo = {"Miguel", "Blanca", "Mario", "Andrés"}
grupo.add('Ana')
grupo.add('Ramón')
grupo.add('Marta')
grupo.add('Eric')
grupo.add('David')
grupo.remove('Mario')
grupo.remove('Miguel')
grupo.remove('Ramón')
print(grupo)

# Optativo 

grupo = {"Miguel", "Blanca", "Mario", "Andrés"}

print("""Bienvenido
Ingrese una opción para continuar:
1) Agregar un usuarios
2) Eliminar un usuario
3) Salir""")

usuario = input('Ingrese una opción: ')

while usuario != '3':
  if (usuario == '1'):
    usuario = input('Ingrese nombre de usuario a agregar: ')
    grupo.add(usuario)
    print(grupo)
  elif usuario == '2':
    usuario = input('Ingrese el nombre de usuario que desea eliminar: ')
    grupo.remove(usuario)
    print(grupo)
  else:
    usuario = input('Ingrese una opción: ')
