// Para poder introducir información por teclado montamos el programa leer.js
// const es una constante que no se puede variar
const read = require('/home/node/leer.js');

// Solicite al usuario un número que represente el mes e imprima su nombre.
let mes = 0;
let correcto = true

do {  
let nombreMes = " ";
mes = Number(read("Ingrese número del mes.: "));
switch(mes){
    case 1: nombreMes = 'Enero';break;
    case 2: nombreMes = 'Febrero';break;
    case 3: nombreMes = 'Marzo';break;
    case 4: nombreMes = 'Abril';break;
    case 5: nombreMes = 'Mayo';break;
    case 6: nombreMes = 'Junio';break;
    case 7: nombreMes = 'Julio';break;
    case 8: nombreMes = 'Agosto';break;
    case 9: nombreMes = 'Septiembre';break;
    case 10: nombreMes = 'Octubre';break;
    case 11: nombreMes = 'Noviembre';break;
    case 12: nombreMes = 'Diciembre';break;
}
process.stdout.write(`El mes introducido es ${nombreMes}`);
if (mes >12 || mes < 1){
    correcto = false;
    console.log("¡¡¡Número de mes mal introducido!!!  ADIOS...")
}
console.log()
} while (correcto);
console.log()
console.log("FINAL");
