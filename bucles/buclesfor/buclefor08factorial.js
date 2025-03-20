// Para poder introducir información por teclado montamos el programa leer.js
// const es una constante que no se puede variar
const read = require('/home/node/leer.js');


let factorial = 1;
let num01 = Number(read("Ingrese número positivo para calcular su factorial: "));

// Dado un número entero n positivo, imprimir su factorial.
// 0! = 1 1! = 1 2! = 2x1 = 2 3! = 3x2x1 = 6 4! = 4x3x2x1 = 24 5! = 120

if(num01 >= 0){ 
    for (let i = 1; i <= num01; i++){

        if (num01 > 0){
            factorial = factorial * i;
        }
    }
}else{
    console.log(`Número ${num01} no es positivo`);
        factorial = 0;
}
console.log(`Factorial de ${num01} es: ${factorial}`);
console.log("FINAL");