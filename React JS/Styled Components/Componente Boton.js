
// Este es un componente de un Boton para dejarlo con estilos y con la posibilidad de modificar el margin desde las props


import styled from "styled-components";

export const Button = styled.button`
background-color: beige;
font-size: 2rem;
${(props) => props.mt && `margin-top : ${props.mt}`}; 
// Con esto se puede modificar por medio de porpiedades el margin top similar a boostrap, en el componente importado puede quedar así <Button mt={3}>Haga click</Button> mt es la props que se le pasa y enetre las llaves el valor que va a tener. Entonces el estilo quedaría en 'margin-top: 3px;'
`
