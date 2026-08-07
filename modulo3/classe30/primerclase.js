class persona{
    constructor(nombre, edad) {
        this.nombre = nombre
        this.edad = edad
    
    }
    saludar(){
        console.log(`hola soy ${this.nombre}`)
    }
    mostraredad(){
        console.log(`tengo ${this.edad} años`)
    }

}

const persona1 = new persona("Juan", 25)

const persona2 = new persona("jorge", 30)

persona1.saludar()
persona2.saludar()
