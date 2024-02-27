// OBJETOS / CLASES

class Moneda {
    constructor(nombre,precio){
        this.nombre = nombre;
        this.precio = precio
    }
}

const dolar = new Moneda ("dolares", 859.50)
const euro = new Moneda ("euros", 912.20)
const real = new Moneda ("reales", 168.83)
const libraEsterlina = new Moneda ("libras esterlinas", 1066.41)

// ARRAYS

const historial = [];


//FUNCION

function conversionMoneda (pesosArgentinos, valorMoneda, moneda){

    alert ("$" + valorEnPesos + " equivalen a " + (pesosArgentinos / valorMoneda).toFixed(2) + " " + moneda)
    const operacionAGuardar ={
        valorEnPesos: valorEnPesos,
        resultado: (pesosArgentinos / valorMoneda).toFixed(2),
        moneda: moneda
    }
    
    historial.push (operacionAGuardar)
}
    

//INTRO

alert ("Hola! Este es un conversor de monedas de Pesos Argentinos a monedas extranjeras.")


//INGRESO DE VALOR EN PESOS

let valorEnPesos = prompt ("Ingrese valor en Pesos Argentinos que desea convertir. \nESC para salir.")


//CONDICIONAL

while (valorEnPesos.toLowerCase() != "esc" && valorEnPesos.toLowerCase() != "historial"){

    let monedaElegida = parseInt (prompt ("Ingrese moneda en la que quiere hacer la conversión: \n 1 - Dólares \n 2 - Euros \n 3 - Reales \n 4 - Libras Esterlinas"));

    switch (monedaElegida){

        case 1:
            conversionMoneda (valorEnPesos, dolar.precio, dolar.nombre)
            break;

        case 2:
            conversionMoneda (valorEnPesos, euro.precio, euro.nombre)
            break;

        case 3:
            conversionMoneda (valorEnPesos, real.precio, real.nombre)
            break;

        case 4:
            conversionMoneda (valorEnPesos, libraEsterlina.precio, libraEsterlina.nombre)
            break;

        default:
            alert ("Moneda ingresada incorrecta. Volver a intentar.");
    }

    valorEnPesos = prompt ("Ingrese valor en Pesos Argentinos que desea convertir o escriba HISTORIAL para ver el mismo.\n ESC para salir.");

    if (valorEnPesos.toLowerCase() === "historial"){

        let mensaje = "Ultimas conversiones realizadas: \n";
    
        historial.forEach (operacion => {
            mensaje = mensaje + `El valor de ${operacion.valorEnPesos} pesos argentinos es equivalente a ${operacion.resultado} ${operacion.moneda}.\n`
        })
    
        alert (mensaje)
    }
}