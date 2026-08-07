export default function Navbar({ cart = [] }) {
  const cantidad = cart.reduce((acc, item) => acc + item.cantidad, 0);

  return (
    <nav>
      <h2>GameStore</h2>
      <button onClick={() => (window.location.href = "#catalog")}>
        Catálogo
      </button>
      <button onClick={() => (window.location.href = "#login")}>
        Iniciar Sesión
      </button>
      <button onClick={() => (window.location.href = "#register")}>
        Registrarse
      </button>
      <h3>🛒 {cantidad}</h3>
    </nav>
  );
}
