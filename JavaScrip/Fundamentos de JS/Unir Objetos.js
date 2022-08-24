
// Unir 2 objetos

const producto = {
    nombre: 'Tablet',
    precio: 300,
    disponible: true
}

const cliente = {
    nombre: 'Luis',
    premium: true
}

// No se tienen que modificar los objetos originales al unirlos

//const nuevoObjeto = Object.assign(producto, cliente) // Este método no se utiliza ya que superpone las propiedades nombre 

//console.log(nuevoObjeto);


// Con este método lo que hacemos es un nuevo objeto que incluye los dos objetos y quedan en 1 sola variable 
const nuevoObjeto2 = {
    producto: {...producto},
    cliente: {...cliente}
}

console.log(nuevoObjeto2);

