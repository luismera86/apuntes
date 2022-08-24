
// Eventos del DOM 

const heading = document.querySelector('.heading')

heading.addEventListener('click', () => {
    heading.textContent = 'Tocaste aqui'
})

// Eventos del DOM - Inputs

const inputNobmbre = document.querySelector('.nombre')


inputNobmbre.addEventListener('input', () => {
    //console.log('Escribiendo')
}) // Realiza el evento a medida que escribes en el imput

inputNobmbre.addEventListener('keyup', () => {
   // console.log('Escribiendo')
}) // Realiza el evento al soltar la tecla luego de presionar la tecla

// Vamos a hacer que el password aparezca y desaparezca la letra

const inputPass = document.querySelector('.password')

inputPass.addEventListener('input', funcionPass)

function funcionPass(e) {
    inputPass.type = 'text'

    setTimeout(() => {
        inputPass.type = 'password'
    }, 200)
}

// Eventos del DOM - Formularios

const formulario = document.querySelector('#formulario')

formulario.addEventListener('submit', e => {
    
    const nombre = document.querySelector('.nombre').value
    const pass = document.querySelector('.password').value

    nombre === '' || pass === '' ? console.log('Todos los campos son obligatorios') : console.log('todo bien') // Con este metodo validamos si se completa el formulario 

})

const formulario2 = document.querySelector('#formulario')

formulario.addEventListener('submit', e => {
    
    const nombre = document.querySelector('.nombre').value
    const pass = document.querySelector('.password').value
    
    const elimintaAlerta = document.querySelector('.alerta')
    
    if(elimintaAlerta) {
        elimintaAlerta.remove()
    }
    const alerta = document.createElement('DIV')
    alerta.classList.add('alerta')
    

    if (nombre === '' || pass === '') {
        alerta.textContent = 'Te faltan datos'
        alerta.classList.add('error') 
    
    } else {
        alerta.classList.add('exito')
        alerta.textContent = 'Loguiao'
    
    }
     
    formulario.appendChild(alerta)

})

// Para evitar que el evento te agrege indefinidamente el div de alerta 


