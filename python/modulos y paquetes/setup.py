# Configuración de la instalación del distribuidor

from setuptools import setup

setup(
    name="Mensajes",
    version="1.0",
    description="Un paquete para saludar",
    author="Luis Mera",
    author_email="luisemeradev@gmail.com",
    url="url",
    packages=['mensajes', 'mensajes.hola', 'mensajes.adios'],
    scripts=['test.py'],
)

# Ejecutar el comando en la consola python3 setup.py sdist