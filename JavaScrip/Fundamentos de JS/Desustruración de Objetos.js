

// Desestructuración de objetos

const producto = {
    nombre: 'Tablet',
    precio: 300,
    disponible: true
}

const cliente = {
    nombre: 'Luis',
    premium: true
}

const {nombre, precio, disponible} = producto
const {nombre: nombreCliente, premium} = cliente // En el caso de la variable nombre al estar repetida en otro objeto se le asigna un alias para modificar el nombre de esa variable, si no hacen nombre: nombreCliente y se pone 'nombreCliente' solo te va a dar undefine por que la propiedad de ese objeto no existe

console.log(nombre, precio, disponible)
console.log(nombreCliente, premium);

