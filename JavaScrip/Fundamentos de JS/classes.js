/* Las class crean un objeto por medio de un constructor, que recibe los parametros los datos que necesita el objeto  */

class Persona {

    constructor(nombre, apellido, edad) {

        this.nombre = nombre,     // El this representa el nombre de la clase en este caso sería Persona.nombre = nombre
        this.apellido = apellido,
        this.edad = edad

    }

    getUsuario() {
        console.log(`${this.nombre} ${this.apellido}`)
    }

    cumpleanios(mescumple) {
       console.log(`Cumple en el mes de ${mescumple}`)
    }

    devolverEdad() {
        return this.edad
    }

    static valor = 'Hola' // Esto es una propiedad estatica, no se puede acceder a ella desde un objeto, sino desde la clase
}

const luis = new Persona('Luis', 'Mera', 35) // Esta variable luis pasa a reemplazar a this en el constructor, quedaría luis.nombre = nombre


console.log(luis)

luis.getUsuario() // Muestra en el console log Luis Mera

luis.cumpleanios('Junio') // Muestra en el console log Cumple en el mes de Junio

luis.devolverEdad() // Muestra en el console log 35