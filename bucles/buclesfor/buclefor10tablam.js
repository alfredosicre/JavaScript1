// Para poder introducir información por teclado montamos el programa leer.js
// const es una constante que no se puede variar
const read = require('/home/node/leer.js');

// Dado un número entero n, imprimir su tabla de multiplicar del 1 al 9.

let num = Number(read("Ingrese número: "));

for (let i = 1; i <= 9; i++){
    let resul = num * i;
    process.stdout.write(`${resul},`);
    resul == 0;
}

console.log("FINAL");