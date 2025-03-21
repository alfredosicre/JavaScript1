// Para poder introducir información por teclado montamos el programa leer.js
// const es una constante que no se puede variar
const read = require('/home/node/leer.js');

// Ingresando un número entero por teclado de 4 cifras, mostrar sus dígitos uno por línea.

let num = Number(read("Ingrese número de 4 dígitos : "));
let resto = 0;
for (let i = 1; i <= 4; i++){
    resto = num % 10;
    console.log(`Número: ${resto}`);
    num = Math.floor(num / 10);
}

console.log("FINAL");