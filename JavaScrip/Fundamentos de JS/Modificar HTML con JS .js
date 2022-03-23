
// Manipular elementos HML con JS

// Siempre JavaScript reemplaza los valores o textos del HTML 

const heading = document.querySelector('.heading')

heading.textContent = 'Nuevo Heding'

console.log(heading.textContent)

const inputNombre = document.querySelector('#nombre')

inputNombre.value = 'Un valor por default' 

console.log(inputNombre)