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
        }else{
        // calculo cuantos euros le tengo que devolver
        cambio = dinero - precio; // total euros y centimos que debo devolver
        cambio = cambio * 100; // veo los centimos totales que necesito de cambio
//    
        // Calcular el número de monedas
        for (let i = 0; i < cambio; i++) {
            let cantidadMonedas = Math.floor(cambio);
            if (cantidadMonedas > 0) {
                cambio -= cantidadMonedas * monedas;
            }
        }
        }

//
} while (correcto);

}