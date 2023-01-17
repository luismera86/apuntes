
# Crear un conjunto vacío 
c = set()

# Agregar un elemento al conjunto
c.add(1)
c.add(2)
c.add(3)
print(c) # {1, 2, 3}

# Descartar o borrar un elemento de un conjunto
c.discard(1)
print(c) # {2, 3}

# Copiar un conjunto 
c = {1, 2, 3}
c2 = c.copy()
print(c2) # {1, 2, 3}

# Vaciar un conjunto
c = {1, 2, 3}
c.clear()
print(c) # set() es un conjunto vacío

# Comprobar si los elementos de un conjunto se encuentra dentro de otro
c1 = {1, 2, 3}
c2 = {3, 4, 5}
c3 = {-1, 99}
c4 = {1, 2, 3, 4, 5}

print(c1.isdisjoint(c3)) # ¿Son disjuntos? True por que no concuerda ningún elemento entre ellos
print(c1.isdisjoint(c2)) # ¿Son disjuntos? False por que concuerda al menos un elemento entre ellos el 3

print(c1.issubset(c4)) # True por que concuerdan algún elemento 
print(c3.issubset(c4)) # False por que no concuerdan algún elemento 

print(c4.issuperset(c1)) # True por que es un superset que contiene los elementos del conjunto c1 
print(c4.issuperset(c2)) # True por que es un superset que contiene los elementos del conjunto c2
print(c4.issuperset(c3)) # False por que es un superset que no contiene los elementos del conjunto c3

# Métodos avanzados 

# Unir dos conjuntos 
c1 = {1, 2, 3}
c2 = {3, 4, 5}
print(c1.union(c2)) # {1, 2, 3, 4, 5} los valores repetidos los toma como un solo valor

# Actualizar un conjunto uniendo dos conjuntos
c1 = {1, 2, 3}
c2 = {3, 4, 5}
c1.update(c2)
print(c1) # {1, 2, 3, 4, 5} los valores repetidos los toma como un solo valor

# Verificar diferencias entre conjuntos
c1 = {1, 2, 3}
c2 = {3, 4, 5}
c3 = {-1, 99}
c4 = {1, 2, 3, 4, 5}

print(c1.difference(c2)) # Devuelve un conjunto con los elementos diferentes {1, 2}
c1.difference_update(c2) # Actualiza el valor de c1 con el resultado de los elementos diferentes 
print(c1) # {1, 2}

# Crear un conjunto con elementos comunes entre ambos conjuntos
c1 = {1, 2, 3}
c2 = {3, 4, 5}
c3 = {-1, 99}
c4 = {1, 2, 3, 4, 5}

print(c1.intersection(c2)) # {3}
c1.intersection_update(c2) # Actualiza el valor de c1 al resultado de la intersección 
print(c1) # {3}

# Ver los elementos simétricos entre conjuntos
c1 = {1, 2, 3}
c2 = {3, 4, 5}
c3 = {-1, 99}
c4 = {1, 2, 3, 4, 5}

print(c1.symmetric_difference(c2)) # Devuelve un conjunto de elementos que no concuerdan entre los dos {1, 2, 4, 5}
c1.symmetric_difference_update(c2) # Actualiza el valor de c1 con el resultado de los elementos que no concuerdan
print(c1) # {1, 2, 4, 5}