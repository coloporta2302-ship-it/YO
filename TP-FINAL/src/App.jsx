import "./App.css";
import { Catalog } from "./components/pages";
import { LoginForm, RegisterForm } from "./components/templates";
import Cart from "./components/molecules/cart";
function App() {
  return (
    <div>
      <header>
        <h1>Ecomerce Videojuegos</h1>
      </header>
      <nav>
        <button onClick={() => (window.location.href = "#catalog")}>
          Catálogo
        </button>
        <button onClick={() => (window.location.href = "#login")}>
          Iniciar Sesión
        </button>
        <button onClick={() => (window.location.href = "#register")}>
          Registrarse
        </button>
      </nav>
      <main>
        <section id="catalog">
          <Catalog />
        </section>
        <section id="login"></section>
        <section id="register">
          <RegisterForm />
        </section>
      </main>
      <footer>
        <p>© 2024 Ecomerce Videojuegos. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
export default App;
