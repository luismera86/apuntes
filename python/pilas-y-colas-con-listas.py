
# Python no tine de manera nativa pilas y colas, pero se las puede simular con listas

# Pilas
# En las pilas el primer elemento en entrar es el último en salir 
# Agregar el último elemento de la lista 
pila = [3,4,5]

pila.append(6) # se agregan al final de la pila
pila.append(7)

print(pila) # [3, 4, 5, 6, 7]

# Quitar el último elemento de la lista

pila.pop()

print(pila) # [3, 4, 5, 6]

# Asignar a una variable el último elemento de una lista y al mismo tiempo quitarlo de la lista

ultimo_elemento = pila.pop()

print(ultimo_elemento) # 6 que es el último elemento de la pila
print(pila) # [3, 4, 5]

#Colas
# En las colas, el primer elemento en entrar es el primero en salir 

# Importar una colección de python

from collections import deque

cola = deque()

print(cola) # deque([])

cola = deque(['Luis', 'Juan', 'Miguel'])

print(cola) # deque(['Luis', 'Juan', 'Miguel'])


# Añadir elementos a una cola 

cola.append('Maria')
cola.append('Armando')

print(cola) # deque(['Luis', 'Juan', 'Miguel', 'Maria', 'Armando'])

# Quitar elementos de la cola, se quita el primer elemento de la lista

cola.popleft() # Este método solo funciona en una deque

print(cola) # deque(['Juan', 'Miguel', 'Maria', 'Armando'])

# Guardar el primer elemento en una variable 

primer_elemento = cola.popleft()

print(primer_elemento) # Juan
print(cola) # deque(['Miguel', 'Maria', 'Armando'])

