// Para poder introducir información por teclado montamos el programa leer.js
// const es una constante que no se puede variar
const read = require('../leer.js');

// peticion por pantalla de los datos, que son numeros
let ax = Number(read("Teclea el punto Ax: "));
let ay = Number(read("Teclea el punto Ay: "));
let bx = Number(read("Teclea el punto Bx: "));
let by = Number(read("Teclea el punto By: "));

// segun la formula calculamos la distancia -> Math.sqrt es para calcular la raiz cuadrada y expresion () ** numero, es la expresion elevado a numero.

let distancia = Math.sqrt((bx-ax) ** 2 + (by-ay) ** 2);

console.log(`Esta es la distancia: ${distancia} entre los dos puntos.`);
