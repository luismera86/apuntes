# La encapsulation es una propiedad que tienen muchos lenguajes para impedir el acceso externo para atributos y métodos, python no tiene esa funcionalidad, se puede simular un comportamiento parecido presidiendo los nombre de los métodos y atributos con dos guiones bajos __ 

class Ejemplo: 
    __atributo_privado = 'Soy un atributo privado'

    def __metodo_privado(self):
        print('Soy un método privado')
    def mostrar_atributo_privado(self):
        print(self.__atributo_privado)
    def ejecutar_metodo_privado(self):
        self.__metodo_privado()

e = Ejemplo()
# e.__metodo_privado() # AttributeError: 'Ejemplo' object has no attribute '__metodo_privado'
e.mostrar_atributo_privado() # Soy un atributo privado
e.ejecutar_metodo_privado() # Soy un método privado
