// Para poder introducir información por teclado montamos el programa leer.js
// const es una constante que no se puede variar
const read = require('../leer.js');

// Escribir un programa que pida al usuario un número, que representará una cantidad de
// dinero expresada en euros. A continuación, el programa le ofrecerá un menú al usuario en
// el que le preguntará a qué divisa quiere convertir del dinero e imprimirá la conversión. Las
// posibles divisas son las siguientes (se indica el tipo de cambio):
// • Dólares (1 dólar = 0,88 euros)
// • Libra Esterlina (1 Libra = 1,20 euros)
// • Yen (1 yen = 0,0077 euros).
// • Dólares Canadienses (1 dólar C. = 0,71 euros)

// se puede hacer con do...while y switch

let num = Number(read("Ingresa Euros: "))
console.log("Indica el tipo de cambio que quieres: ")
console.log("Dolares ........... = 1");
console.log("Libras  ........... = 2");
console.log("Yenes   ........... = 3");
console.log("Dolares canadienses = 4");
console.log("Salir teclear ..... = 0");
let tipoCambio = 0
tipoCambio = Number(read("Ingresa tipo de cambio > "));

while (tipoCambio != 0){
    // proceso
    if (tipoCambio == 1) {
        let dolares = num / 0.88
        console.log(`La divisa es : ${dolares} dolares`)
    } 
    if (tipoCambio == 2){
        let libras = num / 1.20
        console.log(`La divisa es : ${libras} libras esterlinas`)
    }
    if (tipoCambio == 3){
        let yenes = num / 0.0077
        console.log(`La divisa es : ${yenes} yenes`)
    }
    if (tipoCambio == 4){
        let dolaresCanadienses = num / 0.71
        console.log(`La divisa es : ${dolaresCanadienses} dolares canadienses`)
    }
    //mostramos por pantalla.
    if (tipoCambio != 0 && tipoCambio != 1 && tipoCambio != 2 && tipoCambio != 3 && tipoCambio != 4){
        console.log("¡opción no valida!, intentelo de nuevo...")
        tipoCambio = 0
    }
    //Introducimos siguiente número.
    console.log("Dolares ........... = 1");
    console.log("Libras  ........... = 2");
    console.log("Yenes   ........... = 3");
    console.log("Dolares canadienses = 4");
    console.log("Salir teclear ..... = 0");
        tipoCambio = Number(read("Ingresa tipo de cambio > "));
}
console.log("FINAL");