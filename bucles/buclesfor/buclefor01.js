// Para poder introducir información por teclado montamos el programa leer.js
// const es una constante que no se puede variar
const read = require('/home/node/leer.js');

// Imprimir por pantalla los números naturales, desde el 1 hasta el número ingresado por
// teclado por el usuario, incluido.

let num = Number(read("Ingrese número: "));
// definimos el contador

for (let i = 1; i <= num; i++){
    console.log(`Número: ${i}`);
}

console.log("FINAL");