
  class persona {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
    }
    saludar(){
        console.log("hola soy" + this.nombre)
    }
  }
  const per1 = new persona("fabrizio", "porta", 19)

  per1.saludar()

  class producto {
    constructor(nombre, precio) {
        this.nombre = nombre,
        this.precio = precio
    }
    cambiarprecio(nuevoprecio) {
        this.precio = nuevoprecio
    }
  }
  let pizza = new producto("pizza", 500)
  console.log(pizza.precio)
  pizza.cambiarprecio(600)
  console.log(pizza.precio)

  