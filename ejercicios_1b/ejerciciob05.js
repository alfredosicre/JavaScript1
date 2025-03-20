// Para poder introducir información por teclado montamos el programa leer.js
// const es una constante que no se puede variar
const read = require('../leer.js');

// peticion por pantalla de los datos, que son numeros
let anio = Number(read("Ingrese el año: "));

//calculamos si es divisible por 4 por 100 y por 400
// (Si anio es divisible por 400) o (si anio es divisible por 4 y anio no es divisible por 0), entonces... 

if ((anio % 400 == 0) || (anio % 4 == 0 && anio % 100 != 0)) {
        console.log(`El año ${anio} es bisiesto.`);
    } else { 
        console.log(`El año ${anio} no es bisiesto.`);
    }