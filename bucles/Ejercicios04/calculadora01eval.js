// Para poder introducir información por teclado montamos el programa leer.js
// const es una constante que no se puede variar
const read = require('/home/node/ALFREDO/JavaScript/leer.js');

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

let oper = num01 + operacion + num02;
console.log();
console.log(oper);
let resul = eval(oper);
console.log(`El resultado de la operación es: ${resul}`);
console.log("FINAL");


// si yo meto un operador mas y un numero mas ------------------------------------------------------------
oper = resul;
console.log(oper);

let operacion2 = read("Ingrese tipo de operación (+, -, *, /): ");
let num03 = Number(read("Ingrese el tercer número: "));
let total2 = 0;

if (operacion2 == "+"){
        total2 = resul + num03;
}
if (operacion2 == "-"){
        total2 = resul - num03;
}
if (operacion2 == "*"){
        total2 = resul * num03;
}
if (operacion2 == "/"){
        total2 = resul / num03;
}
process.stdout.write(`${resul} ${operacion2} ${num03} = ${total2}`);

let oper2 = resul + operacion2 + num03;
console.log();
console.log(oper2);
resul = eval(oper2);
console.log(`El resultado de la operación es: ${resul}`);
