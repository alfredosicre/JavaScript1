// Para poder introducir información por teclado montamos el programa leer.js
// const es una constante que no se puede variar
const read = require('../leer.js');

// definimos variables con let, son constantes que no se necesitan definir
let num01, num02, num03, menor, mayor;

// mostrar por pantalla la peticion del dato num01, num02 y num03, que son numeros
num01 = Number(read("Ingrese el primer número:"));
num02 = Number(read("Ingrese el segundo número:"));
num03 = Number(read("Ingrese el tercer número:"));

// otra manera de calcularlo
let max = Math.max(num01, num02, num03);
let min = Math.min(num01, num02, num03);
console.log(max); 
console.log(min); 

// comprobamos cual es el mayor
if (num01 > num02 && num01 > num03) {
    mayor = num01;
}
if (num02 > num01 && num02 > num03) {
    mayor = num02;
}
if (num03 > num02 && num03 > num01) {
    mayor = num03;
}
// comprobamos cual es el menor
if (num01 < num02 && num01 < num03) {
    menor = num01;
}
if (num02 < num01 && num02 < num03) {
    menor = num02;
}
if (num03 < num02 && num03 < num01) {
    menor = num03;
}
console.log("Número mayor: " + mayor);
console.log("Número menor: " + menor);