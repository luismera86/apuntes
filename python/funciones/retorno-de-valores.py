# Funciones con retorno de valores

def test(): 
  return 'Hola'

variable = test() # La variable toma el valor del return de la función test

print(variable) # Devuelve Hola 


def test2(): 
  suma = 1 + 2
  return suma

resultado = test2()

print(resultado) # 3

def test3():
  return 'Hola', 20, [1,2,3]

print(test3()) # Cuando la función retorna varios elementos los almacena en una tupla ('Hola', 20, [1, 2, 3])

# Descomponiendo el return 

valor1, valor2, valor3 = test3()

print(valor1) # Hola
print(valor2) # 20
print(valor3) # [1,2,3]

