
// Con está función podemos generar id únicos y alfanúmricos para las propiedades key 

const generarId = () => {
    const random = Math.random().toString(36).substr(2)
    const fecha = Date.now().toString(36)

    return random + fecha
  } 