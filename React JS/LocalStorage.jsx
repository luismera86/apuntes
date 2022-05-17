import React, { useEffect, useState } from 'react'

const LocalStorage = () => {

    const [user, setUser] = useState([
        {
            id: 1,
            name: 'Juan',
            email: 'maii@mail.com',
            password: '123456'
                }
    ])
    

    // Recuperando los datos del local storage

    useEffect(() => {

        const obtenerLs = () => {
          JSON.parse(localStorage.getItem('user')) ?? []  
          setUser(obtenerLs)
        }
    })




    //Cargando los datos al local storage 

    useEffect(() => {
      localStorage.setItem('users', JSON.stringify(user))
    }, [user])
    
    /* el 'user' dento del setItem() indica la key del local storage, y lo que está en JSON.stringify() es el value del local storage. Cada ved que se modifique el el state user se va a ir modificando el local storage. */

    

  return (
    <div>LocalStorage</div>
  )
}

export default LocalStorage