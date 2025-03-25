// Para poder introducir información por teclado montamos el programa leer.js
// const es una constante que no se puede variar
const read = require('/home/node/leer.js');

// Realizar el juego “Adivina número”. El ordenador debe generar un número “secreto”
// aleatorio con las siguientes características:
// - Debe tener 4 dígitos diferentes
// - No puede comenzar en 0
// El usuario debe adivinarlo, para ello irá ingresando números de 4 cifras y el programa le
// indicará la cantidad de dígitos correctos y la cantidad de dígitos regulares. Un dígito es
// correcto cuando está en la posición que le corresponde y es regular si está en el número
// secreto, pero en otra posición.

// ===============================================================================
function generarNumeroSecreto() {
    let numeroSecreto = '';
    let digitosUsados = new Set(); // un Set no permite que haya elementos duplicados

    // Generar el primer dígito (no puede ser 0)
    let primerDigito = Math.floor(Math.random() * 9) + 1; // Un número entre 1 y 9
    numeroSecreto += primerDigito;
    digitosUsados.add(primerDigito);

    // Generar los siguientes tres dígitos, asegurándonos de que no se repitan
    while (numeroSecreto.length < 4) {
        let digito = Math.floor(Math.random() * 10); // Un número entre 0 y 9
        if (!digitosUsados.has(digito)) { // (*) si el digito no esta presente en el set, entonces me añade digito a numeroSecreto
            numeroSecreto += digito; // El operador += concatena el digito al final de la cadena numeroSecreto. Es decir, el digito se va agregando uno tras otro para formar una cadena secreta.
            digitosUsados.add(digito); // se añade digito al set digitosUsados
            
        }
    }
    
    return numeroSecreto;
}

main();
function main(){

//console.log(); // linea en blanco
//console.log("El número generado por el ordenador es: " + "<" + generarNumeroSecreto() + ">"); // nos muestra en pantalla el numero generado
console.log(); // linea en blanco

let numIngresado = []; // almacenamos los numeros ingresados para despues comparar con numeroSecreto
let numSecreto01 = [];
let numSecreto02 = 0, numIngresado02 = 0;
numSecreto02 = generarNumeroSecreto(); // almacenamos el numero secreto en numSecreto02
console.log("El número generado por el ordenador es: " + "<" + numSecreto02 + ">");

for (let i = 1; numSecreto02 != 0; i++){ // introduzco cada digito de numSecreto02 en la tabla numSecreto01
    let resto = numSecreto02 % 10;
    console.log(`Número: ${resto}`);
    numSecreto01[i] = resto;
    numSecreto02 = Math.floor(numSecreto02 / 10);
}
let correcto = true, buenos = 0, regulares = 0;

do{

    let numI = Number(read("Ingrese un número de 4 dígitos : "));
    numIngresado02 = numI;
    for (let i = 1; numIngresado02 != 0; i++){ // introduzco cada digito de numI en la tabla numIngresado
        let resto = numIngresado02 % 10;
        console.log(`Número: ${resto}`);
        numIngresado[i] = resto;
        numIngresado02 = Math.floor(numIngresado / 10);
    }

    for (let i = 0; i < numIngresado.length; i++) {
        for(let j = 0; j < numSecreto01; j++){
            console.log("numero ingresado: " + numIngresado);
            console.log("numero secreto: " + numSecreto01);
            console.log("buenos: " + buenos);
                if (numSecreto01[j] == numIngresado[i]){
                    buenos ++;
                    
                }
        }
        
    }
    console.log("numero ingresado: " + numIngresado);
    console.log("numero secreto: " + numSecreto01);
    console.log("buenos: " + buenos);

} while(correcto);
}


// has() verifica si un valor está presente en el Set
// console.log(digitosUsados.has(digito)); si el digito esta en el set nos da true, sino nos da false

// *
//if (!digitosUsados.has(digito)):
//digitosUsados es un Set, que almacena valores únicos.
//digitosUsados.has(digito) verifica si el Set contiene el valor digito.
//El operador ! niega la condición, por lo que esta parte de la instrucción verifica si el digito no está presente en el Set. Si es cierto que el dígito aún no ha sido agregado al conjunto, entonces se ejecuta el bloque de código dentro del if.
//numeroSecreto += digito;:
//Si el dígito no está presente en el conjunto digitosUsados, se agrega el digito a la variable numeroSecreto.
//El operador += concatena el digito al final de la cadena numeroSecreto. Es decir, el digito se va agregando uno tras otro para formar una cadena secreta.
//digitosUsados.add(digito);:
//Después de agregar el digito a numeroSecreto, el mismo digito se agrega al Set digitosUsados para registrar que ya ha sido usado. Esto garantiza que no se vuelva a agregar el mismo dígito a numeroSecreto más adelante.
