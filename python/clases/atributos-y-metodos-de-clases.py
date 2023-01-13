
# class Galleta:
#     pass

# una_galleta = Galleta()

# una_galleta.sabor = 'Salado'
# una_galleta.color = 'Marron'

# print(una_galleta.sabor) # Salado

# class Galleta: 
#     chocolate = False # variable interna
#     def __init__(self): # es el método inicial de la clase, se ejecuta al crear un objeto, self hace referencia a los objetos
#         print('Se acaba de crear una galleta')

# g = Galleta()

# print(g.chocolate) # False

class Galleta:
    chocolate = False
    def __init__(self, sabor = None, color = None): # None es el valor por defecto si no se envía ningún argumento por parámetro al crear una nueva galleta
        self.sabor = sabor
        self.color = color
        print('Se a creado una nueva galleta')
    
    def chocolatear(self): # Este método hace que el chocolate de la variable inicial pase a True
        self.chocolate = True # el self indica que esta tomando una variable interna de la clase para hacer la referencia
    
    def tiene_chocolate(self):
        if (self.chocolate):
            print('La galleta tiene chocolate')
        else: 
            print('La galleta no tine chocolate')
    

g = Galleta('Salada', 'Marron')

print(g.chocolate) # La respuesta es True

print(g.tiene_chocolate()) # La galleta no tine chocolate
g.chocolatear() # pasamos el chocolate a True

print(g.tiene_chocolate()) # La galleta tiene chocolate

print(g.sabor) # Salda
print(g.color) # Marron

g2 = Galleta()

print(g2.sabor) # None
print(g2.color) # None
