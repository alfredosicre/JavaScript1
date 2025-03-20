// Para poder introducir información por teclado montamos el programa leer.js
// const es una constante que no se puede variar
const read = require('/home/node/leer.js');


let num01 = 0, mayor, menor;
let num = Number(read("Ingrese cantidad de números a procesar: "));

// De una lista de n números ingresados por teclado, imprimir el mayor y el menor valor.

for (let i = 1; i <= num; i++){

    num01 = Number(read(`Ingrese ${i} número: `));
    if (i == 1){
        menor = num01;
        mayor = num01;
    }
    if (num01 > mayor){
        mayor = num01;
    }else{
        menor = num01;
    }

}
console.log("Menor de los números: " + menor);
console.log("Mayor de los números: " + mayor);
console.log("FINAL");