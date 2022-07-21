import React from 'react'

// Los PropTypes sirven para restringir que tipo de información tienen que tener las props de un componente

/* 

Instalación: 

yarn add prop-type o npm install prop-type

*/

export const App = ({ title, price }) => {
  return (
    <div>Muestra de  PropTypes</div>
  )
}


App.propTypes = {

  title: PropTypes.string.isRequired,
  price: PropTypes.number

}

/* 

Se agrega al final del documento los prop types con las condiciones que deben tener las props, pueden restringir para que sean de tipo string, number o boolean, en caso de que no cumpla esa condición en la consola va a salir el error especificando que tipo de dato se debe ingresar.
Para su uso obligatorio se tiene que agregar .isRequired 

*/