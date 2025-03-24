// Para poder introducir información por teclado montamos el programa leer.js
// const es una constante que no se puede variar
const read = require('../leer.js');

// Realizar el juego “Adivina número”. El ordenador debe generar un número “secreto”
// aleatorio con las siguientes características:
// - Debe tener 4 dígitos diferentes
// - No puede comenzar en 0
// El usuario debe adivinarlo, para ello irá ingresando números de 4 cifras y el programa le
// indicará la cantidad de dígitos correctos y la cantidad de dígitos regulares. Un dígito es
// correcto cuando está en la posición que le corresponde y es regular si está en el número
// secreto, pero en otra posición.

//El ordenador genera un número aleatorio entre 0 y 100:
let numero = Math.floor(Math.random() * 1001);
// enseño el numero aleatorio para saber cual es
console.log(`El ordenador dice: ${numero}`);

//do {
//    // proceso
    
//    //Contestamos si es cierto el numero pensado por mi o no (0=acertado, 1 el valor es mayor, -1 el valor es menor).
//    num = Number(read("Respuesta (0 / 1 / -1): "))

//    if (num == 1) {
//        console.log(`El numero pensado por el ordenador ${numero} es mayor que el numero pensado por mi`);
//        numero = numero - 1
//    } 
//    if (num == -1){
//        console.log(`El numero pensado por el ordenador ${numero} es menor que el numero pensado pensado por mi`);
//        numero = numero + 1
//    } 
//    console.log(`El número pensado es: ${numero}`);
    
//} while (num != 0)

//mostramos por pantalla.
//if (num == 0){
//    console.log(`El número pensado es: ${numero}`);
//}
//}
//console.log("FINAL");
