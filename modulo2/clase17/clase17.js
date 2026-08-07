let lorem = document.getElementById("lorem")

lorem.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate."

let div = document.createElement("div")

let titulo = document.createElement("h1")
let texto = document.createTextNode("Titulo creado con JS")
let boton = document.createElement("button")

titulo.textContent = "Titulo creado con JS"
boton.textContent = "Boton creado con JS"
texto.textContent = "Texto creado con JS"

div.appendChild(titulo)
div.appendChild(texto)
div.appendChild(boton)

div.style.padding = "20px"
div.style.backgroundColor = "blue"
div.style.color = "white"
div.style.textAlign = "center"
div.style.borderRadius = "10px"

document.body.appendChild(div)

let lista = document.createElement("ul")

let arrayEmpleados = ["Juan", "Maria", "Pedro", "Ana"]

function crearLista(array) {
    for (let i = 0; i < array.length; i++) {
        let item = document.createElement("li")
        item.textContent = array[i]
        lista.appendChild(item)
    }
}
document.body.appendChild(lista)
crearLista(arrayEmpleados)





