
def saludar():
    print('Hola ')

if __name__ == '__main__': # con esta verificación evitamos que se ejecute 2 veces la función en los scrips donde se importa el módulo
  saludar()

# la variable __name__ dentro del módulo tiene el valor de __main__
print(__name__) # __main__

# la variable __name__ fuera del módulo en otro script tiene el valor del nombre del archivo se llama 'saludos'

class Saludo:
   def __init__(self) -> None:
      print('Hola saludo desde clase')