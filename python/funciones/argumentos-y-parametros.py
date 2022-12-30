
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

precio = doblar_valor(precio)

print(precio)



