


# nombre = input('Ingresar nombre: ')
# apellido = input('Ingrese el apellido: ')

# if nombre == 'Luis' and apellido == 'Mera': 
#   print("El nombre es Luis Mera")
# elif nombre == 'Lucho':
#   print('El nombre es Lucho')
# else:
#   print("No es nombre")


# student_note = float(input('Ingrese la nota del alumno: '))

# if student_note >= 8:
#   print('Nota sobresaliente')
# elif student_note < 8 and student_note >= 6: 
#   print('Nota aprobado')
# elif student_note < 6:
#   print('Desaprobado')


# Utilizando una condición if-elif-else debes realizar un programa que compare la longitud de dos variables (cadena_1 y cadena_2) y en función del resultado almacene un valor en otra variable llamada resultado:

# Si cadena_1 es más larga que cadena_2 la variable resultado deberá tener el valor entero 1.

# Si cadena_1 es más corta que cadena_2 la variable resultado deberá tener el valor entero 2.

# Si cadena_1 tiene la misma longitud que cadena_2 la variable resultado deberá tener el valor entero 0.

# Notas:

# Las variables cadena_1 y cadena_2 se importan de otro fichero y no puedes editarlas.

# Recuerda que puedes conseguir la longitud de una cadena usando len(cadena)

cadena_1 = 'd'
cadena_2 = 'hols'

if len(cadena_1) > len(cadena_2): 
  resultado = 1
  print(resultado)
elif len(cadena_1) < len(cadena_2):
  resultado = 2
  print(resultado)
elif len(cadena_1) == len(cadena_2):
  resultado = 0
  print(resultado)
