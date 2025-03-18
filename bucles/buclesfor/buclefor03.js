// Para poder introducir información por teclado montamos el programa leer.js
// const es una constante que no se puede variar
const read = require('/home/node/leer.js');


let suma = 0
let num = Number(read("Ingrese número: "));

for (let i = 1; i <= num; i++){
    console.log(`Número: ${i}`);
    suma += i;

}
console.log("Suma de los números: " + suma);
console.log("FINAL");