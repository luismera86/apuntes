import React from 'react'
import { useCounter } from '../../hooks/useCounter' // Importa el custom Hook creado 
import './CounterApp.css'

const CounterWithCustomHook = () => {
	const { state, increment, decrement, reset } = useCounter() // Se desestructura las propiedades que se envian del custom hook
	return (
		<>
			<h1>Counter with custom Hook: {state} </h1>
			<hr />

			<button onClick={decrement} className='btn'> -1 </button>
			<button onClick={reset} className='btn'> reset </button>
			<button onClick={increment} className='btn'> +1 </button>
		</>
	)
}
export default CounterWithCustomHook
