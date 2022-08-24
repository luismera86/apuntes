// Cada ves que queact identifique un cambio, vuelve a ejecutar todo el código del componente, en caso de tener un useState funcionando en el componente, cada ves que hace un cambio de estádo React vuelve a leer todo el código desde el principio y algunas funciones solamente se tienen que ejecutar una sola ves por que pueden generar ciclos infinitos, para eso se usa el useEffect.

// useEffect(fn, []) el primer parámetro es una función, el segúndo parámetro es un array de dependencia

import React, { useEffect, useState } from 'react'

export const GifGrid = ({ category }) => {
	const [images, setImages] = useState([])

	useEffect(() => {
		getGif() //Es la primer argumento, Ejecuta la función getGif() al leer por primera ves el componente
	}, [])
	//Este es el array de dependencia, si no se coloca, la función del primer argumento se va a ejectutar cada ves que react detecte una cambio en el useState.
	//

	const getGif = async () => {
		//Generando una función asincrona para obtener los gifs de la API, funciona como una promesa.
		const url =
			'http://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=10&api_key=cPf3emDeJS17ncPvjWuwrfVllXOOMmAT'
		const resp = await fetch(url)
		const { data } = await resp.json()

		const gifs = data.map(img => {
			return {
				id: img.id,
				title: img.title,
				url: img.images?.downsized_medium.url,
			}
		})

		console.log(gifs)

		setImages(gifs) // envio al array vacio de images por medio del useState
	}

	return (
		<div>
			<h3>{category}</h3>
			<ol>
				{images.map(
					(
						{
							id,
							title,
						} /* se desestructura el ide y el title de cada objeto del array images*/
					) => (
						<li key={id}>{title}</li> //Con esta función lo que hago es leer todo el array del useState
					)
				)}
			</ol>
		</div>
	)
}

/* 

Retur de los useEffect:

  useEffect(() => {
    const elemtnt = 'Elemento que se está mostrando en pantalla'
    console.log(elemtnt)

    return () => { //Esta función se ejecuta cuando se desmonta el componente, es decir cuando se cambia de ruta o se cierra la página. También se ejecuta cuando se cambia el estado del componente, o cuando se cambia el estado del useState.
      console.log('Se va a eliminar el elemento')
    }
  }, [])

*/
