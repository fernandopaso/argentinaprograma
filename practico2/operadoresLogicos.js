const readlineSync = require('readline-sync');
let numero= readlineSync.question("Ingrese un numero: ");
if (numero>0 && (numero%2)==0){console.log("El numero es positivo y par")}
if (numero>0 && (numero%2)!=0){console.log("El numero es positivo e impar")}
if (numero<0){console.log("El numero es negativo")}
if (numero==0){console.log("El numero es cero")}
