# Las tuplas son similares a las listas con la diferencia que los datos son inmutables, se utilizan para almacenar información que no se quiera modificar

tupla = (33, 'Hola', [1,2,3]) #La lista que se encuentra dentro de la tupla no se puede modificar

print(tupla[0]) #al igual que en las listas se puede consultar el primer elemento
print(tupla[-1]) #al igual que en las listas se puede consultar el último elemento
print(tupla[:2]) #tambien se puede usar los slice para recortar los elementos de la tupla que se quieren mostrar
print(tupla[2][0]) #mostrar elementos de una lista dentro de una tupla
print(len(tupla)) #longitud de la tupla

# index lo podemos usar para buscar un elemento y nos devuelve en la posición que se encuentra, si no lo encuentra da un error
busqueda = tupla.index('Hola')

print(busqueda) # nos devuelve que se encuentra en la posición 1 

# count nos sirve para mostrar la cantidad de veces que se encuentra repetido un elemento dentro de una tupla, si no está repetido te muestra un 1 y si no existe te muestra 0
tupla = (33, 'Hola', 'Hola', [1,2,3])
busqueda = tupla.count('Hola')
print(busqueda) #nos devuelve el resultado 2 ya que se encuentra dos veces repetido en la tupla

# A partir de una variable llamada tupla (la cuál no sabes qué contiene) debes imprimir por pantalla los siguientes apartados (usando un print() para cada apartado), de forma ordenada:

# El último elemento de la tupla.

# El número de elementos que tiene la tupla.

# La posición donde se encuentra el número 123 de la tupla.

# Una lista con los primeros tres elementos de la tupla.

# El elemento que hay en la posición con índice 4 de la tupla.

# El número de veces que aparece el número 4 en la tupla.

# Nota: En total son 6 prints uno debajo de otro, no puedes redefinir ni modificar la tupla o el test fallará, simplemente muestra lo que se pide por pantalla.

tupla = ('Hola', 100, 123, ['hola', 100])

print(tupla[-1])
print(len(tupla))
print(tupla.index(123))
print([tupla[:2]])
print(tupla[4])
print(tupla.count(4))
