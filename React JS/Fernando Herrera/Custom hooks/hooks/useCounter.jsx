import React, { useState } from 'react'

export const useCounter = (/* se puede establecer un parametro como valor incial por defecto */) => { 

	const [state, setState] = useState()

	const increment = () => {
		setState(state + 1)
	}

	const decrement = () => {
		setState(state - 1)
	}

    const reset = () => {
        setState()
    }


    return {
        state,
        increment,
        decrement,
        reset
    }
    /*  son las porpiedades que se utilizan en el componente que importa el custom Hook
     */
}

/* 

    * Metodo de importación en el componente 
    
    import { useCounter } from '../../hooks/useCounter'

    * Dentro del componente

    const ComponenteQueImporta = () => {

        const { state, increment, decrement, reset } = useCounter()

        return (
		<>
			<button onClick={decrement} className='btn'> -1 </button>
			<button onClick={reset} className='btn'> reset </button>
			<button onClick={increment} className='btn'> +1 </button>
		</>
	)

    }



*/

