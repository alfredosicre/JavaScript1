<<<<<<< HEAD
// Para usarlo se debe instalar primero el paquete readline-sync
// npm install readline-sync
const readlineSync = require('readline-sync');
function leer(promptMessage) {
    return readlineSync.question(promptMessage);
}
=======
// Para usarlo se debe instalar primero el paquete readline-sync
// npm install readline-sync
const readlineSync = require('readline-sync');
function leer(promptMessage) {
    return readlineSync.question(promptMessage);
}
>>>>>>> 4fe10bdc00cedf40e5a3b44c9504285a0566c880
module.exports = leer;