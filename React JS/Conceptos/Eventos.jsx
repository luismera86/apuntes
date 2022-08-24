import React from 'react'

const Eventos = () => {

    const handleSubmit = (e) => { 
        e.preventDefault()

        console.log('Enviando formulario ...')
     }

    return (
    <div>
        <form onSubmit={handleSubmit}></form>
    </div>
  )
}

export default Eventos