from collections import Counter

l = [1, 2, 3, 5, 3, 3, 2, 3, 6, 7, 8]

print(Counter(l))  # Counter({3: 4, 2: 2, 1: 1, 5: 1, 6: 1, 7: 1, 8: 1})

p = "Palabra"

print(Counter(p)) # Counter({'a': 3, 'P': 1, 'l': 1, 'b': 1, 'r': 1})

animales = 'perro gato gato'

print(Counter(animales.split())) # Counter({'gato': 2, 'perro': 1}) 

c = Counter(animales.split())
print(c.most_common(1)) # Devuelve una lista con tuplas de los elementos más comunes [('gato', 2)]
