import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (products) => {
    const productInCartIndex = cart.findIndex(
      (item) => item.id === products.id
    );

    if (productInCartIndex >= 0) {
      const newCart = structuredClone(cart);
      newCart[productInCartIndex].quantity += 1;
      return setCart(newCart);
    }
    setCart((prevState) => [
      ...prevState,
      {
        ...products,
        quantity: 1,
      },
    ]);
  };
  const clearCart = () => {
    setCart([]);
  };
  const deleteGame = () => {
    /* Hacer la logika para borrar spesifikamente el objeto q se clickea */
    /*   setCart([]); */
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        clearCart,
        deleteGame,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
