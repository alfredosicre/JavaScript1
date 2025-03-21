// Para poder introducir información por teclado montamos el programa leer.js
// const es una constante que no se puede variar
const read = require('/home/node/leer.js');

// Calculadora de 4 operaciones. El usuario ingresa dos números y un carácter (+, -, *, / ) y el
// programa debe mostrar la operación y su resultado.
// Por ejemplo:
// Ingrese valor: 12.5
// Ingrese valor: 2
// Ingrese operación: -
// 12.5 – 2 = 10.5

let num01 = Number(read("Ingrese el primer número.: "));
let num02 = Number(read("Ingrese el segundo número: "));
let total;
let operacion = read("Ingrese tipo de operación (+, -, *, /): ");

if (operacion == "+"){
        total = num01 + num02;
}
if (operacion == "-"){
    total = num01 - num02;
}
if (operacion == "*"){
    total = num01 * num02;
}
if (operacion == "/"){
    total = num01 / num02;
}

process.stdout.write(`${num01} ${operacion} ${num02} = ${total}`);
console.log()
console.log("FINAL");
