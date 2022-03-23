
//Funciones - Declaradas 

sumar() //En las funciones declaradas puedes llamarla antes de escribir la función

function sumar() {
    console.log(2 + 2);
}




function sumar2(num1, num2) { // Los parametros que se colocan en los parentecis son para que la función pueda tomarlos desde la ejecución
    console.log(num1 + num2);
}

sumar2(10, 10) // los argumentos indicados quivalen a num1, num2  


function sumar3(num1, num2 = 0) { // el parametro num2 = 0 quiere decir que si no llamo a la funcion con un argumento en su lugar, el valor por defecto va a ser 0 en este caso, si llegase a declarar un argumento en su lugar sobreescribe el valor 0 por el argumento indicado
    console.log(num1 + num2);
}

sumar3(10) // los argumentos indicados quivalen a num1, num2  

//Funciones 
