
elementos = ['Hola', 4, 'Adiós', [1,2,3]]

for i, e in enumerate(elementos): 
  print(i, e) # i es la posición en la lista y e es el valor que hay en esa posición

# 0 Hola  posición 0 y valor Hola 
# 1 4
# 2 Adiós
# 3 [1, 2, 3]

# En este ejercicio se te va a facilitar una variable iniciales que contiene una lista con un número indeterminado de cadenas de texto.

# Tu objetivo es modificar las cadenas de esa lista por la letra inicial de cada cadena en la lista utilizando, si lo requieres, la función enumerate.

# Supongamos que iniciales tiene el siguiente valor ["Hola", "Mundo"], tu objetivo sería transformar esos valores a ["H", "M"].

# Notas:

# Recuerda que para modificar los valores en una lista necesitas hacerlo mediante el índice de cada elemento:

iniciales = ['Hola', 'Mundo', 'Python']

for i, inicial in enumerate(iniciales):
  iniciales[i] = iniciales[i][0]

print(iniciales)

# Pide al usuario que introduzca un número entero por teclado entre 1 y 9 (ambos incluidos) y guárdalo en la variable numero. Debes asegurarte de que esa variable numero contiene un numero entero del 1 al 9, utiliza un bucle para repetir la lectura hasta que se cumpla esa condición.

# Genera una lista llamada multiplos que contenga los múltiplos de numero en el rango de 1 a 100 (ambos incluidos) utilizando la conversión de un range a list con un paso: list(range(Min,Max,Paso)).

# IMPORTANTE:

# La función range permite especificar un paso/salto en un tercer argumento, es decir, cada cuantos números se genera uno en el rango. Prueba este ejemplo y saca tus conclusiones, te servirá para solucionar el ejercicio:

# list(range(0, 30, 5))  # range con salto de 5
# No olvides que la función range incluye el mínimo pero excluye el máximo.

# Puedes leer este artículo si necesitas repasar cómo calcular los números múltiplos.


numero = int(input('Introduzca un número entero entre 1 y 9: '))

while numero < 1 and numero > 9:
  numero = int(input('Introduzca un número entero entre 1 y 9: '))

multiplos = list(range(numero, 101, numero))

print(multiplos)
