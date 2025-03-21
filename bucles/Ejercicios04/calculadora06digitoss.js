// Para poder introducir información por teclado montamos el programa leer.js
// const es una constante que no se puede variar
const read = require('/home/node/leer.js');

// Ingresando un valor entero, muestre por pantalla sus dígitos en orden inverso, por ejemplo:
// INGRESO: 3589, SALIDA: 9853.

let num = Number(read("Ingrese número : "));
let resto = 0, num01 = num;
console.log();
process.stdout.write(`Número introducido: ${num01}  `);
console.log();
process.stdout.write(`Número inverso: `);
for (let i = 1; num != 0; i++){
    resto = num % 10;
    process.stdout.write(`${resto}`);
    num = Math.floor(num / 10);
}
console.log()
console.log("FINAL");