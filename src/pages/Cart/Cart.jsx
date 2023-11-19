import "./Cart.css";
import { ProductsContext } from "../../context/ProductsContext";
import { useContext } from "react";
import { Games } from "../../components/Game/Games.jsx";
import { CartContext } from "../../context/CartContext.jsx";

/*

  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
};
 */

export const Cart = () => {
  const { products, isLoading, error } = useContext(ProductsContext);
  const { cart } = useContext(CartContext);

  return (
    <main className="cart">
      <h2 className="cart__title">💖My Little Cart uwu7💖</h2>
      <section className="cart__cont">
        <article className="cart__art">
          <Games games={cart} />
        </article>
        <a className="cart__btn" href="">
          Finalizar Compra
        </a>
      </section>
    </main>
  );
};
