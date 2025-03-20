// Para poder introducir información por teclado montamos el programa leer.js
// const es una constante que no se puede variar
const read = require('../leer.js');

// lectura con valor centinela. En este caso cuando num < 0 sale del bucle.

let num = Number(read("Ingrese número: "));

while (num > 0){
    // proceso
    console.log(num);
    //Introducimos siguiente número.
    num = Number(read("Ingrese número: "));
}

//mostramos por pantalla.
console.log("FINAL");