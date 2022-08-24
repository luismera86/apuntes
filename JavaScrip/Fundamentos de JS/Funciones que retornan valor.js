// Funciones que declararn valores
// Funciones que retornan valores

function sumar(num1 = 0, num2 = 0) { 
    return num1 + num2
}

const resultado = sumar(20, 20) // Para poder ver los resultados de los valores que me devuevle la función hay que ponerlo dentro de una variable para poder obtener el resultado de los valores 

console.log(resultado)



function sumar2(num1 = 0, num2 = 0) { 
    return [num1 + num2, 'css', 'Javascrip', 'react', 'html'] // Retorna un arreglo
}

const resultado2 = sumar2() // valor del return (un arreglo) en la posicipon 0 del array el resultado es 0 ya que no recibe ningún argumento la función 

console.log(resultado2)

const [resultado3] = sumar2(5, 5) // En este caso se hace una desestructuración del array de la posición 0 [num1 + num2] y se le asignan los argumentos 5 y 5 para la suma el cual da como resultado const resultado3 = 10

console.log(resultado3);

// De la misma forma que se retornan array y luego se pueden desestructurar, tan bien se puede hacer con objetos.

function sumar3(anoActual, anoNacimiento) {
    return {
        nombre: 'Luis',
        apellido: 'Mera',
        edad: anoActual - anoNacimiento
    }
}

const {nombre, apellido, edad} = sumar3(2022, 1986)

console.log(`Soy ${nombre} ${apellido} y tengo ${edad} años`)




