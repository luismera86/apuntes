


const telcnologias = ['css', 'Javascrip', 'react', 'html', 'Python']

const nuevoArray3 = telcnologias.filter(tech => tech === 'css' || tech === 'Python') // En los arrow fuctions tienen un return implicito  // con este método se selecciona que elementos quieres que quede en el arreglo sin tener que estar eliminando el primero, el segundo, desde aqui hasta alla, etc 

const nuevoArray4 = telcnologias.map(tech => {
    if (tech === 'css') { 
        return 'boostrap'
    }else{
        return tech
    };
})

console.table(telcnologias);
console.table(nuevoArray3);
console.table(nuevoArray4);
