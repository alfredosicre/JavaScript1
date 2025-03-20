// Para poder introducir información por teclado montamos el programa leer.js
// const es una constante que no se puede variar
const read = require('/home/node/leer.js');

// Solicite al usuario un número que represente el mes e imprima su nombre.

let mes = Number(read("Ingrese número del mes.: "));
let nombreMes;

switch(mes){
    case 1: nombreMes = 'Enero';break;
    case 1: nombreMes = 'Febrero';break;
    case 1: nombreMes = 'Marzo';break;
    case 1: nombreMes = 'Abril';break;
    case 1: nombreMes = 'Mayo';break;
    case 1: nombreMes = 'Junio';break;
    case 1: nombreMes = 'Enero';break;
    case 1: nombreMes = 'Enero';break;
    case 1: nombreMes = 'Enero';break;
    case 1: nombreMes = 'Enero';break;
    case 1: nombreMes = 'Enero';break;
    case 1: nombreMes = 'Enero';break;

}

process.stdout.write(`El mes introducido es ${nombreMes}`);
console.log()
console.log("FINAL");
