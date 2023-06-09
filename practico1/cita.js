let cita ="Tres tristes tigres comen trigo en un trigal";
let substring ="tigres comen trigo";
tamañoDeCita=cita.length;
console.log("El tamaño de la cita es: %i",tamañoDeCita);
indice=cita.indexOf(substring);
console.log("El indice del substring es:", indice);
substringArray=substring.split(" ");
substringUltima=substringArray[substringArray.length-1];
citaArray=cita.split(" ");
citaRevisadaArray=citaArray.slice(0,citaArray.indexOf(substringUltima)+1);
citaRevisada=citaRevisadaArray.join(" ");
console.log(citaRevisada);



