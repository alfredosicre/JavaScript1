// Para poder introducir información por teclado montamos el programa leer.js
// const es una constante que no se puede variar
const read = require('../leer.js');

// peticion por pantalla de los datos, que son numeros
let num = Number(read("Ingrese número: "));

//calculamos si es par o no dividiendo por 2
let resto = num % 2;

if (resto == 0) {console.log("Número par: " + num)}
    
else{console.log("Número impar: " + num)};
