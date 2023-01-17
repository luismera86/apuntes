# import saludos # importamos el módulo desde otro script

# saludos.saludar()

from mensajes.hola.saludos import saludar, Saludo # importación selectiva del módulo
from mensajes.adios.despedida import despedir# importación selectiva del módulo

saludar()
saludo1 = Saludo()

despedir()
