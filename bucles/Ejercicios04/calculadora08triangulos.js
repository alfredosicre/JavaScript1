// Para poder introducir información por teclado montamos el programa leer.js
// const es una constante que no se puede variar
const read = require('/home/node/leer.js');

// Escriba un programa que imprima los siguientes patrones por separado, uno debajo del
// siguiente, una vez que el usuario ingresó el tamaño, por ejemplo 5. Utilice ciclos for para
// generar los patrones. Todos los asteriscos deberán ser impresos por un solo enunciado print
// de la forma print(‘*’). Sugerencia: los dos últimos patrones requieren que cada línea
// comience con un número correcto de espacios en blanco: print(‘ ’).
// * ***** ***** *
// ** **** **** **
// *** *** *** ***
// **** ** ** ****
// ***** * * *****

let lado = Number(read("Introduzca el lado de un cuadrado.: "));

// Primer triangulo:

for (let i = 1; i <= lado; i++){ // primera linea
    for(let j = 1; j <= lado; j++){ // completa la linea con las columnas
        if (i >= j){
            process.stdout.write(`*`);
        }else{
            process.stdout.write(` `);
        }
    } 
console.log()  
}
console.log()
// Segundo triangulo:

for (let i = 1; i <= lado; i++){ // primera linea
    for(let j = 1; j <= lado; j++){ // completa la linea con las columnas
        if (i <= j){
            process.stdout.write(`*`);
        }else{
            process.stdout.write(` `);
        }
    } 
console.log()  
}
console.log()
// Tercer triangulo:

for (let i = 1; i <= lado; i++){ // primera linea
    for(let j = 1; j <= lado; j++){ // completa la linea con las columnas
        if (j <= lado-i+1 ){
            process.stdout.write(`*`);
        }else{
            process.stdout.write(` `);
        }
    } 
console.log()  
}

// Cuarto triangulo:

for (let i = 1; i <= lado; i++){ // primera linea
    for(let j = 1; j <= lado; j++){ // completa la linea con las columnas
        if (j >= lado-i+1 ){
            process.stdout.write(`*`);
        }else{
            process.stdout.write(` `);
        }
    } 
console.log()  
}

console.log() // sato de página
console.log("FINAL");
