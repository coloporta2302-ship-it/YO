class CuentaBancaria {
    constructor(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }

    depositar(monto) {
        this.saldo += monto;
        console.log(`Se depositaron $${monto}`);
    }

    extraer(monto) {
        if (monto <= this.saldo) {
            this.saldo -= monto;
            console.log(`Se extrajeron $${monto}`);
        } else {
            console.log("Fondos insuficientes");
        }
    }

    consultarSaldo() {
        console.log(`Saldo actual: $${this.saldo}`);
    }
}

// Ejemplo de uso
let cuenta1 = new CuentaBancaria("Fabrizio", 1000);

cuenta1.consultarSaldo(); 
cuenta1.depositar(500);
cuenta1.consultarSaldo(); 
cuenta1.extraer(300);
cuenta1.consultarSaldo(); 
cuenta1.extraer(2000); 


