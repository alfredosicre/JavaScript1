// Para poder introducir información por teclado montamos el programa leer.js
// const es una constante que no se puede variar
const read = require('/home/node/leer.js');

// Escribir un programa que pida al usuario un número entero positivo mayor que 2 y
// muestre por pantalla si es un número primo o no.

let num = Number(read("Ingrese número entero positivo mayor que 2: "));
let esprimo = true;

if (num > 2){

    for (let i = 3; i <= Math.sqrt(num) && esprimo; i+=2) {
        // Si num es divisible por i, no es primo
        if (num % i == 0){ // no es primo porque es divisible por i
            esprimo = false;
        }
    }
}
if(esprimo){ // si esprimo = true es un numero primo
    console.log(`El número ${num} es un número primo`); // si es primo
}else{ // si esprimo = false no es un numero primo
    console.log(`El número ${num} no es un número primo`); // no es primo
}
console.log("FINAL");
