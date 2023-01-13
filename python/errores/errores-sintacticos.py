# son errores por escribir mal palabras reservadas o falta elementos de la sintaxis básica

# lista = [1,2,3]


# lista.pop()
# lista.pop()
# lista.pop()
# lista.pop() # da un error por que no puede sacar elementos de una lista vacía IndexError: pop from empty list

# Formas de evitar ese error es verificar si la lista tiene un elemento y luego sacar 

lista = [1,2,3]
if len(lista): 
    lista.pop()

print(lista)
if len(lista): 
    lista.pop()

print(lista)

if len(lista): 
    lista.pop()

print(lista)

n = input('introduce un número: ')

m = 4

print(f'dividir {n} / {m}', n/m) # TypeError: unsupported operand type(s) for /: 'str' and 'int'