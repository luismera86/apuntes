
//Iteradores js 

const telcnologias = ['css', 'Javascrip', 'react', 'html']


//Interador map

const nuevoArray = telcnologias.map((tech) => {
    return tech
}) // Con este método dentro de la const nuevoArray se lee todo el array tecnologias y hace una copia en el mismo

console.log(nuevoArray);
