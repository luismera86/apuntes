
// Scope 

// Las constantes no se pueden cambiar el valor

const precio = 300 // Variable local

function unaFunción() { // Dentro de la función podemos cambiar el valor de la constante ya que la misma solo existe dentro de esa función 

    const precio = 600 // Variable local, su valores solamente quedan disponibles dentro de la función
    
    console.log(precio) //imprime 600 en caso de no existir la variable local, imprime el valor de la global en este caso 300
}

console.log(precio) // Imprime 300 toma el valor de la variable global, no sabe que existe por que no puede acceder al valor de la variable local 

unaFunción()