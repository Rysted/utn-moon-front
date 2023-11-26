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
    /* agregar el boton de vaciar carrito */
  };
  const deleteGame = (newArray) => {
    setCart(newArray);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        clearCart,
        deleteGame,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
