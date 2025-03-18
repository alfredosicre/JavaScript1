// Para poder introducir información por teclado montamos el programa leer.js
// const es una constante que no se puede variar
const read = require('/home/node/leer.js');

// Escribir un programa que imprima todos los números pares incluidos en un rango. Los
// extremos del rango se le pidan al usuario. Los extremos deben incluirse.
// Ejemplo:
// Ingresando 1 y 8, debe imprimir: 2 4 6 8

let desde = Number(read("Ingrese número desde: "));
let hasta = Number(read("Ingrese número hasta: ")); 

if (desde % 2 != 0){
    desde ++;
}
for (let i = desde; i <= hasta; i+=2){
    process.stdout.write(`${i},`);
}
console.log("FINAL");