
/* 

Los tipos son propiedades que le asignamos a una variable para que siga la misma estructura asignada por el tipo

*/

type Products = {
    readonly name: string, // readonly lo que hace es que una ves que se asigne el name no se pueda modificar, por que la propiedad es de solo lectura
    price: number,
    stock: number,
    description?: string // el símbolo ? al final de la propiedad significa que está propiedad es opcional, typescript no te va exigir que la coloques.
}

const product: Products = {
    name: 'Zapato',
    price: 30,
    stock: 1000
    // la description no es obligatoria así que typescript no me lo exige
}

type Models = {
    model: string
}

// Ahora vemos como se puede combinar dos tipos en una sola variable en la cual tiene que cumplir con los dos tipos

const product2: Products & Models = {
    name: 'Camisa',
    price: 300,
    stock: 200,
    model: 'Manga corta'
}