
/* 
    El await es una palabra reservada que se utiliza para esperar a que una promesa sea resuelta. 
    Los await se utiliizan en la funcinones async, estos hacen que espere que resuelva la promesa y despues ejecute la función.
*/


const buscarUsuario = async(id) => {
    // await espera a que la promesa sea resuelta
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    const resp = await fetch(url);
    const usuario = await resp.json();
    console.log(usuario);
}

// Resolver problemas de demoras con los await

const usuarios = ['Luis', 'Marta', 'Pepe']

const obtenerUsuario = async(id) => {

    const arrUsuarios = []
    for(const id of usuarios) { // for of es un bucle que recorre un array o un objeto y devuelve cada uno de los elementos del array o objeto en una variable de cada iteracion del bucle 
        arrUsuarios.push( buscarUsuario(id) ); // a medida que el siclo for se va añadiendo los usuaruios al array arrUsuarios. En esta sección se esta haciendo una promesa por cada usuario. Si colocamos un await el ciclo for se detendra hasta que todas las promesas se resuelvan y se ejecutara la función, pero demoraría el tiempo que se ejecute la promesa por cada usuario, por ello es mejor utilizar un Promise.all() en el return de la función para espere que se resuelvan todas las promesas y las retoren.
    }

    return await Promise.all(arrUsuarios); // Promise.all() es una función que recibe un array de promesas y devuelve una promesa que se resuelve cuando todas las promesas se resuelvan.
}


// Metodo más prolijo y corto 

const obtenerUsuario2 = async () => { 
    return await Promise.all( usuarios.map( buscarUsuario ) )
}


// Manejo de errores con await 

const obtenerUsuario3 = async (id) => {
    try {

    const usuario = await buscarUsuario(id)

    return usuario
    } catch (err) {
        console.log(err)
    }   
}


// for await, if await

const usuariosCiclo = async() => {
    
    
    for await (const usuario of usuarios) { // for await es un bucle que recorre un array o un objeto y devuelve cada uno de los elementos del array o objeto en una variable de cada iteracion del bucle
        console.log(usuario)
    }
}

const usuarioAwait = async() => { 

    if (await buscarUsuario(id) === 'Luis') { // if await es una condición que se evalua en una promesa y devuelve un booleano.
        console.log('El usuario es Luis')

    } else{
        console.log('El usuario no es Luis')
    }
}

/* El await se puede utilizar paracticamente en cualquier lugar, inclusive dentro de un console log */
