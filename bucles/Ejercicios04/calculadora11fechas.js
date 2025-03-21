// Para poder introducir información por teclado montamos el programa leer.js
// const es una constante que no se puede variar
const read = require('/home/node/leer.js');

// Solicitar una fecha (día, mes, año) y validar si es una fecha correcta sin contemplar años
// bisiestos, es decir, no se puede ingresar 29 2 xxxx.

let dia = 0, mes = 0, anio = 0;
let correcto = true

do {  

dia = Number(read("Ingrese  día.: "));
mes = Number(read("Ingrese  mes.: "));
anio = Number(read("Ingrese año.: "));

if(mes == 2 && (dia < 1 || dia > 28)){
        console.log("Fecha MAL introducida, repita de nuevo... ");
}else{
        correcto = false;

}
console.log();
} while (correcto);

console.log()
process.stdout.write(`La fecha introducida es: ${dia}/${mes}/${anio}`);
console.log();
console.log("FINAL");
