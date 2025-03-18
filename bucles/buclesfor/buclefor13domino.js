// Para poder introducir información por teclado montamos el programa leer.js
// const es una constante que no se puede variar
const read = require('/home/node/leer.js');

// Escribir un programa que imprima por pantalla todas las fichas de dominó, de una por
// línea y sin repetir.
// 0 : 0
// 0 : 1 ...

// Para imprimir todas las fichas de dominó
// Recorremos todos los valores posibles para las fichas
for (let i = 0; i <= 6; i++) {
    for (let j = i; j <= 6; j++) {  // El valor j empieza desde i para evitar repeticiones
        console.log(`[${i}|${j}]`);
    }
}
console.log("FINAL");
