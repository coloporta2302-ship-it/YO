class Personaje {
    constructor(nombre, vida, ataque) {
        this.nombre = nombre;
        this.vida = vida;
        this.ataque = ataque;
    }

    recibirDañio(cantidad) {
        this.vida -= cantidad;

        if (this.vida < 0) {
            this.vida = 0;
        }

        console.log(`${this.nombre} recibió ${cantidad} de daño`);
    }

    curar(cantidad) {
        this.vida += cantidad;
        console.log(`${this.nombre} recuperó ${cantidad} de vida`);
    }

    mostrarEstado() {
        console.log(`
Nombre: ${this.nombre}
Vida: ${this.vida}
Ataque: ${this.ataque}
        `);
    }
}


let personaje1 = new Personaje("Guerrero", 100, 20);

personaje1.mostrarEstado();

personaje1.recibirDañio(40);
personaje1.mostrarEstado();

personaje1.curar(25);
personaje1.mostrarEstado();

personaje1.recibirDañio(200); 
personaje1.mostrarEstado();