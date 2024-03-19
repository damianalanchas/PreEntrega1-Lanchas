// TITULOS

const contenedor = document.querySelector ("#contenedor")
contenedor.style.backgroundColor = "#dbdbdb"
const contenedor1 = document.querySelector ("#contenedor1")
const div1 = document.createElement("div")
const h1 = document.createElement("h1")
h1.id = "titulo1"
h1.innerText = "Conversor de divisas"
h1.style.fontFamily = "'Antonio', sans-serif"
h1.style.fontSize = "70px"
h1.style.display = "flex"
h1.style.justifyContent = "center"
h1.style.marginTop = "80px"
h1.style.color = "black"

div1.appendChild (h1)
contenedor1.appendChild (div1)

const h2 = document.createElement ("h2")
h2.id = "subtitulo"
h2.innerText = "Conversor de Pesos Argentinos a monedas extranjeras"
h2.style.fontFamily = "'Antonio', sans-serif"
h2.style.fontSize = "35px"
h2.style.display = "flex"
h2.style.justifyContent = "center"
h2.style.color = "black"

div1.appendChild (h2)

const p1 = document.createElement ("p")
p1.innerText = "Seleccionar moneda a convertir:"
p1.style.fontFamily = "'Antonio', sans-serif"
p1.style.fontSize = "25px"
p1.style.display = "flex"
p1.style.justifyContent = "center"
p1.style.marginTop = "50px"
p1.style.color = "black"

div1.appendChild (p1)

// INPUTS

const divInputDolar = document.createElement ("div")
const inputDolar = document.createElement ("input")
inputDolar.type = "radio"
inputDolar.name = "divisaelegida"
inputDolar.id = "dolarid"
const labelDolar = document.createElement ("label")
labelDolar.innerText = "Dólar"
labelDolar.style.fontSize = "25px"
labelDolar.style.marginLeft = "15px"
labelDolar.style.marginRight = "70px"
labelDolar.style.fontFamily = "'Antonio', sans-serif"

const divInputEuro = document.createElement ("div")
const inputEuro = document.createElement ("input")
inputEuro.type = "radio"
inputEuro.name = "divisaelegida"
inputEuro.id = "euroid"
const labelEuro = document.createElement ("label")
labelEuro.innerText = "Euro"
labelEuro.style.fontSize = "25px"
labelEuro.style.marginLeft = "15px"
labelEuro.style.marginRight = "70px"
labelEuro.style.fontFamily = "'Antonio', sans-serif"

const divInputReal = document.createElement ("div")
const inputReal = document.createElement ("input")
inputReal.type = "radio"
inputReal.name = "divisaelegida"
inputReal.id = "realid"
const labelReal = document.createElement ("label")
labelReal.innerText = "Real"
labelReal.style.fontSize = "25px"
labelReal.style.marginLeft = "15px"
labelReal.style.marginRight = "70px"
labelReal.style.fontFamily = "'Antonio', sans-serif"

const divInputLibra = document.createElement ("div")
const inputLibra = document.createElement ("input")
inputLibra.type = "radio"
inputLibra.name = "divisaelegida"
inputLibra.id = "libraid"
const labelLibra = document.createElement ("label")
labelLibra.innerText = "Libra Esterlina"
labelLibra.style.fontSize = "25px"
labelLibra.style.marginLeft = "15px"
labelLibra.style.marginRight = "70px"
labelLibra.style.fontFamily = "'Antonio', sans-serif"

const contenedor2 = document.querySelector ("#contenedor2")
const formInput = document.createElement ("form")
contenedor2.appendChild (formInput)
formInput.appendChild (divInputDolar)
formInput.appendChild (divInputEuro)
formInput.appendChild (divInputReal)
formInput.appendChild (divInputLibra)
divInputDolar.appendChild (inputDolar)
divInputDolar.appendChild (labelDolar)
divInputEuro.appendChild (inputEuro)
divInputEuro.appendChild (labelEuro)
divInputReal.appendChild (inputReal)
divInputReal.appendChild (labelReal)
divInputLibra.appendChild (inputLibra)
divInputLibra.appendChild (labelLibra)

formInput.style.display = "flex"
formInput.style.justifyContent = "center"
formInput.style.padding = "10px"


// MONTO A INGRESAR

const divP2 = document.createElement ("div")
const p2 = document.createElement ("p")
p2.innerText = "Ingresar valor en Pesos Argentinos:"
p2.style.fontFamily = "'Antonio', sans-serif"
p2.style.fontSize = "25px"
p2.style.marginLeft = "30px"
p2.style.display = "flex"
p2.style.justifyContent = "center"
p2.style.margin = "50px"

contenedor2.appendChild (divP2)
divP2.appendChild (p2)


let inputValorEnPesos = document.createElement ("input")
inputValorEnPesos.type = "number"
inputValorEnPesos.id = "valorenpesosid"
inputValorEnPesos.style.fontFamily = "'Antonio', sans-serif"
inputValorEnPesos.style.fontSize = "25px"
inputValorEnPesos.style.backgroundColor = "#cacaca"
inputValorEnPesos.style.hover = "black" 
inputValorEnPesos.style.border = "none"
inputValorEnPesos.style.borderRadius = "10px"
inputValorEnPesos.style.height = "50px"
inputValorEnPesos.style.width = "500px"
inputValorEnPesos.style.textAlign = "center"


const divInputPesos = document.createElement ("div")
contenedor2.appendChild (divInputPesos)
divInputPesos.appendChild (inputValorEnPesos)
divInputPesos.style.display = "flex"
divInputPesos.style.justifyContent = "center"


