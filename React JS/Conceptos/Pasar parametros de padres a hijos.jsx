/* 
Para pasar propiedades de un componente hijo a un padre se tiene que pasar por medio de párametros a través de una función creada en el componente padre y ejecutada en el componente hijo 
*/

// Componente padre

export const ComponentePadre = () => {

    const funcionEnPadre = (name) => { 
        console.log(name) // se muestra el nombre Luis
    }


    return 

        <>
            <ComponenteHijo funcionEnPadre={funcionEnPadre} />
        </>
/* 
    - Creamos la función funcionPare que es la que se le envia al componente hijo por medio de una props.
    - En la función recibe del componente hijo los datos por medio de los parámetros, en este caso name

*/

}


// Componente hijo

export const ComponenteHijo = ({funcionEnPadre}) => {


    const nombre = 'Luis'

    const enviarNombre = (name) => {
        funcionEnPadre(name)
    }

    return 

    <>

        <p> El nombre que se va a mostrar en el console log del componente padre es {nombre}</p>
        <button onclick={() =>enviarNombre(nombre) } >Enviar nombre</button>
    
    </>

/* 
    - El comoponente hijo reciber la función del componente padre por medio de las porps 
    - En este caso el dato que queremos enviar es el nombre Luis.
    - Creamos una función manejadora de eventos que ejecute la función del componente padre funcionEnPadre()
    - Para enviar el dato en este caso usamos un boton, que por medio del evento onclick ejecutamos una función anónima que ejecuta la función enviarNombre() en la cual toma el dato que necesitamos y lo envia por medio del parámetro name.
    - La función enviarNombre() recibe el parametro name enviarNombre(name) y ejecuta la función que recibio del padre enviando el nombre como parámetro funcionEnPadre(name)
*/

}



