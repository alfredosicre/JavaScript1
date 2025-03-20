// Para poder introducir información por teclado montamos el programa leer.js
// const es una constante que no se puede variar
const read = require('../leer.js');

// definimos variables con let, son constantes que no se necesitan definir
let hora, min, segundos, hora_resto, min_resto;
// peticion por pantalla de los datos, que son numeros
segundos = Number(read("Ingrese segundos:"));
//calculamos las horas enteras
hora = Math.floor (segundos/3600);
// en hora introduzco el resto de segundos/3600
hora_resto = segundos % 3600;

min = Math.floor (hora_resto / 60);
min_resto = segundos % 60
//mostramos por pantalla
console.log("Horas: " + hora + " minutos: " + min + " segundos: " + min_resto);