inputValorEnPesos.addEventListener ("click", () => { 
    inputValorEnPesos.style.backgroundColor = "#b9b9b9"
})


// OBJETOS / CLASES

class Moneda {
    constructor(nombre,precio){
        this.nombre = nombre;
        this.precio = precio
    }
}

const dolar = new Moneda ("dolares",)
const euro = new Moneda ("euros",)
const real = new Moneda ("reales",)
const libraEsterlina = new Moneda ("libras esterlinas",)


// FETCH

const URL = 'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/'

const USD_JSON = 'usd.json'
const EUR_JSON = 'eur.json'
const REAL_JSON = 'brl.json'
const LIBRA_JSON = 'gbp.json'

const getChanges = async () => {
   
    try {
        const responseDolar = await fetch (URL + USD_JSON)
        const dataDolar = await responseDolar.json()
        dolar.precio = dataDolar.usd.ars.toFixed (2)

        const responseEur = await fetch (URL + EUR_JSON)
        const dataEur = await responseEur.json()
        euro.precio = dataEur.eur.ars.toFixed (2)

        const responseReal = await fetch (URL + REAL_JSON)
        const dataReal = await responseReal.json()
        real.precio = dataReal.brl.ars.toFixed (2)

        const responseLibra = await fetch (URL + LIBRA_JSON)
        const dataLibra = await responseLibra.json()
        libraEsterlina.precio = dataLibra.gbp.ars.toFixed (2)
    }

    catch (e){
        console.log (e)
    }
}

getChanges ()

//FUNCION

let historial = []

function conversionMoneda (pesosArgentinos, valorMoneda, moneda){
    
    let span = document.createElement ("span")
    span.innerText = ("\n $" + inputValorEnPesos.value + " equivalen a " + (pesosArgentinos / valorMoneda).toFixed(2) + " " + moneda)
    span.style.fontFamily = "'Antonio', sans-serif"
    span.style.fontSize = "25px"
    span.style.color = "#3175a0"
    span.style.display = "flex"
    span.style.justifyContent = "center"
    contenedor2.appendChild (span)
    
    const operacionAGuardar ={
        pesos: inputValorEnPesos.value,
        resultado: (pesosArgentinos / valorMoneda).toFixed(2),
        moneda: moneda
    }
    
    historial.push (operacionAGuardar) 

    span.addEventListener ("input", (event) => {
        historial = event.target.value
    })

    const jsonHistorial = JSON.stringify (historial)
    localStorage.setItem ("Conversion", jsonHistorial)
    const historialRecuperado = JSON.parse (localStorage.getItem ("Conversion")) 
}

//BOTON COVERTIR

const divBotones = document.createElement ("div")
const divBoton = document.createElement ("div")
divBotones.style.display = "flex"
divBotones.style.justifyContent = "center"
const botonConvertir = document.createElement ("input")
botonConvertir.type = "button"
botonConvertir.value = "Convertir"
botonConvertir.id = "botonid"
botonConvertir.style.backgroundColor = "#4b4b4b";
botonConvertir.style.width = "150px";
botonConvertir.style.height = "40px";
botonConvertir.style.border = "none";
botonConvertir.style.borderRadius = "10px";
botonConvertir.style.color = "#f4f1e9"
botonConvertir.style.fontFamily = "'Antonio', sans-serif"
botonConvertir.style.fontSize = "20px"
botonConvertir.style.marginTop = "40px"
botonConvertir.style.marginRight = "40px"

contenedor2.appendChild (divBotones)
divBotones.appendChild (divBoton)
divBoton.appendChild (botonConvertir)

botonConvertir.addEventListener ("click", () => { 

    if (document.getElementById("dolarid").checked){
        conversionMoneda (inputValorEnPesos.value, dolar.precio, dolar.nombre)
    }

    else if (document.getElementById("euroid").checked){
        conversionMoneda (inputValorEnPesos.value, euro.precio, euro.nombre)
    }

    else if (document.getElementById("realid").checked){
        conversionMoneda (inputValorEnPesos.value, real.precio, real.nombre)
    }
    
    else if (document.getElementById("libraid").checked){
        conversionMoneda (inputValorEnPesos.value, libraEsterlina.precio, libraEsterlina.nombre)
    }

})

// BOTON RESETEAR

const divBoton2 = document.createElement ("div")
const botonResetear = document.createElement ("input")
botonResetear .type = "button"
botonResetear.value = "Resetear"
botonResetear.id = "botonid"
botonResetear.style.backgroundColor = "#4b4b4b";
botonResetear.style.width = "150px";
botonResetear.style.height = "40px";
botonResetear.style.border = "none";
botonResetear.style.borderRadius = "10px";
botonResetear.style.color = "#f4f1e9"
botonResetear.style.fontFamily = "'Antonio', sans-serif"
botonResetear.style.fontSize = "20px"
botonResetear.style.marginTop = "40px"

divBotones.appendChild (divBoton2)
divBoton2.appendChild (botonResetear)

botonResetear.addEventListener ("click", () => { 
    Swal.fire({
        title: "Estas seguro que queres resetear las conversiones?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Resetear",
        denyButtonText: `No resetear`
      })
      .then((result) => {
        if (result.isConfirmed) {
            Swal.fire("Reseteado!", "", "success");
            localStorage.clear (historial);
            
            const historialSpan = contenedor2.querySelectorAll("span");
            historialSpan.forEach((span) => {
                span.remove();
            });

            inputValorEnPesos.value = '';
        }
        else if (result.isDenied) {
          Swal.fire("No se han reseteado las conversiones.", "", "info");
        }
      });
})