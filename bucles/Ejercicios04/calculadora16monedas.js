// Para poder introducir información por teclado montamos el programa leer.js
// const es una constante que no se puede variar
const read = require('/home/node/leer.js');

//Escriba un programa que nos calcule el cambio que debe dar la caja de un supermercado:
//Dado un precio y una cantidad de dinero, el programa nos dirá cuántas monedas deben
//darse como cambio de tal forma que el número total de monedas sea mínimo.
main();

let correcto = true;
let precio = 0, dinero = 0, cambio = 0.0;

function main(){

do{  
        precio = Number(read("Ingrese precio: "));
        dinero = Number(read("Ingrese dinero pagado: "));
        // calculo cuantos euros le tengo que devolver
        cambio = dinero - precio; // total euros y centimos que debo devolver
        cambio = cambio * 100; // veo los centimos totales que necesito
        

} while (correcto);

}