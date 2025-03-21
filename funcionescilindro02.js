// Para poder introducir información por teclado montamos el programa leer.js
// const es una constante que no se puede variar
const read = require('./leer.js');

main();

function main(){
    // let radio = Number(read('Íngrese radio de la base:'));
    let base = Number(read('Íngrese la base:'));
    let expo = Number(read('Ingrese exponente:'));
    let resul = exponente(base,expo);
    console.log('Resultado: ' + resul);
}

function exponente(base,expo){
    let acum = base;
    for(let i = 1; i<expo; i++){
        acum *= base;
    }
    return acum;
}