


getProducto = (id) => {


    const promesa = new Promise( (resolve, reject) => { 

    const producto = productos.find( e => e.id === id) // busca el producto en la lista de productos

    if(producto) { // si el producto existe
        resolve(producto) // El resolve se ejecuta cuando la promesa se cumple
    } else { // si el producto no existe
        reject('No existe el producto') // El reject se ejecuta cuando la promesa falla
    }

 })

 return promesa // retorna la promesa

}

getProducto(1) // llama a la funcion getProducto y le pasa el id 1
    .then( producto => console.log(producto)) // cuando la promesa se cumple
    .catch( err => console.log(err))   // cuando la promesa falla
    .finally( () => console.log('terminado')) // cuando termina la promesa
    



// Pormesas en cadena

let nombre

getProducto(id) 
    .then( producto => {
        nombre = producto // guarda el producto en la variable nombre
        return getPrecio(id)    // retorna la promesa getPrecio

    })
    .then( precio => console.log(precio)) // cuando la promesa se cumple
    .catch( err => console.log(err))  // cuando la promesa falla
    