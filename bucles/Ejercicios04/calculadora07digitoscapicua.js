// Para poder introducir información por teclado montamos el programa leer.js
// const es una constante que no se puede variar
const read = require('/home/node/leer.js');

// Determine si un valor entero ingresado por teclado es un palíndromo (capicúa).

let num = Number(read("Ingrese número : "));
let resto = 0, entrada = num, salida= 0; // igualamos entrada a num para al final hacer la comparacion
console.log();
process.stdout.write(`Número introducido: ${entrada}  `);
console.log();
process.stdout.write(`Número inverso: `);

for (let i = 1; num != 0; i++){
    resto = num % 10;
    process.stdout.write(`${resto}`);
    num = Math.floor(num / 10); // dividimos el numero introducido para calcular el siguiente resto
    salida = salida * 10 + resto; // calculamos la salida al contrario que los restos de la entrada para luego comparar
}
console.log()
if (entrada == salida){
    console.log("El número inverso al número ingresado SI es palíndromo");
}else{
    console.log("El número inverso al número ingresado NO es palíndromo");
}
console.log()
console.log("FINAL");