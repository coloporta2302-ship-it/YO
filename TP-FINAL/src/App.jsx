import { useState } from "react";
import "./App.css";
import { Catalog } from "./components/pages";
import { RegisterForm } from "./components/templates";
import Cart from "./components/molecules/cart";

function App() {
  const [showCart, setShowCart] = useState(false);

  return (
    <div>
      <header>
        <h1>Ecomerce Videojuegos</h1>
      </header>

      <nav>
        <button onClick={() => setShowCart(false)}>Catálogo</button>
        <button onClick={() => (window.location.href = "#login")}>
          Iniciar Sesión
        </button>
        <button onClick={() => (window.location.href = "#register")}>
          Registrarse
        </button>
        <button onClick={() => setShowCart(true)}>
          🛒 Carrito
        </button>
      </nav>

      <main>
        {showCart ? (
          <section id="cart">
            <button type="button" onClick={() => setShowCart(false)}>
              ← Volver al catálogo
            </button>
            <Cart />
          </section>
        ) : (
          <>
            <section id="catalog">
              <Catalog />
            </section>

            <section id="login"></section>

            <section id="register">
              <RegisterForm />
            </section>
          </>
        )}
      </main>

      <footer>
        <p>© 2024 Ecomerce Videojuegos. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
