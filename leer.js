// Para usarlo se debe instalar primero el paquete readline-sync
// npm install readline-sync
const readlineSync = require('readline-sync');
function leer(promptMessage) {
    return readlineSync.question(promptMessage);
}
module.exports = leer;