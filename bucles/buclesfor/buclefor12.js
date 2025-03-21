// Para poder introducir información por teclado montamos el programa leer.js
// const es una constante que no se puede variar
const read = require('/home/node/leer.js');

// Escribir un programa que reciba un número n e imprima los primeros n números
// triangulares, junto con su índice. Los números triangulares se obtienen mediante la suma
// de los números naturales desde 1 hasta el índice n. Por ejemplo, el número triangular de
// índice 4 es 1+2+3+4 = 10.
// Entonces, si se piden los primeros 5 números triangulares, el programa debe imprimir (sin
// los comentarios entre paréntesis):
// 1 – 1 (1)
// 2 – 3 (1+2)
// 3 – 6 (1+2+3)
// 4 – 10 (1+2+3+4)
// 5 – 15 (1+2+3+4+5)

let num = Number(read("Ingrese número a calcular su resultado triangular: "));
let resul = 0;

for (let i = 1; i <= num; i++){
<<<<<<< HEAD
    process.stdout.write(`${i},`);
    resul += i;
=======
    resul += i;
    process.stdout.write(`${i}-${resul}`);
    console.log()
    
>>>>>>> 4fe10bdc00cedf40e5a3b44c9504285a0566c880
}
console.log(`La suma de la triangulación es: ${resul}`);
console.log("FINAL");
