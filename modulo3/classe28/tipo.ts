let nombre: string = "juan";

let numeroo: number = 5;

let activo : boolean = true;

let indefinido: undefined = undefined;

let nulo: null = null;

let cualquiera: any = 32

// let nombreUsuario: "juan"; Aca Ts ya iterpreta que nombreUsuario es un string //

let arrayNumeros : number[] = [1,2,3];

let arrrayTexto : string[] = ["hola", "chau", "milanesa"];


// let arrayNuevo : Array<number> = [1,2,3, "hola"]; ESTO DA ERROR


const usuario : {
    nombre: string,
    edad: number,
} = {
    nombre: "juan",
    edad: 30,
}

// interfaces

interface Usuario {
    nombre: string,
    edad?: number,
}

let nuevoUsuario: Usuario = {
    nombre: "maria",
    edad: 25,
}

let usuario2: Usuario = {
    nombre: "pedro",
    edad: 40,
}

let usuarioSinEdad: Usuario = {
    nombre: "lucas",
}

let arrayUsuario: Usuario[] = [nuevoUsuario, usuario2, usuarioSinEdad];

function suma (a: number , b: number) {
    return a + b;
}

function suma2 (a: number , b: number) : number {
    return a + b;
}

function suma3 (a: number = 0 , b: number) : number {
    return a + b;
}


function saludar(nombre: string) : void {
    console.log("hola", nombre) }
