let listaDePersonas=["Jose","Maria","Juan","Andres","Lionel","Sofia","Leandro","Emilia"];
let rechazados=[];
let admitidos=[];
for (let i=0;i<listaDePersonas.length;i++)
    {
        if (listaDePersonas[i]==="Jose"||listaDePersonas[i]==="Sofia")
            {
                rechazados.push(listaDePersonas[i]);
            }
        else {admitidos.push(listaDePersonas[i]);}
    }   
console.log("La lista de invitados admitidos es:");
for (i=0;i<admitidos.length;i++)
    {
        console.log("%s",admitidos[i]);
    }
console.log("");
console.log("La lista de invitados rechazados es:");
for (i=0;i<rechazados.length;i++)
    {
        console.log("%s",rechazados[i]);
    }
let rechazadosOrdenados=rechazados.sort();
let admitidosOrdenados=admitidos.sort();
console.log("");
console.log("La lista ordenada de invitados admitidos es:")
for (i=0;i<admitidosOrdenados.length;i++)
    {
        console.log("%s",admitidosOrdenados[i]);
    }
console.log("");
    console.log("La lista ordenada de invitados rechazados es:")
for (i=0;i<rechazadosOrdenados.length;i++)
    {
        console.log("%s",rechazadosOrdenados[i]);
    }
