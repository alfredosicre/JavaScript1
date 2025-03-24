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
    let digitosUsados = new Set();

    // Generar el primer dígito (no puede ser 0)
    let primerDigito = Math.floor(Math.random() * 9) + 1; // Un número entre 1 y 9
    numeroSecreto += primerDigito;
    digitosUsados.add(primerDigito);

    // Generar los siguientes tres dígitos, asegurándonos de que no se repitan
    while (numeroSecreto.length < 4) {
        let digito = Math.floor(Math.random() * 10); // Un número entre 0 y 9
        if (!digitosUsados.has(digito)) {
            numeroSecreto += digito;
            digitosUsados.add(digito);
        }
    }

    return numeroSecreto;
}

console.log(generarNumeroSecreto());
