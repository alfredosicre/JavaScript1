// Para poder introducir información por teclado montamos el programa leer.js
// const es una constante que no se puede variar
const read = require('../leer.js');

// Función para saber si un año es bisiesto
function esBisiesto(año) {
    if ((año % 4 == 0 && año % 100 != 0) || (año % 400 == 0)) {
        return true;
    }
    return false;
}

// Función para calcular el día de la semana de una fecha
function calcularDiaSemana(dia, mes, año) {
    // Día inicial de año 1 (1 de enero) es martes (día 2)
    let diaSemana = 3; // 0 = Domingo, 1 = Lunes, 2 = Martes, ..., 6 = Sábado

    // Días en cada mes (febrero puede ser 28 o 29 dependiendo si es bisiesto)
    const diasPorMes = [31, esBisiesto(año) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
    // Sumar los días de los meses anteriores al mes dado
    for (let i = 0; i < mes - 1; i++) {
        diaSemana += diasPorMes[i];
    }

    // Sumar los días del mes actual (día ingresado)
    diaSemana += dia - 1; // Restamos 1 porque el 1 de enero ya cuenta como día 0
    
    // Calcular el día de la semana usando módulo 7
    diaSemana = diaSemana % 7;

    // Array con los nombres de los días de la semana
    const diasDeLaSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    
    return diasDeLaSemana[diaSemana];
}

// Ejemplo de uso:
const dia = Number(read ("Introduce el día (1-31):"));
const mes = Number(read("Introduce el mes (1-12):"));
const año = Number(read("Introduce el año:"));

const diaSemana = calcularDiaSemana(parseInt(dia), parseInt(mes), parseInt(año));
console.log(`El día de la semana para la fecha ${dia}/${mes}/${año} es: ${diaSemana}`);
