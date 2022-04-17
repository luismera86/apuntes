/* 

- El useContext se usa para almacenar contendio que puede ser usado por cualquier componente 

- Los useContext se usan para pasar datos entre componentes

- Se pueden usar varios useContext en un mismo componente



*/

import { createContext } from "react";


// Componente padre App.jsx 

export const context = createContext([{nombre: 'Luis'}, {nombre: 'Pedro'}]);

const ComponenteContext = () => {

    const {Condsumer, Provider} = context;
    
    return (
        <h1>hola</h1>
    )
}


// Otro componente hijo

import { useContext } from "react";
import { context } from "./ComponenteContext";

const ComponenteHijo = () => {
    useContext(context);

    return (
        <h1>hola</h1>
    )
}



