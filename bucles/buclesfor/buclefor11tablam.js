// Para poder introducir información por teclado montamos el programa leer.js
// const es una constante que no se puede variar
const read = require('/home/node/leer.js');

// Escribir un programa que imprima las tablas del 1 al 9.

for (let i = 1; i <= 9; i++){
    
    for (let j = 1; j <= 9; j++){
        let resul = i * j;
        process.stdout.write(`${resul},`);
        resul == 0;
    }
    console.log();
}
console.log("FINAL");