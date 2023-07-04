function obtenerJugadaComputadora()
    {
    const opcion = Math.floor(Math.random() * 3);
    let lista = ["piedra","papel","tijera"];
    let  compu=lista[opcion];
    return compu;
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
        else if ((Compu==="piedra" && Usuario==="tijera")||(Compu==="tijera" && Usuario==="papel")||(Compu==="papel" && Usuario==="piedra"))
                { resultado ="Gana la computadora";}
        else if ((Compu==="tijera" && Usuario==="piedra")||(Compu==="piedra" && Usuario==="papel")||(Compu==="papel" && Usuario==="tijera"))
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


