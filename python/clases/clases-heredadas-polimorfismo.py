# isInstance() hace la comparación entre un objeto y un tipo de objeto para determina si son los mismos
# isInstance(objeto, tipo-de-objeto) en el primer parámetro indicamos el objeto que estamos por comparar, en el segundo parámetro indicamos el tipo de Objeto que vamos a hacer la comparación el resultado es True o False

# Herencia múltiple
# En la herencia múltiple hace referencia a la posibilidad que una sub clase herede de varias super clases a la ves, sin embargo hay un problema cuando las super clases tengan los mismos métodos o atributos, python da prioridad a las primeras llamadas que serían las que están más a la izquierda en la declaración


class A:
    def __init__(self):
        print("Soy de clase A")
    
    def a(self):
        print('Este método lo heredo de A')


class B:
    def __init__(self):
        print("Soy de clase B")
    def b(self):
        print('Este método lo heredo de B')
        

class C(A, B):
    def __init__(self):
        pass
    def c(self):
        print('Este método es propio de C')
    def a(self): # Modifico el método de la super clase 
        print('Modifico A')
        


c = C()  # Imprimiría Soy de clase A ya que la clase A fue llamada antes que la clase B

c.a()
c.b()
c.c()