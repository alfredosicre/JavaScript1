// Para poder introducir información por teclado montamos el programa leer.js
// const es una constante que no se puede variar
const read = require('/home/node/leer.js');

// Solicite al usuario una fecha e indicar los días que faltan hasta fin de año. (se supone que el
// año no es bisiesto)

let dia = 0, mes = 0, anio = 0, numero = 0, resto = 0;
let correcto = true;

do{  

dia = Number(read("Ingrese  día.: "));
mes = Number(read("Ingrese  mes.: "));
anio = Number(read("Ingrese año.: "));

if(mes == 2 && (dia < 1 || dia > 28)){
        console.log("Fecha MAL introducida, repita de nuevo... ");
}else{
        correcto = false;

}
console.log();
} while (correcto);

// -------------------------------------------------------------------------------

if(mes == 2){
        numero = 28;
    }else {
        if(mes==1 || mes==3 || mes==5 || mes==7 || mes==8 || mes==10 || mes==12){
            numero = 31;
    }   else{
            numero = 30;
    }
}
resto = numero - dia;
for(let i = (mes+1); i <= 12; i++){
        resto = (resto + numero);
}

console.log();
process.stdout.write(`La fecha introducida es: ${dia}/${mes}/${anio}`);
console.log(" Los dias transcurridos del año: " + anio + " son: "  + resto);
console.log("FINAL");
