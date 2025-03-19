const read = require('../leer.js');

// El usuarios ingresará un número indeterminado de valores positivos.
// Al ingresar 0 o un negativo, finaliza la carga de datos.
// El programa deberá mostrar la cantidad de valores ingresados.

// Lectura con valor centinela

console.log("PROCESO DE VALORES POSITIVOS");
console.log("Ingrese valores positivos, para terminar la carga ingrese un valor no positivo");

let valor;
let cont = 0;

// ingresar o leer el primer dato
valor = Number(read('Ingrese valor: '));

while (valor > 0) {
    //PROCESO
    console.log(valor);
    //cont = cont + 1;
    cont++;// operador de incremento o incremental

    //leer siguiente
    valor = Number(read('Ingrese valor: '));
}

console.log(`Has ingresado ${cont} valores`);
console.log("FIN");

