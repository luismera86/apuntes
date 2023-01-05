
numeros = [1,2,3,4,5,6,7,8,9,10]

indice = 0

for numero in numeros: 
  print(numero)



# Modificar el contenido de la lista

for numero in numeros:
  numeros[indice] += 5 # indice inicia con el valor 0 y aumenta en 5 el valor del número que se encuentra en el array en esa posición
  indice += 1 # Incrementa el valor del indice en cada vuelta

print(numeros) # [6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

# Lectura secuencial con clave y valor 

numeros = [1,2,3,4,5,6,7,8,9,10]

for indice, numero in enumerate(numeros):
  numeros[indice] *= 10

print(numeros) # [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

cadena = 'Hola amigos'

for caracter in cadena:
  print(caracter)

# Creando una cadena de caracteres a partir de la existente

cadena2 = ''

for caracter in cadena:
  cadena2 += '*'

print(cadena2) # ***********

# range()

for i in range(10): #range genera una lista de números indicados, determinas la cantidad de veces que necesites iterar o si quieres generar un lista de números el 10 en este caso no l cuenta
  print(i)

# En este ejercicio se te facilitará un numero aleatorio que no conoces en la variable numero.

# Utilizando lo que conoces sobre los bucles for y la función range() , debes realizar un sumatorio de todos los números desde 0 hasta ese numero (incluido) exceptuando los múltiples de 5 y 7, y almacenarlo en la variable sumatorio.

# Ejemplo, si numero fuera 7, el sumatorio sería igual a 1+2+3+4+6 = 16.

# Recuerda, únicamente debes sumar los números NO múltiples de 5 y 7 al sumatorio.

numero = 43
sumatorio = 0

for i in range(numero):
  if i % 5 != 0 and i % 7 != 0:
    sumatorio = sumatorio + i 

print(sumatorio)

