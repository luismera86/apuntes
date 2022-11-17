

class User:

    def __init__(self, name): # Este es el método constructor, una ves que se instancia la clase se inician todo lo que está en el método constructor
       self.name = name 

    def saludar(self, nombre): # definimos un método, self nos permiten identificar los objetos dentro de la misma clase sería igual al this en javascript podemos llama en este caso self.name y llamamos el name que se encuentra dentro de la clase
        print('hola ' + nombre + ' ' + 'el nombre interno es ' + self.name)

luis = User('Luis')

luis.saludar('Lucho')


## Herencia 

class Empleado(User): # La clase Empleado hereda la clase User que sería su calas padre
    salario = 0 # propiedad propia de la clase Empleado

    def modificar_salario(self, salario):
        self.salario = salario

empleado = Empleado('Martin')

empleado.modificar_salario(300)

print(empleado.salario)

