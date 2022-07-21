import React from 'react'

/* 

Con las default props lo que hacemos es indicar el valor por defecto que van a tener las props en caso de que no se ingrese ningún valor, se pueden complementar junto con las Prop Types 

*/

export const App = ({ title }) => {
  return (
    <div>defaultProps</div>
  )
}


App.defaultProps = {
    title: 'Titulo por defecto'
}