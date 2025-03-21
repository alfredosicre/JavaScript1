// Para poder introducir información por teclado montamos el programa leer.js
// const es una constante que no se puede variar
const read = require('/home/node/leer.js');

//Escriba un programa que nos calcule el cambio que debe dar la caja de un supermercado:
//Dado un precio y una cantidad de dinero, el programa nos dirá cuántas monedas deben
//darse como cambio de tal forma que el número total de monedas sea mínimo.

main();
    
let correcto = true, salir = 0;
let precio = 0, dinero = 0, cambio = 0.0;
function main(){
    
do{  
precio = Number(read("Ingrese precio: "));
dinero = Number(read("Ingrese dinero pagado: "));
salir = Number(read("Salir ingrese 1: "));
if(salir = 1){
        correcto = false; // si salir = 1 sale del bucle
        }
        calcularCambio(precio, dinero);
} while (correcto);
    
}

function calcularCambio(precio, cantidadDinero) {
        // Convertimos el precio y la cantidad de dinero a céntimos para evitar problemas de precisión con decimales
        let cambio = Math.round((cantidadDinero - precio) * 100); // Multiplicamos por 100 para trabajar con céntimos
        let billetesYMonedas = [50000, 20000, 10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 5, 2, 1]; // Billetes y monedas disponibles en céntimos
        let cantidadBilletesYMonedas = []; // Array para almacenar el número de cada billete o moneda a devolver
    
        // Verificamos si la cantidad de dinero es suficiente
        if (cambio < 0) {
            console.log("El dinero proporcionado no es suficiente.");
            return;
        }
    
        // Recorremos los billetes y monedas disponibles para devolver el cambio
        for (let i = 0; i < billetesYMonedas.length; i++) {
            let cantidad = Math.floor(cambio / billetesYMonedas[i]); // Cuántos billetes o monedas de este tipo podemos dar
            if (cantidad > 0) {
                let tipo = billetesYMonedas[i] >= 100 ? `billetes de ${billetesYMonedas[i] / 100}€` : `monedas de ${billetesYMonedas[i] / 100}€`;
                cantidadBilletesYMonedas.push(`${cantidad} ${tipo}`); // Guardamos la cantidad de billetes o monedas
                cambio -= cantidad * billetesYMonedas[i]; // Restamos el valor del cambio
            }
        }
    
        // Mostramos los billetes y monedas que deben devolverse
        console.log("El cambio a devolver es: ");
        for (let i = 0; i < cantidadBilletesYMonedas.length; i++) {
            console.log(cantidadBilletesYMonedas[i]);
        }
    }
