// el useMemo se lo utiliza cuando su componente realiza tares pesadas y se quiere evitar que se vuelva a ejecutar, como por ejemplo peticiones http, o cálculos pesados, etc. Entonces lo usamos cuando queremos que se rendering solo cuando recibe una modificación en sus dependencias, y no cuando se rendering el componente padre.

import '../02-useEffect/effects.css'

import React, { useMemo, useState } from 'react'

import { procesoPesado } from '../../helpers/procesoPesado'
import { useCounter } from '../../hooks/useCounter'

export const MemoHook = () => {
    
    const { counter, increment } = useCounter(5000)
    const [show, setShow] = useState(true)
    // const memoProcesoPesado = procesoPesado(counter) // Esto se ejecuta cada vez que se rendering el componente, por lo que es muy pesado para el navegador
    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]) // Esto se ejecuta solo cuando el counter cambia, y no cuando se rendering el componente padre, [counter] es la dependencia que se va a estar monitoreando para ver si cambia, y si cambia, entonces se ejecuta el procesoPesado, si no cambia, entonces no se ejecuta el procesoPesado
    

    return (
        <div>
            <h1>MemoHook</h1>
            <h3>Counter: <small>{counter}</small></h3>
            <hr />

            <p>{memoProcesoPesado}</p> {/* Esto se ejecuta solo cuando el counter cambia, y no cuando se rendering el componente padre */}

            <button
                className="btn btn-primary"
                onClick={increment}
            >
                +1
            </button>

            <button
                className="btn btn-outline-primary ml-3"
                onClick={() => {
                    setShow(!show)
                }}
            >
                Show/Hide {JSON.stringify(show)}
            </button>
        </div>
    )
}