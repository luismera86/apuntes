
// Fetch API - Async Await

const url = 'https://jsonplaceholder.typicode.com/comments'




const consultApi = async () => { // Con el async estableces que es una fución asincronica
    const respuesta = await fetch(url) // no se ejecuta nada hasta que temine el porceso de esta etapa 
    const resultado = await respuesta.json() // await lo que hace es bloquear la etapa de proceso hasta que termine la anterior en este caso es respuesta 
    resultado.forEach(comentarios => {
        console.log(comentarios)
    })
        

}

consultApi()
