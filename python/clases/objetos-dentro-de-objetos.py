
class Pelicula:
    # Constructor de la clase
    def __init__(self, titulo, duracion, lanzamiento):
        self.titulo = titulo
        self.duracion = duracion
        self.lanzamiento = lanzamiento
        print("Se a creado la película ", self.titulo)



class Catalogo:
    peliculas = []

    def __init__(self, peliculas) -> None:
        self.peliculas = peliculas
        print(peliculas)
        print('Se a creado un catálogo')
    
    def agregar(self, p):
        self.peliculas.append(p)
    
    def mostrar(self):
        for p in self.peliculas:
          print(p)
    

p = Pelicula("El Padrino", 175, 1972)
c = Catalogo([p])

c.agregar(Pelicula('Luis', 23, 32432))
c.mostrar()