from io import open

texto = 'Es un texto\notra linea de texto'

fichero = open('fichero.txt', 'w') # abrimos un fichero de de texto de escritura la w significa write

fichero.write(texto) # escribimos sobre el fichero
print(fichero)
fichero.close()


fichero = open('fichero.txt', 'r')
texto_fichero = fichero.read() # guardamos en la variable el texto del fichero

print(texto_fichero)
fichero.close()

fichero = open('fichero.txt', 'r')

lineas = fichero.readlines() # genera una lista con una elemento de cadena por acada linea

print(lineas)

## Abrir ficherps en modo de extensión

fichero = open('fichero.txt', 'a')

fichero.write('\ntercera linea') # agregamos una linea nueva al fichero sin borrar las anteriores

fichero.close()

# La diferencia cuando abrimos un fichero con 'w' y con 'a' es que en el primero el puntero se coloca al principio del documento, es donde comienza a escribirse el fichero, en cambio cuando lo abres con 'a' el puntero se coloca al final del fichero, por lo cual la información que se escriba se va a colocar al final de todo.

