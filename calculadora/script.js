let pantallla = document.querySelector("#pantalla");

let boton1 = document.querySelector("#boton1");
let boton2 = document.querySelector("#boton2");
let boton3 = document.querySelector("#boton3");
let boton4 = document.querySelector("#boton4");
let boton5 = document.querySelector("#boton5");
let boton6 = document.querySelector("#boton6");
let boton7 = document.querySelector("#boton7");
let boton8 = document.querySelector("#boton8");
let boton9 = document.querySelector("#boton9");
let botonC = document.querySelector("#botonC");
let botonIgual = document.querySelector("#botonIgual");
let botondel = document.querySelector("#botonDel");

let botonMas = document.querySelector("#boton-mas")
let botonMenos = document.querySelector("#boton-menos")
let botonMultiplicar = document.querySelector("#boton-multiplicar")
let botonDividir = document.querySelector("#boton-dividir")


let operacion = null

let primerNumero = null
let segundoNumero = null


boton1.addEventListener("click", function () {
    if (pantalla.textContent == 0) {
        pantalla.textContent = "1"
    } else {
        pantalla.textContent += "1"
    }

})

boton2.addEventListener("click", function () {
    if (pantalla.textContent == 0) {
        pantalla.textContent = "2"
    } else {
        pantalla.textContent += "2"
    }
})

boton3.addEventListener("click", function () {
    if (pantalla.textContent == 0) {
        pantalla.textContent = "3"
    } else {
        pantalla.textContent += "3"
    }
})

boton4.addEventListener("click", function () {
    if (pantalla.textContent == 0) {
        pantalla.textContent = "4"
    } else {
        pantalla.textContent = "4"
    }
})

boton5.addEventListener("click", function () {
    if (pantalla.textContent == 0) {
        pantalla.textContent = "5"
    } else {
        pantalla.textContent += "5"
    }
})

boton6.addEventListener("click", function () {
    if (pantalla.textContent == 0) {
        pantalla.textContent = "6"
    } else {
        pantalla.textContent += "6"
    }
})

boton7.addEventListener("click", function () {
    if (pantalla.textContent == 0) {
        pantalla.textContent = "7"
    } else {
        pantalla.textContent += "7"
    }
})

boton8.addEventListener("click", function () {
    if (pantalla.textContent == 0) {
        pantalla.textContent = "8"
    } else {
        pantalla.textContent += "8"
    }
})

boton9.addEventListener("click", function () {
    if (pantalla.textContent == 0) {
        pantalla.textContent = "9"
    } else {
        pantalla.textContent += "9"
    }
})

botonC.addEventListener("click", function () {
    pantalla.textContent = "0"
})

boton0.addEventListener("click", function () {
    if (pantalla.textContent != 0) {
        pantalla.textContent += "0"
    }

})



