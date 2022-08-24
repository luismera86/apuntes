// Fetch API - Async Await (Multiples llamados)

const url = 'https://jsonplaceholder.typicode.com/comments'
const url2 = 'https://jsonplaceholder.typicode.com/photos'




const consultApi = async () => { 
    const respuesta = await fetch(url) 
    const resultado = await respuesta.json() 
    console.log(resultado)
    

    const respuesta2 = await fetch(url2) 
    const resultado2 = await respuesta2.json() 
    console.log(resultado2)
    
    // Utilizando este método de llamar a las dos API con await se torna ineficiente ya que la segunda API tiene que esperar que termine de cargar todo la primera para comenzar a ejecutarse, en el caso que sea una API independiente de la primera este metodo no sirve
}

consultApi()

const consultApi2 = async () => { // Con el async estableces que es una fución asincronica
    
   const [respuesta, respuesta2] = await Promise.all([fetch(url), fetch(url2)]) // Al ser un promise all, arrancan los dos al mismo tiempo, se hace una desestructuración de del array
    const resultado = await respuesta.json()
    const resultado2 = await respuesta2.json()
    console.log(resultado)
    console.log(resultado2)
    
}

consultApi2()
