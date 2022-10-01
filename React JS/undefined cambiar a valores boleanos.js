// Podemos modificar el valor de undefined para que nos retorne un valor booleano

const data = undefined;
console.log(data); // undefined
console.log(!data); // Nos va a retornar true porque undefined es un valor falso
console.log(!!data); // Nos va a retornar false porque undefined es un valor falso

// Entonces podemos usar las negaciones para modificar el valor de undefined y que nos retorne un valor booleano que nosotros queramos que nos retorne en este caso true o false ! = true y !! = false