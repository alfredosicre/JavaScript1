// Para poder introducir información por teclado montamos el programa leer.js
// const es una constante que no se puede variar
const read = require('../leer.js');

// lectura con valor centinela. En este caso cuando num < 0 sale del bucle.
// el programa debe mostrar la suma total de los datos introducidos

let num = Number(read("Ingrese número: "));
// definimos el acumulador
let acum = 0, prod = 1, cont = 0;

while (num > 0){
    // proceso
    console.log(num);
    acum += num;
    prod *= num;
    cont++;
    console.log(acum);
    console.log(prod);

    //Introducimos siguiente número.
    num = Number(read("Ingrese número: "));
}

//mostramos por pantalla.
console.log(`Has ingresado ${cont} números`)
console.log(`La suma de los números introducidos es: ${acum}`)
console.log(`El producto de los números introducidos es: ${prod}`)
console.log("FINAL");