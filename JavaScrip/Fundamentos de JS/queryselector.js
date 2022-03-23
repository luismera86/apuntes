
// Selectores del DOM 

const heading = document.querySelector('.heading')

console.log(heading)

const enlaces = document.querySelectorAll('.navegacion a') // Genera un array con todos los elementos repetidos del querySelectorAll

// Se puede hacer un forEch para iterar sobre el array para leer cada uno de los elementos o un map para crear una copia del array

console.log(enlaces[2].textContent) // Es una forma de leer un elemento del array generado por el querySelectorAll 

