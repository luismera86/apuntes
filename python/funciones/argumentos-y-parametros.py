
# Parámetros con valores por defecto en caso que que no se le asignen al llamar la función

def resta(a = 0, b = 0 ): # Se declaran los parámetros con un valor por defecto
  return a - b

print(resta()) # 0
print(resta(10, 5)) # 5 

# Envío de valores por referencia

def doblar_valor(numero):
  nuevo_valor = numero * 2
  return nuevo_valor 

precio = 100

print(doblar_valor(precio)) # 200

print(precio) # 100 no se modifica la variable original 

precio = doblar_valor(precio) # Modificamos el valor de la variable para asignarle el valor duplicado

print(precio) # el nuevo valor de precio es 200 

# Argumentos y parámetros indeterminados 

def indeterminados_posicion(*args): # *args significa que recibe cantidad de argumentos indeterminados
  print(args)

print(indeterminados_posicion('Hola', 33, [1,2,3])) # genera una tupla con todos los argumentos enviados ('Hola', 33, [1, 2, 3])

def indeterminados_posicion2(*args):
  for arg in args:
    print(arg)

print(indeterminados_posicion2(1,2,'Gol',[1,2,3]))

def indeterminados_nombres(**kwargs): # este tipo de parámetros son para crear diccionarios con los argumentos que reciben que tienen que ser una clave y valor de esta forma ej: a = 2, a es la clave y 2 el valor 
  print(kwargs)

print(indeterminados_nombres(a = 2, b = 'Gol', c = [1,2,3])) # a, b y c son las claves después del = van los valores del diccionario {'a': 2, 'b': 'Gol', 'c': [1, 2, 3]}

def super_funcion(*args, **kwargs): # Combinados
  for arg in args:
    total = 0
    total += arg    
    print('El valor de las sumas de los números indeterminados es', total )
  
  for kwarg in kwargs:
    print(kwarg, ' ', kwargs[kwarg])

print(super_funcion(1, 2, 4, 45, saludo = 'Hola', despedida = 'chau'))




