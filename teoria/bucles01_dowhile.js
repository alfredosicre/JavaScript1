// do - while

const read = require('../leer.js');

let nroDia;

do {
    nroDia = Number(read('Ingrese nro de día, 1 al 7: '));
} while (nroDia < 1 || nroDia > 7);

console.log(nroDia);