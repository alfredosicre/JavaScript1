// Para poder introducir información por teclado montamos el programa leer.js
// const es una constante que no se puede variar
const read = require('../leer.js');

// Dado un número indefinido de notas obtenidas por alumnos en sus exámenes, mostrar por
// pantalla la nota mayor. (Cuando el usuario ingrese -1 finaliza la carga)

let num = Number(read("Ingrese número: "));
// definimos el contador
let variable = 0

while (num != -1){
    // proceso
    console.log(num);
    if (num > variable) {
        variable = num;
    }
    console.log(variable);
    //Introducimos siguiente número.
    num = Number(read("Ingrese número: "));
}

//mostramos por pantalla.
console.log(`El número mayor introducido es: ${variable}`)
console.log("FINAL");