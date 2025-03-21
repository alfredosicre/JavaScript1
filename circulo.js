// main.js
const read = require('./leer');

console.log(`\n\n`);
console.log(`AREA Y PERIMETRO DEL CIRCULO`);
console.log(`----------------------------`);
let radio = read("Radio: ");
let area = Math.PI * radio * radio;
let perimetro = 2 * Math.PI * radio;
console.log(`Area: ${area}`);
console.log(`Perimetro: ${perimetro}`);
console.log(`\n\n`);