// Para poder introducir información por teclado montamos el programa leer.js
// const es una constante que no se puede variar
const read = require('/home/node/leer.js');

// Solicite al usuario un número que represente el mes e imprima su nombre, hacerlo con array.
let mes = 0;

let nomMes = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
let cantDias = [31,28,31,30,31,30,31,31,30,31,30,31];

mes = Number(read("Ingrese número del mes.: "));

for(let i = 0; i < nomMes.length; i++){
    if i = mes-1{
        console.log('El mes tecleado es: ' + ${nomMes[i]});
    }
}
