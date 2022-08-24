
// Operaciones en los arreglos

const telcnologias = ['css', 'Javascrip', 'react', 'html']

console.table(telcnologias)

//Añadir elementos al arreglo 

// telcnologias.push('NodesJs') //Agrega un elemento al final del array

const nuevoArray = [...telcnologias, 'NodesJs'] // En react no se debe modificar el arreglo original, se hace una copia con las modificaciones

console.table(nuevoArray)

//telcnologias.unshift('Python') //Agrega un elemento al comienzo del array

const nuevoArray2 = ['Python', ...nuevoArray]
console.table(nuevoArray2)

//Eliminar elementos de un array 

//telcnologias.pop()// elimina el último elemento del array
//telcnologias.shift() // elimina el primer elemento del array

//telcnologias.splice(1,1)// con splice indicamos con el primer parámetro desde que posición del indice se quiere eliminar y con el segundo parámetro indicamos cuantos elementos queremos eliminar se quiere eliminar

//console.table(telcnologias)

//filter() itera sobre el arreglo y se puede retornar con una condicional para filtrar los elementos del arreglo que quieras. Por ejmplo quiero solamente los elementos que sean [css] return valor === 'css'

const nuevoArray3 = nuevoArray2.filter(tech => 
    (tech === 'css' || tech === 'Python') // Colocar los parentecis luego de la fleha significa un return implicito
) // con este método se selecciona que elementos quieres que quede en el arreglo sin tener que estar eliminando el primero, el segundo, desde aqui hasta alla, etc 


console.table(nuevoArray3)

// Reemplazar elemenos de un array 

const nuevoArray4 = telcnologias.map(tech => {
    if (tech === 'css') { return 'boostrap'}else{return tech};
})

//el map() itera por todo el array haciendo un return del nuevo array con los mismos elementos, en el ejemplo anterior de utilizó un operador if para reemplazar si es que existia un elemento llamado 'css' por un elemento que se llame 'boostrap' en caso contrario retorna una copia igual al arreglo original.

console.table(nuevoArray4)

