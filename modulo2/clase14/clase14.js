let precios = [100, 200, 300]

for (let i = 0; i < precios.length; i++) {
    console.log(precios[i] * 2)
}


let nuevoarray = precios.map((elemento) => { return elemento * 2 })

console.log(nuevoarray)

let nombre = ["juan", "carlos", "roberto"]

console.log(nombre.map((elemento) => { return "hola " + elemento }))



let numeros = [1, 2, 3, 4 ,5]

let pares = numeros.filter((numero) => { return numero % 2 === 0 })

console.log(pares)

let numneros = [75, 33, 100, 45, 22]

let mayor = numneros.filter((numero) => { return numero > 20 })

console.log(mayor)

let nombres = ["ana", "maria", "pepe", "juan"]

let nombresconA =nombres.filter((nombre) => { return nombre[0] === "a" })

console.log(nombresconA)


