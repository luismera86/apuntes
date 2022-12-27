
# nombre = input('Ingrese su nombre: ') 
# contador = 0

# while nombre != 'Luis': # Mientras la condición sea verdadera se sigue ejecutando el bucle, hasta que no se ponga Luis va seguir siendo verdadero 
#   contador += 1
#   nombre = input('Ingrese su nombre: ') 
#   print(contador)
# else: # Usamos el else para realizar una acción una ves terminado el bucle
#   print('Adivinaste el nombre')  


# print('Bienvenido al Menú interactivo')

# while True:
#   print("""¿Que quieres hacer? Escribe una opción:
#   1) Saludar
#   2) Sumer dos números
#   3) Salir""")
#   option = input('Elige tu opción: ')
#   if option == '1':
#     print('Mucho gusto en conocerte')
#   elif option == '2':
#     number_1 = float(input('Ingrese el primer número: '))
#     number_2 = float(input('Ingrese el segundo número: '))
#     print('El resultado es ', number_1 + number_2)
#   elif option == '3':
#     print('Hasta luego vuelve pronto')
#     break
#   else: 
#     print('Comando desconocido vuelve a intentarlo')
  
# Bucle while
# Realiza un programa que lea un número por teclado y lo almacene en una variable llamada numero.

# Si ese número introducido por teclado no es múltiple de 5 debe repetirse de nuevo la lectura hasta que lo sea.

# Notas:

# Debes asegurarte de que la variable numero es un número entero introducido con la instrucción input.

# Si intentas asignar un múltiple de 5 manualmente a la variable numero la solución fallará.

numero = int(input())

while  numero % 5 != 0:
  numero = int(input())


