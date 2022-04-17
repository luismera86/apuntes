
/* 
useEffect

- Se ejecuta cuando un componente esta cargado, es un lugar ideal para colocar código de consulta para una API o para obtener datos de un LocalStorage.

- Debido a que le podemos pasar una dependencia y estar escuchando por los cambios que susedan en una variable, puede actualizar el componente cuando ese cambio suceda 

*/

import {useEffect} from 'react'

useEffect( () => {
    console.log('El componente esta listo')
}, []) // Si en el array de dependencia se encuentra vacio, el useEffect se ejecuta una sola vez, en cambio si el array tiene una variable a la que observa, se va a ejecutar cada vez que esa variable se modifique. Por eso se le dice variable de dependencia, depende de si se modifica esa variable 