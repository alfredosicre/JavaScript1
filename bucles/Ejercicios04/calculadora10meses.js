// Para poder introducir información por teclado montamos el programa leer.js
// const es una constante que no se puede variar
const read = require('/home/node/leer.js');

//Solicite al usuario un número que represente el mes e imprima su nombre y la cantidad de
// días que tiene (no contemplar años bisiestos).

let mes = 0;
let correcto = true

do {  
let nombreMes = " ";
let numero = 0;
mes = Number(read("Ingrese número del mes.: "));
switch(mes){
    case 1: nombreMes = 'Enero';
            break;
    case 2: nombreMes = 'Febrero';
            break;
    case 3: nombreMes = 'Marzo';
            break;
    case 4: nombreMes = 'Abril';
            break;
    case 5: nombreMes = 'Mayo';
            break;
    case 6: nombreMes = 'Junio';
            break;
    case 7: nombreMes = 'Julio';
            break;
    case 8: nombreMes = 'Agosto';
            break;
    case 9: nombreMes = 'Septiembre';
            break;
    case 10: nombreMes = 'Octubre';
            break;
    case 11: nombreMes = 'Noviembre';
            break;
    case 12: nombreMes = 'Diciembre';
            break;
}
if(mes == 2){
    numero = 28;
}else {
    if(mes==1 || mes==3 || mes==5 || mes==7 || mes==8 || mes==10 || mes==12){
        numero = 31;
}   else{
        numero = 30;
}
}

if (mes >12 || mes < 1){
    correcto = false;
    nombreMes = "NINGUNO";
    numero = 0;
    process.stdout.write(`El mes introducido es ${nombreMes} y los dias del mes son: ${numero}`);
    console.log();
    console.log("¡¡¡Número de mes mal introducido!!!  ADIOS...");
}else{
        process.stdout.write(`El mes introducido es ${nombreMes} y los dias del mes son: ${numero}`);
}

console.log()
} while (correcto);
console.log()
console.log("FINAL");
