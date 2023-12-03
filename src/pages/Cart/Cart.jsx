import "./Cart.css";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext.jsx";
import { Card } from "./Card.jsx";
import Left from "../../assets/images/icons/arrow-left.svg";

export const Cart = () => {
  const {
    cart: cartItems,
    removeFromCart,
    clearCart,
  } = useContext(CartContext);
  const deleteOne = (id) => removeFromCart(id);
  const pagePrev = useNavigate();
  const calcularTotal = () => {
    const preciosConDescuento = cartItems.map((juego) => {
      const descuento = (juego.offer / 100) * juego.price;
      return juego.price - descuento;
    });

    const total = preciosConDescuento.reduce((acc, precio) => acc + precio, 0);

    return total;
  };

  return (
    <main>
      <section className="cart">
        <div className="cart__preview">
          <button
            className="cart__link"
            onClick={() => pagePrev("/home")}
            aria-label="enlace de volver"
          >
            <img
              className="cart__back"
              src={Left}
              alt="flecha hacia la izquierda"
            />
            <p>Tienda</p>
          </button>
          <p className="cart__icon">&#62;</p>
          <p className="cart__cart">Carrito</p>
        </div>
        <h2 className="cart__title">💖My Little Cart uwu7💖</h2>
        <section className="cart__cont">
          <article className="cart__art">
            {cartItems.map((cartItem, index) => (
              <Card key={index} game={cartItem} deleteOne={deleteOne} />
            ))}
          </article>

          <div className="cart__to">
            PRECIO TOTAL: <span className="cart__deco">${calcularTotal()}</span>
          </div>

          <a className="cart__btn" href="">
            Finalizar Compra
          </a>
          <a className="cart__btn--clear" href="" onClick={clearCart}>
            Limpiar Carrito
          </a>
        </section>
      </section>
    </main>
  );
};
