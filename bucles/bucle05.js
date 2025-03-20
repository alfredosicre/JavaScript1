// Para poder introducir información por teclado montamos el programa leer.js
// const es una constante que no se puede variar
const read = require('../leer.js');

//Se solicitará al usuario que ingrese números reales para procesar. Luego de ingresar cada
//número, se le preguntará si quiere ingresar más o no, leyendo la cadena “s” o “n”
//Cuando indique que no ingresa más números, mostrar la cantidad de valores ingresados, el primer
//valor, el último, el mayor y el menor.


let num = Number(read("Ingrese número: "));
// definimos el valor mayor, el valor menor y el 
// y acualizamos mayor y menor al primer num que introducimos
let mayor = num, menor = num;
let cont = 0;
let sino = "s"
let primervalor = num;

while (sino == "s"){
    // proceso
    if (num > mayor) {
        mayor = num;
    } 
    if (num < menor){
        menor = num;
    }
    // numero de veces que introduzco un numero
    cont++;
    

    // Mostrar un cuadro de diálogo para que el usuario ingrese una s para continuar o una n para finalizar
    sino = read("Para ingresar más números teclea s, terminar teclea n:");
    if (sino == "s"){ 
        //Introducimos siguiente número.
        num = Number(read("Ingrese número: "))
    } else{ 
        sino = "n"
    }
}
// conservamos el ultimo valor introducido
let ultimovalor = num
//mostramos por pantalla.
if (mayor && menor > 0){
    console.log(`El número de introducciones por pantalla: ${cont}`)
    console.log(`El número mayor introducido es: ${mayor}`)
    console.log(`El número menor introducido es: ${menor}`)
    console.log("El primer valor introducido es: " + primervalor)
    console.log("Último valor introducido es: " + ultimovalor)
}
console.log("FINAL");