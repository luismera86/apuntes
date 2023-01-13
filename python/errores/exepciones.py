
# try:
#     n = float(input('Ingrese un número: '))
#     m = 4
#     print('{}/{}={}'.format(n,m,n/m))
# except:
#     print('Ha ocurrido un error, introduce bien el número')

n = 1

while (n != 0):
    try: # para atrapar el código en busca de errores
      n = float(input('Ingrese un número: '))
      m = 4
      print('{}/{}={}'.format(n,m,n/m))
    except: # para introducir un código excepcional en caso de ocurrir un error
      print('Ha ocurrido un error, introduce bien el número')
    else: # para definir un código que se va a ejecutar si no ocurre ningún error 
       print('todo a funcionado correctamente')
       break
    finally: # el código que se va a ejecutar al finalizar el try haya o no ocurrido un error
       print('Fin de la iteración')
