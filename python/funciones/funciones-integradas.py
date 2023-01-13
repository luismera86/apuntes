# Muchas funciones integradas de python son para cambiar tipo de datos y otras para manipular información 

n = int('10') # transforma el string en un número entero

f = float('10.5') # transforma el string en un número decimal 

c = 'Un texto y un número' + str(10)# transforma el número 10 a string

bin(10) # transforma el número 10 en un binario 

hex(10) # transforma el número 10 en hexadecimal

# convertir de binario a un entero 
int('0b1010',2)

# convertir de hexadecimal a un entero

int('0xa',16)

# convertir al valor absoluto de un número quita el símbolo negativo

abs(-10) # 10 
abs(10) # 10

# redondeo de números

round(10.5) # 11
round(10.4) # 10 

eval('2+5') # 7 interpreta el string como la suma 

n = 10
eval('n*10 - 5') # 95 interpreta dentro de la cadena la variable externa y hace la operación matemática

len('Una cadena') # mide la longitud de caracteres o de elementos de una lista

help() # ayuda de python 



