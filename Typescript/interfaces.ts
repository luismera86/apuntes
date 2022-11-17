
/* 

Las interfaces nos sirven para hacer contratos, para que los objetos se comporten de una forma en un escenario y de otra forma en otro escenario y de esta manera podemos categorizar

*/

interface Drink {
    name: string
}

// Herencia en interfaces, se manejan de manera muy similar a la herencia de las clases

interface AlcoholicDrink extends Drink{
    alcohol: number

    showInfo(): string
}

class Wine implements AlcoholicDrink {

    alcohol: number;  // cumplimos con el contrato de AlcoholDrink
    name: string; // cumplimos con el contrato de Drink

    constructor(name: string, alcohol: number) {
        this.alcohol = alcohol
        this.name = name
    }

    showInfo(): string { // cumplimos con el contrato de AlcoholDrink
        return `Info: ${this.name} ${this.alcohol}`
    }

}