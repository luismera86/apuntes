
# Realiza una función recursiva llamada sumatorio(numero), que sin utilizar ningún bucle, sume todos los números desde numero hasta 1 y devuelva la suma total, dando por hecho que numero es siempre un entero.

# Ejemplos:

# sumatorio(3) => 3+2+1 = 6 (Devolverá 6)
# sumatorio(5) => 5+4+3+2+1 = 15 (Devolverá 15)

# Notas:

# Única y exclusivamente tienes que programar la función, no debe haber ningún otro código en el ejercicio.

# No puedes utilizar bucles, debes generar las iteraciones mediante la recursividad de la propia función.

#   



def sumatorio(numero):
     # Si el número es mayor que 0
    if numero > 0:
        # Sumamos el resultado devuelto por la propia llamada pasando el número menos 1
        numero += sumatorio(numero-1)
    # Finalmente devolvemos el numero
    return numero

print(sumatorio(5))