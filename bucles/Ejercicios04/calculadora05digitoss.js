// Para poder introducir información por teclado montamos el programa leer.js
// const es una constante que no se puede variar
const read = require('/home/node/leer.js');

// Repetir el ejercicio anterior, pero ingresando un número entero de cualquier cantidad de
// cifras.

let num = Number(read("Ingrese número : "));
let resto = 0;


for (let i = 1; num != 0; i++){
    resto = num % 10;
    console.log(`Número: ${resto}`);
    num = Math.floor(num / 10);
}

console.log("FINAL");