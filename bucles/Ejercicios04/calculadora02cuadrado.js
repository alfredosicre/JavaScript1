// Para poder introducir información por teclado montamos el programa leer.js
// const es una constante que no se puede variar
const read = require('/home/node/leer.js');

// Escriba un programa que lea el lado de un cuadrado por teclado y a continuación lo
// muestre por pantalla en forma de asteriscos. Por ejemplo, ingresado el valor 4 la salida
// será:
// ****
// ****
// ****
// ****

let lado = Number(read("Introduzca el lado de un cuadrado.: "));

for (let i = 1; i <= lado; i++){
    for(let j = 1; j <= lado; j++){
        process.stdout.write(`*`);   
    }
console.log()    
}
console.log() // sato de página
console.log("FINAL");
