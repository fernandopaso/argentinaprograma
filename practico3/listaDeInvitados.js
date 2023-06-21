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
console.log("La lista de invitados admitidos es:")
for (i=0;i<admitidos.length;i++)
    {
        console.log("%s",admitidos[i]);
    }
console.log("La lista de invitados rechazados es:")
for (i=0;i<rechazados.length;i++)
    {
        console.log("%s",rechazados[i]);
    }