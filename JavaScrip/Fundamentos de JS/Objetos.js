// Manipulación de objetos

const producto = {
    nombre: 'Tablet',
    precio: 300,
    disponible: true
}

// Reescribir la propiedad de un producto
producto.nombre = 'Monitor'

//Se pueden añadir propiedades a un objeto 

producto.ano = 2009

console.table(producto);

//Para eliminar una propiedad de un objeto
delete producto.ano

console.table(producto);

// Object.freeze() no te perimite modificar, eliminar o agregar cosas al objeto

//Object.freeze(producto)

//producto.precio = 200 // No se modifica el precio 
//delete producto.precio // No se elimina la propiedad por que esta freezada

console.table(producto);

// Object.seal() te permite modificar cosas al objeto pero no te permite agregar ni eliminar 

Object.seal(producto)

producto.precio = 200 // Se modifica el precio 

delete producto.precio // No se elimina el precio

console.table(producto);
