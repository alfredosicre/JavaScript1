// Para poder introducir información por teclado montamos el programa leer.js
// const es una constante que no se puede variar
const read = require('/home/node/leer.js');

// Modifique el programa anterior para que imprima el perímetro del cuadrado de la siguiente
// manera:
// ****
// *  *
// *  *
// ****

let lado = Number(read("Introduzca el lado de un cuadrado.: "));

for (let i = 1; i <= lado; i++){ // primera linea
    for(let j = 1; j <= lado; j++){ // completa la linea con las columnas
        if (i == 1 || i == lado || j == 1 || j == lado){
            process.stdout.write(`*`);
        }else{
            process.stdout.write(` `);
        }
    } 
console.log()  
}
console.log() // sato de página
console.log("FINAL");
