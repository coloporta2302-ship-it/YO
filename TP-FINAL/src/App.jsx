import { useState } from "react";
import "./App.css";
import { Catalog } from "./components/pages";
import { RegisterForm, LoginForm } from "./components/templates";
import Cart from "./components/molecules/cart";

function App() {
  const [view, setView] = useState("catalog");

  return (
    <div>
      <header>
        <h1>Ecomerce Videojuegos</h1>
      </header>

      <nav>
        <button onClick={() => setView("catalog")}>Catálogo</button>
        <button onClick={() => setView("login")}>Iniciar Sesión</button>
        <button onClick={() => setView("register")}>Registrarse</button>
        <button onClick={() => setView("cart")}>🛒 Carrito</button>
      </nav>

      <main>
        {view === "cart" ? (
          <section id="cart">
            <button type="button" onClick={() => setView("catalog")}>← Volver al catálogo</button>
            <Cart />
          </section>
        ) : view === "login" ? (
          <LoginForm />
        ) : view === "register" ? (
          <RegisterForm />
        ) : (
          <section id="catalog"><Catalog /></section>
        )}
      </main>

      <footer>
        <p>© 2024 Ecomerce Videojuegos. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
