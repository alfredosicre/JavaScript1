// Para poder introducir información por teclado montamos el programa leer.js
// const es una constante que no se puede variar
const read = require('/home/node/ALFREDO/javaScript/leer.js');

//Escriba un programa que nos calcule el cambio que debe dar la caja de un supermercado:
//Dado un precio y una cantidad de dinero, el programa nos dirá cuántas monedas deben
//darse como cambio de tal forma que el número total de monedas sea mínimo.

main();

function main(){ // ------------------------------------------------------
let correcto = true;
let precio = 0, dinero = 0, cambio = 0.0, numero2decimales = 0;
    
do{  
console.log();
precio = Number(read("Ingrese precio: "));
dinero = Number(read("Ingrese dinero pagado: "));

if(precio == 0){
        correcto = false;
        }else{
        cambio = dinero - precio;
        numero2decimales = cambio.toFixed(2);
        console.log("Total cambio..: " + numero2decimales + "€");
        console.log();
        calcularCambio(precio, dinero);
        console.log()
        }
} while (correcto);   
} //------------------------------------------------------------------------

function calcularCambio(precio, dinero) { // ------------------------------------------------------------------------------------------------------------
        // Convertimos el precio y la cantidad de dinero a céntimos.
        let cambio = Math.round((dinero - precio) * 100); // Multiplicamos por 100 para trabajar con céntimos
        let billetesYMonedas = [50000, 20000, 10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 5, 2, 1]; // Billetes y monedas disponibles en céntimos
        let cantidadBilletesYMonedas = []; // Array para almacenar el número de cada billete o moneda a devolver
    
        // Verificamos si la cantidad de dinero es suficiente
        if (cambio < 0) {
            console.log("El dinero proporcionado no es suficiente.");
            return;
        }
    
        // Recorremos los billetes y monedas disponibles para devolver el cambio
        for (let i = 0; i < billetesYMonedas.length; i++) { // desde i=1 hasta que i<numero total de elementos del array [billetesYMonedas] que es 15 en este caso.

            // Cuántos billetes o monedas de este tipo podemos dar. Redondea el número hacia abajo al entero más cercano (Math.floor).
            let dinero = Math.floor(cambio / billetesYMonedas[i]); 
            if (dinero > 0) {
                //condición ? expresiónSiVerdadera : expresiónSiFalsa;
                let tipo = billetesYMonedas[i] >= 500 ? `billetes de ${billetesYMonedas[i] / 100}€` : `monedas de ${billetesYMonedas[i] / 100}€`;
                cantidadBilletesYMonedas.push(`${dinero} ${tipo}`); // Guardamos la cantidad de billetes o monedas
                cambio -= dinero * billetesYMonedas[i]; // Restamos el valor del cambio
            }
        }
    
        // Mostramos los billetes y monedas que deben devolverse
        console.log("El cambio a devolver es: ");
        for (let i = 0; i < cantidadBilletesYMonedas.length; i++) {
            console.log(cantidadBilletesYMonedas[i]);
        }
    } // -------------------------------------------------------------------------------------------------------------------------------------------------
