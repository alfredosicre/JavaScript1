// Para poder introducir información por teclado montamos el programa leer.js
// const es una constante que no se puede variar
const read = require('../leer.js');

//El programa generará un número aleatorio entre 0 y 100 y le pedirá al usuario que lo
//adivine. Cuando el usuario ingrese el número para ver si acertó, el programa le indicará si
//el número a adivinar es mayor, menor o bien si acertó. Cuando acierte, finaliza.

//Para generar un número aleatorio entre 0 y 100:
let numero = Math.floor(Math.random() * 101);
// enseño el numero aleatorio para saber cual es
console.log(`                El numero aleatorio es: ${numero}`);

let num = Number(read("He generado un número al azar, Ingrese un número para adivinarlo: "));

while (num != numero){
    // proceso
    if (num > numero) {
        console.log(`El numero ingresado ${num} es mayor que el numero pensado`);
    } 
    if (num < numero){
        console.log(`El numero ingresado ${num} es menor que el numero pensado`);
    }
    //Introducimos siguiente número.
    num = Number(read("He generado un número al azar, Ingrese un número para adivinarlo: "))
    
}
//mostramos por pantalla.
if (num == numero){
    console.log(`El número pensado es: ${numero}`);
    console.log(`El número acertado es: ${num}`);
}
console.log("FINAL");