// Para poder introducir información por teclado montamos el programa leer.js
// const es una constante que no se puede variar
const read = require('/home/node/leer.js');


let num01 = 0, positivo = 0, negativo = 0;
let num = Number(read("Ingrese cantidad de números a procesar: "));

// Siguiendo la misma metodología de carga, calcular la cantidad de valores >= 0 y la cantidad
// menores que 0.

for (let i = 1; i <= num; i++){

    num01 = Number(read(`Ingrese ${i} número: `));
    if (num01 >= 0){
<<<<<<< HEAD
        positivo = positivo + 1;
    }else{
        negativo = negativo + 1;
=======
        positivo++; // sumamos 1 a positivo
    }else{
        negativo++; // sumamos 1 a negativo
>>>>>>> 4fe10bdc00cedf40e5a3b44c9504285a0566c880
    }
}
console.log("Cantidad de positivos: " + positivo);
console.log("Cantidad de negativos: " + negativo);
console.log("FINAL");