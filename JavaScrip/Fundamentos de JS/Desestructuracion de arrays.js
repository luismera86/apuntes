
//Destructuring array

const telcnologias = ['css', 'Javascrip', 'react', 'html']

const [css, js] = telcnologias // Los nombres de las variables pueden ser cualquiera, cada una equivale al elemento del valor indice comenzando desde el 0

const [ , , , html] = telcnologias //con este método solo sacamos 1 variable del 5to elemento, dejando con comas vacios los lugares de los demas elementos que no necesito

console.log(css, js)
console.log(html)