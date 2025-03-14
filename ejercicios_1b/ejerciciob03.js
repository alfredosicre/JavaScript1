// Para poder introducir información por teclado montamos el programa leer.js
// const es una constante que no se puede variar
const read = require('../leer.js');

// definimos variables con let, son constantes que no se necesitan definir
let horas1, minutos1, segundos1, horas2, minutos2, segundos2;
// peticion por pantalla de los datos, que son numeros
horas1 = Number(read("Ingrese horas 1:"));
minutos1 = Number(read("Ingrese minutos 1:"));
segundos1 = Number(read("Ingrese segundos 1:"));

horas2 = Number(read("Ingrese horas 2:"));
minutos2 = Number(read("Ingrese minutos 2:"));
segundos2 = Number(read("Ingrese segundos 2:"));

//calculamos los segundos totales de cada hora
let totalsegundos1 = (horas1 * 3600) + (minutos1 * 60) + segundos1;
let totalsegundos2 = (horas2 * 3600) + (minutos2 * 60) + segundos2;
// sumo los segundos totales de las dos horas
let totalsegundos = totalsegundos1 + totalsegundos2;

//calculamos las horas enteras de totalsegundos
let hora = Math.floor (totalsegundos/3600);
// en hora_resto introduzco el resto de totalsegundos/3600
let hora_resto = totalsegundos % 3600;

// calculo los minutos enteros de hora_resto
let min = Math.floor (hora_resto / 60);
// calculamos el resto de segundos
let min_resto = totalsegundos % 60;
//mostramos por pantalla
console.log("Horas totales: " + hora + " Minutos totales: " + min + " Segundos totales: " + min_resto);