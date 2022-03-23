import React from "react";
import PropTypes from "prop-types"; // Es necesesario importar para aplicar las PropTypes

// Los archivos js de componentes se escriben siempre la primera letra con mayúscula de cada palabra como este documento PrimeraApp.js

// Hay dos tipos de componentes, unos basados en clases y otros basados en funciones

const PrimeraApp = ({ saludos, subtitulo }) => {
  // Saludos es una propiedad que viene del index.js (Se coloca entre { } ya que las propiedades vien de un objeto, al ponerlas entre { } estamos haciendo una desestructuración del objeto de propiedades en el que elegimos que porpiedad queremos utilizar como parametro para usar en la función)

  return (
    <>
      <h1>{saludos}</h1>
      <p>{subtitulo}</p>
    </>
  );
};

// Para poder insertar multiples lineas de código en un return de una función se debe poner luego del return entre ( )   un fragmento de código entre los símbolos <> Fragmento de código </> de esta manera se puede exportar un componente con función de lineas múltiples

// Las PropTypes son propiedades de mi componente que se tienen que aplicar si o si para que el mismo funcione y no de ningún error
PrimeraApp.propTypes = {
  //saludo: PropTypes.string (en esta linea indicamos que la propiedad saludo si o si tiene que ser un string, si se usa otra cosa sale un error en la consola)
  saludos: PropTypes.string.isRequired, // Si la propiedad tiene que ser colocada si o si para que el componente funcione se debe agregar .isRequired
};

// En esta sección se pueden poner los valores por defecto de las props 
PrimeraApp.defaultProps = {
    saludos: 'Poner aqui un saludo',
    subtitulo: 'Poner aqui un subtitulo',
}

export default PrimeraApp;

