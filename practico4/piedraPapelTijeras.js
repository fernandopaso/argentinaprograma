const PIEDRA="piedra", PAPEL="papel", TIJERA="tijera";
function obtenerJugadaComputadora()
    {
    const opcion = Math.floor(Math.random() * 3);
    let lista = [PIEDRA,PAPEL,TIJERA];
    return lista[opcion];
    }

let opcionCompu=obtenerJugadaComputadora();

function obtenerJugadaUsuario()
    {
    const readlineSync = require('readline-sync');
    const usuario = readlineSync.question("Ingrese piedra, papel o tijera: ");
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

console.log("");
console.log("La computadora eligio: %s",opcionCompu);
console.log("El usuario eligio: %s",opcionUsuario);
console.log("");
console.log("El resultado es: %s",resultadoFinal);
console.log("");


