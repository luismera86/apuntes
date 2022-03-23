
// Arrays method

const telcnologias = ['css', 'Javascrip', 'react', 'html', 'Python']
const numeros = [10, 20, 30]

let nuevoArray;

//Filter
nuevoArray = telcnologias.filter(tech => tech === 'css' || tech === 'Python') // Crea un nuevo array con los restultados del filter sin modificar el array original

const nuevoArray2 = numeros.filter(numeros => numeros >15) // Retorna un nuevo array con los números mayores a 15 osea 20 y 30 

const resultado = telcnologias.includes('Python') // Busca si exisre el argumento y retorna un true o false

const resultado2 = numeros.some(numero => numero > 15) // Busca si al menos un numero es mayor que 15 y devuelve un true o fase en caso que se cumpla o no la condición 

const resultado3 = numeros.find(numero => numero > 15) // Devuelve el primer resultado que cumpla la condición en este caso el 20 es el primer número mayor a 15 

const resultado4 = numeros.every(numero => numero > 15) // Retora true o false si todos los elementos del array cumplen o no la condición, en este caso se consulta si todos los números son mayores a 15 como 10 no es mayor a 10 entonces el resultado es false 

const resultado5 = numeros.reduce((total, numero) => numero + total, 0) // Reduce se utiliza para sumar el total de la suma de números que posee el array. El parametro total es donde se van a ir acumulando la suma de números y el parametro numero son los numeros del arreglo, en el return "numero + total" es la suma de cada numero con el total que va sumando, y en 0 es de la posición del array que comienza a sumar. Este método es usado para los carritos de compra donde tienes que ir sumando el total de los productos.

const nuevoArray3 = telcnologias.map(tech => tech) // Con este método dentro de la const nuevoArray se lee todo el array tecnologias y hace una copia en el mismo. El parametro tech puede ser cualquier nombre, se puso como abreviatura de tecnología, pero si pones cualquier otro nomebre funciona igual

console.table(nuevoArray)
console.log(nuevoArray2)
console.log(resultado)
console.log(resultado2)
console.log(resultado3)
console.log(resultado4)
console.log(resultado5)
console.log(nuevoArray3)

