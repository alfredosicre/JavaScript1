// Para poder introducir información por teclado montamos el programa leer.js
// const es una constante que no se puede variar
const read = require('../leer.js');

// lectura con valor centinela. En este caso cuando num < 0 sale del bucle.
// el programa deberá mostrar los valores introducidos.

let num = Number(read("Ingrese número: "));
// definimos el contador
let cont = 0

while (num > 0){
    // proceso
    console.log(num);
    cont = cont + 1
    // tambien lo podemos poner como: cont++;
    cont++;

    //Introducimos siguiente número.
    num = Number(read("Ingrese número: "));
}

//mostramos por pantalla.
console.log(`Has ingresado ${cont} números`)
console.log("FINAL");