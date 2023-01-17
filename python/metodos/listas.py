
lista = [1,2,3,4]

# Agregar elementos al final de la lista 
lista.append(5) # agregamos un elemento al final de la lista [1,2,3,4,5]


# Vaciar una lista
lista.clear() # Borra todos los elementos de la lista la deja vacía []


# Unir dos listas
lista2 = [6,7,8]
lista.extend(lista2) # Une las dos listas [1,2,3,4,5,6,7,8]

# Contar los elementos de uan lista
lista = ['Hola', 'mundo', 'mundo']
lista.count('mundo') # 2 

# Buscar el indicie donde se encuentra un elemento 
lista = ['Hola', 'mundo', 'mundo']
lista.index('Hola') # 0
lista.index('mundo') # 1 toma el primer valor que encuentra

# Agregar un elemento en una lista en la posición deseada

lista = ['Hola', 'mundo', 'mundo']
lista.insert(0, 'Luis') # insert(posición, elemento)
print(lista) # ['Luis', 'Hola', 'mundo', 'mundo']

# Quitar el último elemento de la lista 
lista = ['Hola', 'mundo', 'mundo']
lista.pop()
print(lista) # ['Hola', 'mundo']

# Quitar un elemento en una posición determinada
lista = ['Hola', 'mundo', 'mundo']
lista.pop(0)
print(lista) # ['mundo', 'mundo']

# Quitar un valor de la lista 
lista = ['Hola', 'mundo', 'mundo']
lista.remove('mundo') # Solo borra el primer valor que encuentra
print(lista) # ['Hola', 'mundo']

# Invertir el orden de una lista
lista = ['Hola', 'mundo', 'mundo']
lista.reverse()
print(lista) # ['mundo', 'mundo', 'Hola']

# Transforma una lista en una cadena de texto 
lista = ['Hola', 'mundo', 'mundo']
cadena = ''.join(lista)
print(cadena) # 'Holamundomundo'

# Ordenar los elementos de una lista de menor a mayor
lista = [1,4,7,9,3]
lista.sort()
print(lista) # [1, 3, 4, 7, 9]

# Ordenar los elementos de una lista de mayor a menor
lista = [1,4,7,9,3]
lista.sort(reverse=True)
print(lista) # [9, 7, 4, 3, 1]