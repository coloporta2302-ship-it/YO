class Auto {
    constructor(marca, modelo, combustible) {
        this.marca = marca;
        this.modelo = modelo;
        this.combustible = combustible;
    }

    conducir(km) {
        let consumo = km / 10;

        if (consumo <= this.combustible) {
            this.combustible -= consumo;
            console.log(`Recorrió ${km} km y consumió ${consumo} litros`);
        } else {
            console.log("No hay suficiente combustible");
        }
    }

    cargarCombustible(litros) {
        this.combustible += litros;
        console.log(`Se cargaron ${litros} litros`);
    }

    mostrarInfo() {
        console.log(`
Marca: ${this.marca}
Modelo: ${this.modelo}
Combustible: ${this.combustible} litros
        `);
    }
}


let auto1 = new Auto("Toyota", "Corolla", 20);

auto1.mostrarInfo();

auto1.conducir(50); 
auto1.mostrarInfo();

auto1.cargarCombustible(10);
auto1.mostrarInfo();