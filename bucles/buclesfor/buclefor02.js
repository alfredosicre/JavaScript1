// Para poder introducir información por teclado montamos el programa leer.js
// const es una constante que no se puede variar
const read = require('/home/node/leer.js');


let suma = 0, num01 = 0
let num = Number(read("Ingrese número: "));
// definimos el contador
//Imprimir la suma de n números ingresados por teclado. La cantidad de números (n) se
//solicita al usuario al principio y se ingresa por teclado.

for (let i = 1; i <= num; i++){
    num01 = Number(read("Ingrese número: "));
    console.log(`Número: ${i}`);
    suma += num01;

}
console.log("Suma de los números: " + num01);
console.log("FINAL");