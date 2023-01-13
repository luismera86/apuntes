
# def mi_funcion(algo=None):
#     if algo is None: 
#         print('Error: No se permite un valor nulo')

# mi_funcion()

def mi_funcion(algo=None):
    try:
      if algo is None: 
        raise ValueError('Error: No se permite un valor nulo')
    except ValueError:
       print('Error: No se permite un valor nulo')

mi_funcion()

# https://docs.hektorprofe.net/python/errores-y-excepciones/invocacion-de-excepciones/
