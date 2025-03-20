// Para poder introducir información por teclado montamos el programa leer.js
// const es una constante que no se puede variar
const read = require('../leer.js');

// definimos variables con let, son constantes que no se necesitan definir
let horas, minutos, segundos;
// peticion por pantalla de los datos, que son numeros
horas = Number(read("Ingrese horas:"));
minutos = Number(read("Ingrese minutos:"));
segundos = Number(read("Ingrese segundos:"));
//calculamos los segundos totales
let totalsegundos = (horas * 3600) + (minutos * 60) + segundos;
//mostramos por pantalla los segundos totales
console.log("Seguntos totales: " + totalsegundos + " segundos");