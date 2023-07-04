const PIEDRA="piedra", PAPEL="papel", TIJERA="tijera";
const readlineSync = require('readline-sync');
let repeticion = readlineSync.questionInt("Ingrese 1, 2 o 3 segun la cantidad de veces que quiera jugar: ");
let puntoComputadora=0, puntoUsuario=0;
for (let i=1;i<=repeticion;i++)
{
function obtenerJugadaComputadora()
    {
    const opcion = Math.floor(Math.random() * 3);
    let lista = [PIEDRA,PAPEL,TIJERA];
    return lista[opcion];
    }

let opcionCompu=obtenerJugadaComputadora();

function obtenerJugadaUsuario()
    {
    const usuario = readlineSync.question("\nIngrese piedra, papel o tijera: ");
    return usuario;
    }

let opcionUsuario=obtenerJugadaUsuario();

function determinarGanador(Usuario,Compu)
    {
        let resultado;
        if (Compu===Usuario){ resultado ="Empate";}
        else if ((Compu===PIEDRA && Usuario===TIJERA)||(Compu===TIJERA && Usuario===PAPEL)||(Compu===PAPEL && Usuario===PIEDRA))
                { resultado ="Gana la computadora";}
        else if ((Compu===TIJERA && Usuario===PIEDRA)||(Compu===PIEDRA && Usuario===PAPEL)||(Compu===PAPEL && Usuario===TIJERA))
                { resultado ="Gana el usuario";}
        else { resultado ="Informacion mal ingresada por el usuario";}
        return resultado;
    }
let resultadoFinal= determinarGanador(opcionUsuario, opcionCompu);

if (resultadoFinal==="Gana la computadora"){ puntoComputadora++;}
else if (resultadoFinal==="Gana el usuario"){ puntoUsuario++;}

console.log("\nLa computadora eligio: %s",opcionCompu);
console.log("El usuario eligio: %s",opcionUsuario);
console.log("\nEl resultado es: %s",resultadoFinal);
}

console.log("\nEl puntage obtenido por la computadora en %i jugada/s es: %i",repeticion,puntoComputadora);
console.log("El puntage obtenido por el usuario en %i jugada/s es: %i\n",repeticion,puntoUsuario);
if (puntoComputadora>puntoUsuario){console.log("La computadora gana el juego\n")}
else if (puntoComputadora<puntoUsuario){console.log("El usuario gana el juego\n")}
else{console.log("El juego termina empatado\n")}