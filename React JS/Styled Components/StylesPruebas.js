import React from 'react'
import styled from 'styled-components'; // Insertamos el styled component para que funcione 


const Title = styled.div` //Title es el nombre del componente a utilizar, que reemplazaría la etiqueta tag en el html del return. El style.div significa que en el componente se va a crear una etiqueta div dentro del componente Title con los estilos que se van a colocar a continuación
  font-size: 3em;
  text-align: center;
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const Button = styled.button`
background-color: blue;
font-size: 2rem;
color: white;
`;

const Button2 = styled(Button)` // Esa forma podemos extender componentes de estilos anteriores, es como hacer una copia, pero podemos escribir los mismos estilos abajo y los modificamos para que lo pice al componente heredado 
//background-color: antiquewhite;
`;




export const StylesPruebas = () => {
  return (
    <Wrapper> 
    <Title>
      Hello World!
    </Title>
    <Button>Hace click</Button>
    <Button2>Hace click</Button2>
  </Wrapper>
  )
}
