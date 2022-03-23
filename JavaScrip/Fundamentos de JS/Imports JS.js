
// Imports y export JS 

import {sumar} from './funciones.js' // La función importada de una exportación por defaul se le pude asignar cualquier nombre ya que solo se puede exportar por default 1 sola función. La ruta de enlace en JavaScrip tiene que tener si o si la extensión js.
// Cuando importamos funciones exportadas de un objeto hay que desestructurarla en el import con { } el nombre tiene que coincidir con el nombre exportado. En caso de querer un nombre diferente por que coincide con una librería descargada se le puede asignar un nombre alias {nombre as alias} de esta 

const resultado = sumar(20, 30)

console.log(resultado)
