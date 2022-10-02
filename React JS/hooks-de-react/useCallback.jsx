// Usamos el useCallback cuando queremos que se rendering solo cuando recibe una modificación en sus dependencias, y no cuando se rendering el componente padre.

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10)

  const incrementFather = useCallback(() => {
    setCounter(value => value + 1) // setCounter memoriza el valor del state, puede ser cualquier valor en ese momento, sea cual sea el valor que tiene en memoria le suma 1, y lo actualiza en el state
  }, [])
}

// useCallback con argumentos

const incrementFather2 = useCallback((num) => {
    setCounter(value => value + num )// setCounter memoriza el valor del state, puede ser cualquier valor en ese momento, sea cual sea el valor que tiene en memoria le suma 1, y lo actualiza en el state
  }, [])
