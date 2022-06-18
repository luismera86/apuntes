/* 



*/

const tareas = ['limpiar', 'cocinar', 'estudiar', 'trabajar']

if(tareas.includes('cocinar')){
    console.log('La tarea cocinar existe')
} 

// Lo que hace includes() es verificar si existe en el array el parametro que se le asigna 


const nomElemento = event.target.localName // Identifica el elemento que se ha clicado en el DOM (input, label, button, etc) 

if ( nomElemento.includes('input') ) { // Si el elemento clicado es un input, se ejecuta el código. El includes() comprueba si el dato que se pasa como parametro está incluido en el elemento.
 console.log('Se a hecho click en el imput')

} else {

    console.log(`Se hizo click en ${nomElemento}`)
}

