// Para poder introducir información por teclado montamos el programa leer.js
// const es una constante que no se puede variar
const read = require('/home/node/leer.js');

// Solicite al usuario dos fechas (día1, mes1, año1, día2, mes2, año2), indicar el tiempo
// transcurrido en días entre ambas, sin tener en cuenta años bisiestos.


let dia1 = 0, mes1 = 0, anio1 = 0, dia2 = 0, mes2 = 0, anio2 = 0;
let numero1 = 0, numero2 = 0, resto1 = 0, resto2 = 0, totalDias = 0;
let correcto = true;
main();
function main(){
do{  

dia1 = Number(read("Ingrese  día.: "));
mes1 = Number(read("Ingrese  mes.: "));
anio1 = Number(read("Ingrese año.: "));

dia2 = Number(read("Ingrese  día.: "));
mes2 = Number(read("Ingrese  mes.: "));
anio2 = Number(read("Ingrese año.: "));

if((mes1 == 2 && (dia1 < 1 || dia1 > 28) || (mes2 == 2 && (dia2 < 1 || dia2 > 28)))){
        console.log("Fecha MAL introducida, repita de nuevo... ");
}else{
        correcto = false;

}
console.log();
} while (correcto);

// Calculo los meses completos que tengo que sumas del año:     
if(mes1==1 || mes1==3 || mes1==5 || mes1==7 || mes1==8 || mes1==10 || mes1==12){
        numero1 = 31;
}else{
        numero1 = 30;
}
if(mes2==1 || mes2==3 || mes2==5 || mes2==7 || mes2==8 || mes2==10 || mes2==12){
        numero2 = 31;
        }else{
        numero2 = 30;
        }
// Calculo de los dias totales en los meses completos del año:
for(let i = 1; i < mes1; i++){
        resto1 = (resto1 + numero1);
}
console.log(resto1);
for(let i = 1; i < mes2; i++){
        resto2 = (resto2 + numero2);
}
console.log(resto2);
// A los meses completos del año les sumo los dias del mes introducido:
resto1 = resto1 + dia1;
resto2 = resto2 + dia2;

console.log(resto1);
console.log(resto2);
//Calculo la diferencia de los dias completos de la fecha2 menos lod dias completos de la fecha1:
totalDias = resto2 - resto1;

console.log();

console.log("Los dias transcurridos son: "  + totalDias);
console.log("FINAL FINAL");
}