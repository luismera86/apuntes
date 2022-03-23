import React, { useState } from "react";

// Los Hooks son funciones de react, todos los use en react son Hooks

const CounterApp = ({ number }) => {
  // Hook useState tiene por defecto un array [valor, función] en la primera posición se coloca el valor que se va a asignar a la función, en la segunda posición es la función porpiamente dicha que se va a ejecutar cuando se llame ese valor
  const [counter, setCounter] = useState(number); // Se desestructura el useState asignando el nombre del valor y el nombre de la función que se va a llamar
  const funClickMas = () => {
    // Es el evento que se escucha cuando hace click en el botón
    setCounter(counter + 1); // es la acción que va a realizar la función
  };

  const funClickMenos = () => {
    setCounter(counter - 1);
  };

  const clickReset = () => {
    setCounter(number);
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>
      <button onClick={funClickMas}>+1</button>
      <button onClick={clickReset}>Reset</button>
      <button onClick={funClickMenos}>-1</button>
    </>
  );
};
// Los eventos se ingresan en el html, en la documentación de react estan los mismos https://es.reactjs.org/docs/events.html

export default CounterApp;
