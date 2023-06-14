const readlineSync = require('readline-sync');
let numeroMes = readlineSync.question("Ingrese el numero correspondiente al mes (1-12): ");
let mes=["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
if(numeroMes==2){cantidadDeDias=28;}
else if(numeroMes==4||numeroMes==6||numeroMes==9||numeroMes==11){cantidadDeDias=30;}
else{cantidadDeDias=31;}
console.log("La cantidad de dias del mes de %s es %i",mes[numeroMes-1],cantidadDeDias);
