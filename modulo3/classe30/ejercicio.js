class videojuego {
    constructor(nombre, genero, precio) {
        this.nombre = nombre
        this.genero = genero
        this.precio = precio
    }
    mostrarInfo() {
        console.log(`nombre ${this.nombre}\ngénero ${this.genero}\nprecio: $${this.precio.toFixed(2)}`)
    }}

    let juegos = []
    
    let juego1 = new videojuego("The Legend of Zelda: Breath of the Wild", "Aventura", 59.99)
    let juego2 = new videojuego("Super Mario Odyssey", "Plataformas", 49.99)
    let juego3 = new videojuego("Minecraft", "Sandbox", 26.95)
    let juego4 = new videojuego("Fortnite", "Battle Royale", 0)
    let juego5 = new videojuego("Call of Duty: Warzone", "Shooter", 0)

    juegos.push(juego1, juego2, juego3, juego4, juego5)
    console.log(juegos)

    for (let i = 0; i < juegos.length; i++) {
        console.log(`Juego ${i + 1}:`)
        juegos[i].mostrarInfo()
        console.log('-------------------')
    }

    