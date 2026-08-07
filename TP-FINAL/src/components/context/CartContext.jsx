import { createContext, useContext, useEffect, useMemo, useState } from "react";

const CartContext = createContext(null);

export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem("tp-final-cart");
      return savedCart ? JSON.parse(savedCart) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("tp-final-cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (producto) => {
    setCart((currentCart) => {
      const existe = currentCart.find((item) => item.id === producto.id);

      if (existe) {
        return currentCart.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item,
        );
      }

      return [...currentCart, { ...producto, cantidad: 1 }];
    });
  };

  const decreaseQuantity = (id) => {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === id ? { ...item, cantidad: item.cantidad - 1 } : item,
        )
        .filter((item) => item.cantidad > 0),
    );
  };

  const removeFromCart = (id) => {
    setCart((currentCart) => currentCart.filter((item) => item.id !== id));
  };

  const clearCart = () => setCart([]);

  const total = useMemo(
    () => cart.reduce((acc, item) => acc + Number(item.precio || 0) * item.cantidad, 0),
    [cart],
  );

  const itemCount = useMemo(
    () => cart.reduce((acc, item) => acc + item.cantidad, 0),
    [cart],
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        decreaseQuantity,
        removeFromCart,
        clearCart,
        total,
        itemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
