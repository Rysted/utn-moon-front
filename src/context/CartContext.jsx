import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (products) => {
    const productInCartIndex = cart.findIndex(
      (item) => item.id === products.id
    );
    console.log(productInCartIndex);

    if (productInCartIndex >= 0) {
      const newCart = structuredClone(cart);
      newCart[productInCartIndex].quantity += 1;
      const storage = JSON.stringify(newCart);
      localStorage.setItem("cart", storage);
      return setCart(newCart);
    }
    setCart((prevState) => [
      ...prevState,
      {
        ...products,
        quantity: 1,
      },
    ]);
    const storage = JSON.stringify(cart);
    localStorage.setItem("cart", storage);
  };
  const clearCart = () => {
    setCart([]);
    /* agregar el boton de vaciar carrito */
  };
  const deleteGame = (newArray) => {
    setCart(newArray);
    const storage = JSON.stringify(newArray);
    localStorage.setItem("cart", storage);
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
