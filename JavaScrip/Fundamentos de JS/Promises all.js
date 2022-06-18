


Promise.all([promise1(), promise2(), promise3()])
    .then(([result1, result2, result3]) => console.log(result1, result2, result3))
    
    .catch(err => console.log(err))

    // con Promise.all se puede ejecutar una función que recibe un array de promesas y se ejecuta cuando todas las promesas se resuelvan en una sola función.
    // En este caso se ejecuta la función que recibe el array de promesas y se ejecuta cuando todas las promesas se resuelvan.
    