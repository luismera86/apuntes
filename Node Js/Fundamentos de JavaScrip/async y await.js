const empleados = [
	{ id: 1, nombre: 'Juan', salario: 1000 },
	{ id: 2, nombre: 'Pedro', salario: 2000 },
	{ id: 3, nombre: 'Maria', salario: 3000 },
]


const getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        const empleado = empleados.find(e => e.id === id)
        if (empleado) {
            resolve(empleado)
        } else {
            reject(`No existe un empleado con el id ${id}`)
        }
    })
}

const getSalario = (id) => { 
    return new Promise((resolve, reject) => {
        const salario = salarios.find(e => e.id === id)?.salario
        if (salario) {
            resolve(salario)
        }
        else {
            reject(`No existe un salario para el empleado con el id ${id}`)
        }

    })
}

const getInfoUsuario = async (id) => {  // async es una palabra reservada que indica que la funcion es asincrona
    try { // try es una palabra reservada que indica que la funcion puede fallar
    const empleado = await getEmpleado(id) // await es una palabra reservada que indica que la funcion es asincrona
    const salario = await getSalario(id)    // await es una palabra reservada que indica que la funcion es asincrona
    return `${empleado.nombre} tiene un salario de ${salario}` // retorna un string
    } catch (error) { // catch es una palabra reservada que indica que la funcion puede fallar
        return error // retorna el error
    }
}

getInfoUsuario(1)
