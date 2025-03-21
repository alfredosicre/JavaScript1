// Para poder introducir información por teclado montamos el programa leer.js
// const es una constante que no se puede variar
const read = require('/home/node/leer.js');

// Escriba un programa que pida un número entero mayor que cero y que escriba sus
// divisores.

let num = Number(read("Ingrese número entero positivo: "));

if (num > 0){

<<<<<<< HEAD
    for (let i = 1; i <= num ; i++) {
        
        if(num % i == 0){ // comprobamos que numero es divisor - num/i=0
        process.stdout.write(`${i},`);
=======
    for (let i = 1; i <= num / 2 ; i++) { // num se divide entre 2 porque no existe un divisor a cero a partir de la mitad del numero
        
        if(num % i == 0){ // comprobamos que numero es divisor (num/i=0)
        process.stdout.write(`${i}  `);
>>>>>>> 4fe10bdc00cedf40e5a3b44c9504285a0566c880
        }
    }
}
console.log("FINAL");
