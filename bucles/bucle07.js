// Para poder introducir información por teclado montamos el programa leer.js
// const es una constante que no se puede variar
const read = require('../leer.js');

//Realizar un programa que adivine el número (entre 0 y 100) que ha pensado el usuario. En
//cada paso, el programa propone un número y el usuario debe contestar, introduciendo su
//contestación como dato, si ha acertado, o bien si el número que ha propuesto el
//ordenador es mayor o es menor que el que tenía pensado. Por ejemplo, ingresando:
// 0 –> Acierto
// 1 –> El valor propuesto es mayor
// -1 –> El valor propuesto es Menor

//El ordenador genera un número aleatorio entre 0 y 100:
let numero = Math.floor(Math.random() * 101);
// enseño el numero aleatorio para saber cual es
console.log(`El ordenador dice: ${numero}`);

do {
    // proceso
    
    //Contestamos si es cierto el numero pensado por mi o no (0=acertado, 1 el valor es mayor, -1 el valor es menor).
    num = Number(read("Respuesta (0 / 1 / -1): "))

    if (num == 1) {
        console.log(`El numero pensado por el ordenador ${numero} es mayor que el numero pensado por mi`);
        numero = numero - 1
    } 
    if (num == -1){
        console.log(`El numero pensado por el ordenador ${numero} es menor que el numero pensado pensado por mi`);
        numero = numero + 1
    } 
    console.log(`El número pensado es: ${numero}`);
    
} while (num != 0)

//mostramos por pantalla.
if (num == 0){
    console.log(`El número pensado es: ${numero}`);
}
console.log("FINAL");