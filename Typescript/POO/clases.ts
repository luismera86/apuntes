/* 
Modificadores:

Privados: son los que se puede acceder solo dentro de la misma clase, no se puede acceder ni en las clases hijas ni en las instancias por fuera de la clase.

Protegidos: solo se puede acceder dentro de la clase y sus clases hijas

Públicos: Se pueden acceder desde cualquier lugar.

*/

class Sale {
  private amount: number // solo se puede acceder dentro de está clase
  protected order: number // se puede acceder en está clase y en las clases hijas
  public status: boolean // se puede acceder desde cualquier lugar

  constructor(amount: number) {
    this.amount = amount
  }

  getTotal(): number {
    return this.amount
  }

  orderGenerate(): number {
    this.order = 10
    return this.order
  }

  protected getStatus(): boolean {
    return true
  }
}

const res = new Sale(20)
console.log(res.getTotal()) // 20
console.log(res.orderGenerate()) // 10


/*  Herencia  */

class Iva extends Sale{
    private iva: number = 1.21

    constructor(amount: number) {
        super(amount) // traemos las propiedades del padre y mandamos el argumento que espera el constructor del padre
    }

    getPriceConIva(): number {
        let total = super.getTotal() * this.iva

        return total
    }
}

const totalPrice = new Iva(100)

console.log(totalPrice.getPriceConIva()) // 121 
