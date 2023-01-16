
# Manipulación de mayúsculas y minúsculas 

msg1 = 'Hola mundo'.upper() # transforma todos los caracteres a mayúscula 'HOLA MUNDO'

msg2 = 'Hola mundo'.lower() # transforma todos los caracteres a minúscula 'hola mundo'

msg3 = 'hola mundo'.capitalize() # transforma la primera letra de la cadena en mayúscula 'Hola mundo'

msg4 = 'hola mundo'.title() # transforma la primera letra de todas las palabras de la cadena en mayúscula 'Hola Mundo'

msg5 = 'hola mundo'.title() # transforma la primera letra de todas las palabras de la cadena en mayúscula 'Hola Mundo'

msg6 = 'hola mundo'.count('o') # calcula cuantas veces aparece en la cadena la letra o palabra que pongamos entre los () '2'

msg7 = 'hola mundo'.find('mundo') # Nos indica en que indice de la cadena comienza la palabra mundo, en este caso el 5 

msg8 = 'hola mundo mundo mundo'.rfind('mundo') # Nos indica en que indice de la cadena comienza la última palabra mundo, en este caso el 17 

c = '100'

c.isdigit() # Comprueba si todos los caracteres de la cadena son números # True

c2 = 'ABC100po'

c2.isalnum() # Comprueba si es una cadena alfanumérica que no contenga ningún otro carácter # True

c3 = 'Hola Mundo'
c3.isalpha() # comprueba si solo tienes caracteres alfabéticos, los espacios en las cadenas cuentan como caracteres así que tampoco los tomas # False

c4 = 'Hola'
c4.isalpha() # True
c4.islower() # Comprueba si todos los caracteres alfabéticos son minúscula # False
c4.isupper() # Comprueba si todos los caracteres alfabéticos son mayúscula # False
c4.istitle() # Comprueba si todos los caracteres alfabéticos son mayúscula las primeras letras # False
c4.isspace() # comprueba si la cadena contiene espacios # False

c4.startswith('H') # comprueba si una cadena comienza con una letra o palabra que ponemos en los () # true
c4.endswith('a') # comprueba si una cadena termina con una letra o palabra que ponemos en los () # true

c5 = 'Hola mundo mundo'
c5.split() # crea una lista con una cadena que representa cada palabra en cada indice ['Hola', 'mundo', 'mundo']
c5.split()[0] # Mostramos la primera palabra de la cadena 'Hola' ya que representa al indice 0 de la lista creada

c6 = 'Juan, Pedro, Luis'
c6.split(',') # crea una lista separando los elementos por la coma, puede ser un punto o cualquier otro carácter que sirva para separar la cadena ['Juan', 'Pedro', 'Luis']

c7 = 'Hola'
c7.join(' ') # separa la cadena lo indicado en los () en este caso un espacio vacío 'H o l a'

c8 = '   Hola Mundo   '
c8.strip() # Borra los espacios a los costados de las cadenas queda como resultado 'Hola Mundo'

c9 = '---Hola Mundo---'
c9.strip('-') # Borramos los caracteres elegidos en el stript dando como resultado 'Hola Mundo'

c10 = 'Hola mundo'

c10.replace('o', 3) # reemplaza el carácter o palabra, por otro carácter o número indicado 'H3la mund3'
c10.replace('mundo', 'Luis') # reemplaza el carácter o palabra, por otro carácter o número indicado 'Hola Luis'

c11 = 'Hola mundo mundo mundo mundo'
c11.replace(' mundo', '', 3) # indicamos que reemplace ' mundo' por un '' en los 3 primeros que encuentre # 'Hola mundo' si pongo que sean los dos primeros el resultado es 'Hola mundo mundo'