import React, { useState } from 'react'

const Formularios = () => {

    const [apellido, setApellido] = useState('')  
    const [email, setEmail] = useState('') 
    
    
    const handleSubmit = (e) => { 
        e.preventDefault()

        //Validación de formulario

        if([apellido, email].includes('')) {
            console.log('Todos los campos tienen que estar completos')
            //se puede colocar un setError(true) luego un return
        }

        //se coloca un setError(flase) cuando detecta que ya no se cumple la consdición del if

        /* La validación del formulario se hace con la condicional, utilizando el método includes() luego del alrray, en el colocas que indormación tiene que tener las variables para que se cumpla la condición, en este caso si al menos una de las variables cumple la condición de que esten '' (vacias) entonces el if es afirmativo se cumple la condición */


        console.log('Enviando formulario ...')
     }


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='nombre'>Nombre</label>
                <input id='nombre' type="text" placeholder='Escriba su nombre' />
                {/* El htmlFor hace que cuando hagamos click en ese label, nos envie directamente al input al cual le asignamos el id. htmlFor='nombre' en el label y en el input id='nombre', al hacer click sobre Nombre automaenticamente el cursor se coloca sobre el input */}
            </div>
            <div>
                <label>Apellido</label>
                <input 
                type="text" 
                placeholder='Ingrese aqui su apellido' 
                value={apellido}
                onChange={ (e) => { setApellido(e.target.value) }}
                />
                {/* El value es la información que envia la variable apellido al input, para modificar la variable apellido por medio del useState, utilizamos la propiedad onChange. onChange={ (e) => { setApellido(e.target.value)}} "e" es el evento del onChange que esría cada ves que escribimos en el input, e.target.value significa el evento ubicación y valor de la modificación del input, el valor es lo que se escribe en el input, cada letra o número que se escriba en el input se va a ir agregando en la variable apellido por medio del setApellido. Al final del formulario los valores de las variables del useState son los que se van a enviar */}
            </div>
            <div>
                <label>Email</label>
                <input type="email" placeholder='Ingrese aqui su email' value={email} onChange={ (e) => { setEmail(e.target.value) }} />
            </div>
            <div>
                <input type="submit" value='Enviar'/> 
                {/* Se pueden crear botones de envío de formulario con input colocando el type='submit' y en el value el texto que va en el botón value='Agregar' agregar al estilo un cursor pointer para que aparezca la manito al pasar el mouse por encima */}
            </div>
        </form>
    </div>
  )
}

export default Formularios