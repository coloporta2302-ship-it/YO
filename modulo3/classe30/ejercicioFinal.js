class Producto1 {
    constructor(nombre, precio,  stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
    mostrarinfo(){
        console.log(`nombre: ${this.nombre}\nprecio: $${this.precio}\nstock: ${this.stock} unidades.`);
    }}

const producto1 = new producto1("Coca-cola", 150, 20);

producto1.mostrarinfo();

class Venta {
    constructor(producto, cantidad) {
        this.producto = producto;
        this.cantidad = cantidad;
    }
    mostrarVenta() {
        console.log(`Producto: ${this.producto.nombre}\nCantidad: ${this.cantidad}\nPrecio total: $${this.producto.precio * this.cantidad}`);
    }
}

const venta1 = new Venta(producto1, 3);

venta1.mostrarVenta();
class reponerStock {
    constructor(producto, cantidad) {
        this.producto = producto;
        this.cantidad = cantidad;
    }
    reponer() {
        this.producto.stock += this.cantidad;
        console.log(`nombre: ${this.producto.nombre}\nStock: ${this.producto.stock}`);
    }
}
const reponer1 = new reponerStock(producto1, 10);
reponer1.reponer();




const producto1 = new Producto("Coca-cola", 150, 20);
producto1.reponeStock(10);
producto1.venta(3);
producto1.venta(5);
producto1.mostrarinfo();
producto1.cambiarprecio("aumenta", 100);
producto1.mostrarinfo();
producto1.cambiarprecio("disminuye", 50);
producto1.mostrarinfo();