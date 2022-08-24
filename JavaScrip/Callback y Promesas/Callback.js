/* 

Los Callback son una función que se envia como argunmento, dentro de una función

- El callback es siempre el ultimo parametro de una función
- Los callbacks reciben dos parametros, el error y el resultado de la función que se ejecuta en el callback (error, resultado) 

        (err, result) => {
            if (err) {
                console.log(err)
            } else {
                console.log(result)
            }
        }

- La funcion llama al callback al terminar de ejecutar todas sus funciones
- Si la operación fue exitosa, la función llamará al callback pasando null como primer parametro y si genero algún resultado este se pasará como segundo parametro.
- Si la operación restutó un error, la función llamará al callback pasando el error como primer parametro y null como segundo parametro.






*/


// Ejemplo

func( id, () => { 


 } // La función es el callback

 )


 const ejecutar = (parametro1, parametro2, callback) => callback(parametro1, parametro2) // El callback es la función que se ejecuta, en este caso es la función suma que se ejecuta en la función ejecutar. Osea suma se coloca en el lugar del callback. 


 const suma = (num1, num2) => num1 + num2

console.log(ejecutar(1, 2, suma)) // Muestra en el console log 3 