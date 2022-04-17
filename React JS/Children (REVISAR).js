/* 
Las propiedades children son para pasar a los componentes mayor cantidade de datos 

*/

/*  
* COMPONENTE PADRE 


import {Children} form 'React' 

export const ComponentePadre = () => {

    return (

        <div>
        <Children> <h1> Hola Mundo <h1/> <Children/> //* El contenido que se encuentra dentro del componente, se envía a la porp children
        <div/>
    )
} 


*/

import React from 'react'

export const Children = ({children}) => {
  return (
    <div>{children}</div>
  )
}

/* 
EN EL NAVEGADOR 

En el navegador se va a mostrar el Hola Mundo  que introducimos de contenido del componente padre,
de esta manera podemos agregar mucho más elemntos con una sola propiedad

*/
