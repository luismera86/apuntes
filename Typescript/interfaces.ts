/* 

Las interfaces nos sirven para hacer contratos, para que los objetos se comporten de una forma en un escenario y de otra forma en otro escenario y de esta manera podemos categorizar.
Las interfaces son las bases de los patrones de diseño.

*/

interface Drink {
  name: string
}

// Herencia en interfaces, se manejan de manera muy similar a la herencia de las clases

interface AlcoholicDrink extends Drink {
  alcohol: number

  showInfo(): string
}

class Wine implements AlcoholicDrink {
  alcohol: number // cumplimos con el contrato de AlcoholDrink
  name: string // cumplimos con el contrato de Drink

  constructor(name: string, alcohol: number) {
    this.alcohol = alcohol
    this.name = name
  }

  showInfo(): string {
    // cumplimos con el contrato de AlcoholDrink
    return `Info: ${this.name} ${this.alcohol}`
  }
}

// Más de una interface en una clase

interface MixedDrinks {
  ingredients: string[]
}

class Cocktail implements AlcoholicDrink, MixedDrinks {
  name: string
  ingredients: string[]
  alcohol: number

    constructor(name: string, ingredients: string[], alcohol: number) {
        this.alcohol = alcohol
        this.name = name
        this.ingredients = ingredients
  }

  showInfo(): string {
    return ''
  }
}
