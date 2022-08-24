
/* 
Para transformar los null a boleano solo tenemos que argregar los signos de !

null = null
!null = true
!!null = false


*/

// Ejemplos 



const nombre = null

const validacion = nombre && 'Hola'
console.log(nombre); // el resultado es null

const validacion2 = !nombre && 'Hola'

console.log(nombre); // el resultado es true

const validacion3 = !!nombre && 'Hola'

console.log(nombre); // el resultado es false