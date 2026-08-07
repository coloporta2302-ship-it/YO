import { useCart } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart, clearCart, total } = useCart();

  return (
    <div>
      <h1>Mi carrito 🛒</h1>

      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <>
          {cart.map((producto) => (
            <div key={producto.id}>
              <h2>{producto.nombre}</h2>
              <p>${producto.precio}</p>

              <button onClick={() => removeFromCart(producto.id)}>
                Eliminar
              </button>
            </div>
          ))}

          <h2>Total: ${total}</h2>

          <button onClick={clearCart}>Vaciar carrito</button>
        </>
      )}
    </div>
  );
}

export default Cart;
