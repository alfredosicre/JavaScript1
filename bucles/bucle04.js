// Para poder introducir información por teclado montamos el programa leer.js
// const es una constante que no se puede variar
const read = require('../leer.js');

//Dado un número indefinido de números enteros positivos y finalizando la carga con un 0 o
//un negativo, obtener el siguiente informe:
//Cantidad de valores procesados: XXX cont
//Sumatoria de los valores: XXX sumatorio
//Media de los valores: XXX media
//Valor mayor: XXX mayor
//Valor menor: XXX menor
//Cantidad de valores pares: XXX pares
//Cantidad de valores impares: XXX impares


let num = Number(read("Ingrese número: "));
// definimos el valor mayor, el valor menor y el contador de veces que introducimos un numero
// y acualizamos mayor y menor al primer num que introducimos
let mayor = num, menor = num
let cont = 0, sumatorio = 0, media = 0;

while (num > 0){
    // proceso
    if (num > mayor) {
        mayor = num;
    } 
    if (num < menor){
        menor = num;
    }
    // numero de veces que introduzco un numero
    cont++;
    // sumatorio de los valores tecleados por pantalla
    sumatorio +=num;
    //calculamos si es par o no dividiendo por 2
    let resto = num % 2;

    if (resto == 0) {
        console.log("Número par: " + num);

    } else{
        console.log("Número impar: " + num);

    }

    //Introducimos siguiente número.
    num = Number(read("Ingrese número: "));
}
// media de los valores
media = sumatorio / cont;

//mostramos por pantalla.
if (mayor && menor > 0){
    console.log(`El número de introducciones por pantalla: ${cont}`)
    console.log(`El número mayor introducido es: ${mayor}`)
    console.log(`El número menor introducido es: ${menor}`)
    console.log(`El sumatorio de los importes tecleados es: ${sumatorio}`)
    console.log(`La media de los valores tecleados es: ${media}`)
}
console.log("FINAL");