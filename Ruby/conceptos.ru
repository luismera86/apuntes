-Módulos
Los Módulos son capsulas en el que se encuentra un objeto que en su interiror contiene variabels y métodos.
Los módulos son similares a las clases, pero no se pueden crear instancias de ellos y no pueden tener subclases.
Los módulos son útiles para agrupar métodos y constantes.

module Pepita // Modulo
    @energia = 100 // Variable de instancia de módulo Pepita (no se puede acceder desde afuera) 
    def volar_en_circulos! // Método
        @energia -= 10 // Variable local del método 
    end
    def comer_alpiste!(gramos) 
        @energia += gramos
    end
end

Los métodos que llevan el signo de admiración al final son métodos que modifican el estado del objeto, es decir, que cambian el valor de alguna de sus variables de instancia.
Los métodos que no llevan el signo de admiración al final son métodos que no modifican el estado del objeto, es decir, que no cambian el valor de alguna de sus variables de instancia. Estos métodos se llaman métodos de consulta. Solo muestran información del objeto.

-Interfaz
La interfaz es la parte visible de un objeto, es decir, los métodos que se pueden llamar desde afuera del objeto. 
La interfaz de un objeto es la suma de los métodos públicos y protegidos de la clase del objeto.

inderfaz_Pepita = %w{volar! comer! energia}

Son los métodos que entiend el objeto Pepita.

-Polimorfismo
El polimorfismo es la habilidad de un objeto de responder a un mensaje de diferentes formas.
En Ruby, el polimorfismo se logra a través de la herencia.
Los son los mensajes que pueden ser entendidos por un objeto y que pueden ser enviados a él. 