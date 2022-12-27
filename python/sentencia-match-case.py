opcion = input()
 
match opcion:
    case "A":
        print("Opción A")
    case "B":
        print("Opción B")
    case "C":
        print("Opción C")
    case _: # el _ representa la acción que va a realizar por default
        print("Opción por defecto")