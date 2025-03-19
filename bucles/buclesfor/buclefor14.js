// Para poder introducir información por teclado montamos el programa leer.js
// const es una constante que no se puede variar
const read = require('/home/node/leer.js');

// Escribir un programa que pida al usuario un número entero positivo y muestre por
// pantalla la cuenta atrás desde ese número hasta cero separados por comas.

let num = Number(read("Ingrese número entero positivo: "));

if (num > 0){
    for (let i = num; i >= 0 ; i--) {
        if (i == 0){
        process.stdout.write(`${i}`); // este if es para que no salga la ultima coma en pantalla
        }else {
        process.stdout.write(`${i},`);
        }
    }
}
console.log();
console.log("FINAL");
