import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const existStorage = localStorage.getItem("cart");
    return existStorage ? JSON.parse(existStorage) : [];
  });

  const addToCart = product => {
    const existItem = cart.find(item => item.id === product.id);
    console.log(existItem);

    if (existItem) {
      const newCart = cart.map(cartItem => {
        return cartItem.id === product.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem;
      });

      localStorage.setItem("cart", JSON.stringify(newCart));
      setCart(newCart);
    } else {
      const newCart = [...cart, { ...product, quantity: 1 }];
      localStorage.setItem("cart", JSON.stringify(newCart));
      setCart(newCart);
    }
  };

  const removeFromCart = productId => {
    const newCart = cart.map(cartItem => {
      return cartItem.id === productId
        ? {
            ...cartItem,
            quantity: cartItem.quantity > 1 ? cartItem.quantity - 1 : 0,
          }
        : cartItem;
    });

    const filterCart = newCart.filter(cartItem => cartItem.quantity > 0);
    setCart(filterCart);

    localStorage.setItem("cart", JSON.stringify(filterCart));
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
    /* agregar el boton de vaciar carrito */
  };

  const contextValue = {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}
