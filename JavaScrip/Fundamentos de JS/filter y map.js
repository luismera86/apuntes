


const telcnologias = ['css', 'Javascrip', 'react', 'html', 'Python']

const nuevoArray3 = telcnologias.filter(tech => tech === 'css')
// En los arrow fuctions tienen un return implicito  
/* 
 - Con este método se selecciona que elementos quieres que quede en el arreglo sin tener que estar eliminando el original.

 - En este caso la condición es que en el array teconologias este el string 'css', como se cumple la condición devuelve el nuevo array con solamente con css ['css']
 - En si la condición fuese tech !== 'css' devuelve un array con todos los string menos 'css' ['Javascrip', 'react', 'html', 'Python']


*/ 

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

