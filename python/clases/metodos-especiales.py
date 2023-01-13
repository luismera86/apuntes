class Pelicula:
    # Constructor de la clase
    def __init__(self, titulo, duracion, lanzamiento):
        self.titulo = titulo
        self.duracion = duracion
        self.lanzamiento = lanzamiento
        print("Se a creado la película ", self.titulo)

    # Método destructor
    def __del__(
        self,
    ):  # Lo invocamos con la función del(Nombre de la clase instanciada)
        print("Se está borrando la película", self.titulo)

    # Redefinimos el método string
    def __str__(self):
        print(
            f"{self.titulo} lanzada en {self.lanzamiento} con una duración de {self.duracion} minutos"
        )
        return "Hola" # Este método si o si tiene que retornar un string
    
    # Redefinir método length
    def __len__(self):
        print(self.duracion)
        return self.duracion


p = Pelicula("El Padrino", 175, 1972)

str(p) # llamamos al método __str__ de la clase 
len(p) # llamamos al método __len__ de la clase
del(p) # llamamos al método destructor __del__ de la clase
