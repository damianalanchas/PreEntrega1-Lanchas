// DECLARACIONES

const dolarHoy = 879.62;

const euroHoy = 950.52;

const realHoy = 166.50;

const libraEsterlinaHoy = 1043.40;

const moneda1 = "dólares";

const moneda2 = "euros";

const moneda3 = "reales";

const moneda4 = "libras esterlinas";


//FUNCION

function conversionMoneda (pesosArgentinos, valorMoneda, moneda){

    alert ("$" + valorEnPesos + " equivalen a " + (pesosArgentinos / valorMoneda) + " " + moneda)
}
    

//INTRO

alert ("Hola! Este es un conversor de monedas de Pesos Argentinos a monedas extranjeras.")


//INGRESO DE VALOR EN PESOS

let valorEnPesos = prompt ("Ingrese valor en Pesos Argentinos que desea convertir. \nESC para salir.")


//CONDICIONAL

while (valorEnPesos != "ESC" && valorEnPesos != "esc"){

    let monedaElegida = parseInt (prompt ("Ingrese moneda en la que quiere hacer la conversión: \n 1 - Dólares \n 2 - Euros \n 3 - Reales \n 4 - Libras Esterlinas"));

    switch (monedaElegida){

        case 1:
            conversionMoneda (valorEnPesos, dolarHoy, moneda1)
            break;

        case 2:
            conversionMoneda (valorEnPesos, euroHoy, moneda2)
            break;

        case 3:
            conversionMoneda (valorEnPesos, realHoy, moneda3)
            break;

        case 4:
            conversionMoneda (valorEnPesos, libraEsterlinaHoy, moneda4)
            break;

        default:
            alert ("Moneda ingresada incorrecta. Volver a intentar.");
    }

    valorEnPesos = prompt ("Ingrese valor en Pesos Argentinos que desea convertir.\n ESC para salir.");
}