// Para poder introducir información por teclado montamos el programa leer.js
// const es una constante que no se puede variar
const read = require('../leer.js');

// Dado un número indefinido de notas obtenidas por alumnos en sus exámenes, mostrar por
// pantalla la nota mayor, la nota menor y la cantidad total de notas procesadas. (Cuando el
// usuario ingrese -1 finaliza la carga)


let num = Number(read("Ingrese número: "));
// definimos el valor mayor, el valor menor y el contador de veces que introducimos un numero
// y acualizamos mayor y menor al primer num que introducimos
let mayor = num, menor = num
let cont = 0;

while (num != -1){
    // proceso
    if (num > mayor) {
        mayor = num;
    } 
    if (num < menor){
        menor = num;
    }
    cont++;
    //Introducimos siguiente número.
    num = Number(read("Ingrese número: "));
}

//mostramos por pantalla.
if (mayor && menor != -1){
    console.log(`El número de introducciones por pantalla: ${cont}`)
    console.log(`El número mayor introducido es: ${mayor}`)
    console.log(`El número menor introducido es: ${menor}`)
}
console.log("FINAL");