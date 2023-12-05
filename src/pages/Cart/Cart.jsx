import "./Cart.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext.jsx";
import { useNavigate } from "react-router-dom";

import Left from "../../assets/images/icons/arrow-left.svg";

const jueguito = ({ id, img, title, price, offer, discounted_price }) => {
  const { deleteGame, cart } = useContext(CartContext);
  const total = discounted_price;

  const handleDelete = (id) => {
    const newArray = cart.filter((item) => item.id !== id);
    deleteGame(newArray);
  };

  return (
    <>
      <div>
        <img
          className="game__img"
          src={`/images/products/${img}`}
          alt={`imagen de ${title}`}
          loading="lazy"
        />
        <div className="game__text">
          <h4>{title}</h4>
          <div className="game__prices">
            <p className="game__total">
              $ {total}
              {offer > 0 && <span className="game__offer">{offer}%</span>}
            </p>
            {offer > 0 && <p className="game__price">$ {price}</p>}
          </div>
        </div>
        <button onClick={() => handleDelete(id)}>BORRAr</button>
      </div>
    </>
  );
};

const HandleCart = ({ cart }) => {
  return (
    <article className="cart__art">
      {cart.map((game, index) => (
        <div key={index}>{jueguito(game)}</div>
      ))}
    </article>
  );
};

export const Cart = () => {
  const pagePrev = useNavigate();

  const { cart } = useContext(CartContext);

  const calcularTotal = () => {
    const preciosConDescuento = cart.map(({ discounted_price }) => {
      return discounted_price;
    });

    const total = preciosConDescuento.reduce((acc, precio) => acc + precio, 0);

    return total;
  };

  return (
    <main className="cart">
      <div className="details__preview">
        <button
          className="details__link"
          onClick={() => pagePrev("/shop")}
          aria-label="enlace de volver"
        >
          <img
            className="details__img"
            src={Left}
            alt="flecha hacia la izquierda"
          />
          <p>Tienda</p>
        </button>
        <p className="details__icon">&#62;</p>
      </div>

      <h2 className="cart__title">💖My Little Cart uwu7💖</h2>
      <section className="cart__cont">
        <article className="cart__art">
          <HandleCart cart={cart} />
        </article>

        <div>PRECIO TOTAL:{calcularTotal()}</div>

        <a className="cart__btn" href="">
          Finalizar Compra
        </a>
      </section>
    </main>
  );
};
