
// Tipos de datos

// Undefine

let cliente

console.log(cliente); // da como resultado Undefined

// Booleans 

const descuento = true;
const descuento2 = false;

console.log(descuento);
console.log(descuento2);

//Numeros 

const numero1 = 20.4
const numero2 = 100
const numero3 = 30

console.log(numero1, numero2, numero3)

// Convertir numeros string a numero entero

const numero4 = parseInt('20') // transforma el string en numero

console.log(typeof numero4)  

// Symbol - Los symbol se caracterizan por se únicos por mas que tengan el mismo valor

const symbol1 = Symbol(10)
const symbol2 = Symbol(10)

console.log(symbol1 === symbol2); // el resultado va a ser false ya que por más que tenga el mismo valor son únicos 
