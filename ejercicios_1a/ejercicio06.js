// Para poder introducir información por teclado montamos el programa leer.js
// const es una constante que no se puede variar
const read = require('../leer.js');

// definimos variables con let, son constantes que no se necesitan definir
let num01, num02, suma, resta, producto, division;

// mostrar por pantalla la peticion del dato num01 y num02, que son numeros
num01 = Number(read("Ingrese el primer número:"));
num02 = Number(read("Ingrese el segundo número:"));

// realizo las operaciones
suma = num01 + num02;
resta = num01 - num02;
producto = num01 * num02;
division = num01 / num02;

// para que salga por pantalla
console.log("Número 1: " + num01 + " ; " + "Número 2: " + num02);
// para que salga por pantalla suma
console.log("La suma: " + suma);
// para que salga por pantalla resta
console.log("La resta: " + resta);
// para que salga por pantalla producto
console.log("El producto: " + producto);
// para que salga por pantalla la division
console.log("La división: " + division);
