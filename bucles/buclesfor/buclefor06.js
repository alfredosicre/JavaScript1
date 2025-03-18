// Para poder introducir información por teclado montamos el programa leer.js
// const es una constante que no se puede variar
const read = require('/home/node/leer.js');


let num01 = 0, positivo = 0;
let num = Number(read("Ingrese cantidad de números a procesar: "));

// Siguiendo la misma metodología de carga, calcular la cantidad de valores positivos.

for (let i = 1; i <= num; i++){

    num01 = Number(read(`Ingrese ${i} número: `));
    if (num01 > 0){
        positivo = positivo + 1;
    }
}
console.log("Cantidad de positivos: " + positivo);
console.log("FINAL");