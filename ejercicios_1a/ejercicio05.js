// Para poder introducir información por teclado montamos el programa leer.js
// const es una constante que no se puede variar
const read = require('../leer.js');

// definimos variables con let, son constantes que no se necesitan definir
let radio, volumen;
// mostrar por pantalla la peticion del dato radio, que es un numero
radio = Number(read("Ingrese el radio:"));
// calculo con la formula el volumen:
volumen = 4/3 * Math.PI * Math.pow(radio,3);
// para que salga por pantalla
console.log("|" + volumen + "|");