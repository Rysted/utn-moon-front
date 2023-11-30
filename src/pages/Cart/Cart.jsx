import "./Cart.css";
import { calcPrice } from "../../utils/shopFunctions";
import { ProductsContext } from "../../context/ProductsContext";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext.jsx";
import Left from "../../assets/images/icons/arrow-left.svg";

const jueguito = (id, img, title, price, offer) => {
  /* if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
}; */

  const { deleteGame, cart } = useContext(CartContext);
  const total = calcPrice(price, offer).toFixed();

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
      {cart.map(({ id, img, title, price, offer }) => (
        <div key={id}>{jueguito(id, img, title, price, offer)}</div>
      ))}
    </article>
  );
};

export const Cart = () => {
  const { cart } = useContext(CartContext);
  const calcularTotal = () => {
    const preciosConDescuento = cart.map((juego) => {
      const descuento = (juego.offer / 100) * juego.price;
      return juego.price - descuento;
    });

    const total = preciosConDescuento.reduce((acc, precio) => acc + precio, 0);

    return total;
  };

  return (
    <main className="cart">
      {/*   <div className="details__preview">
        <button
          className="details__link"
          onClick={() => pagePrev("/home")}
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
      </div> */}
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
