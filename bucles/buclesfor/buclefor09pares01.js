// Para poder introducir información por teclado montamos el programa leer.js
// const es una constante que no se puede variar
const read = require('/home/node/leer.js');

// Escribir un programa que imprima todos los números pares incluidos en un rango. Los
// extremos del rango se le pidan al usuario. Los extremos deben incluirse.
// Ejemplo:
// Ingresando 1 y 8, debe imprimir: 2 4 6 8

let desde = Number(read("Ingrese número desde: "));
let hasta = Number(read("Ingrese número hasta: ")); 

if (desde % 2 != 0){
<<<<<<< HEAD
    desde ++;
}
for (let i = desde; i <= hasta; i+=2){
=======
    desde ++; // sumamos 1 a desde si es impar para que comience el for por par
}
for (let i = desde; i <= hasta; i+=2){ // a i le sumamos 2 (i+=2) para que vaya de par en par
>>>>>>> 4fe10bdc00cedf40e5a3b44c9504285a0566c880
    process.stdout.write(`${i},`);
}
console.log("FINAL");