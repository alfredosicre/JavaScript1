// Para poder introducir información por teclado montamos el programa leer.js
// const es una constante que no se puede variar
const read = require('./leer.js');

main();

function main(){
    let radio = Number(read('Íngrese radio de la base:'));
    let h = Number(read('Ingrese altura:'));
    let volumen = areaCirculo(radio) * h;
    console.log('Volumen: ' + volumen);
}

function areaCirculo(radio){
    return Math.PI * radio ** 2;
}