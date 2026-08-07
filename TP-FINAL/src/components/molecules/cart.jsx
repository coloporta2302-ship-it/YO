import { useCart } from "../context/CartContext";

function Cart() {
  const {
    cart,
    addToCart,
    decreaseQuantity,
    removeFromCart,
    clearCart,
    total,
  } = useCart();

  if (cart.length === 0) {
    return (
      <section className="cart">
        <h1>Mi carrito 🛒</h1>
        <p>El carrito está vacío.</p>
      </section>
    );
  }

  return (
    <section className="cart">
      <h1>Mi carrito 🛒</h1>

      <div className="cart-list">
        {cart.map((producto) => (
          <article className="cart-item" key={producto.id}>
            {producto.imagen && (
              <img
                src={producto.imagen}
                alt={producto.nombre}
                className="cart-item-image"
              />
            )}

            <div className="cart-item-info">
              <h2>{producto.nombre}</h2>
              <p>Precio: ${Number(producto.precio).toLocaleString("es-AR")}</p>

              <div className="cart-quantity">
                <button
                  type="button"
                  onClick={() => decreaseQuantity(producto.id)}
                  aria-label={`Disminuir cantidad de ${producto.nombre}`}
                >
                  −
                </button>
                <span>{producto.cantidad}</span>
                <button
                  type="button"
                  onClick={() => addToCart(producto)}
                  aria-label={`Aumentar cantidad de ${producto.nombre}`}
                >
                  +
                </button>
              </div>

              <p>
                Subtotal: $
                {(
                  Number(producto.precio || 0) * producto.cantidad
                ).toLocaleString("es-AR")}
              </p>

              <button
                type="button"
                onClick={() => removeFromCart(producto.id)}
              >
                🗑️ Eliminar
              </button>
            </div>
          </article>
        ))}
      </div>

      <div className="cart-summary">
        <h2>Total: ${total.toLocaleString("es-AR")}</h2>
        <button type="button" onClick={clearCart}>
          Vaciar carrito
        </button>
      </div>
    </section>
  );
}

export default Cart;
