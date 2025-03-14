// Para poder introducir información por teclado montamos el programa leer.js
// const es una constante que no se puede variar
const read = require('../leer.js');
// definimos variables con let, son constantes que no necesitan definir
let num;
// mostrar por pantalla la peticion del dato num, que es un numero
num = Number(read("Ingrese número:"));
// condicional: si es menor que cero lo convierto a entero
if (num < 0) {
    num = num * -1;
// en este caso no hace falta el else pero lo pongo para saber como va
} else {
    num = num
}
// para que salga por pantalla
console.log("|" + num + "|");
// otra forma de hacerlo
console.log(`|${num}| = ${num}`);
