import { calcPrice } from "../../utils/shopFunctions";
import Paper from "../../assets/images/icons/papelera.svg";

export const Card = ({ game, deleteOne }) => {
  const { id, img, title, price, offer, quantity } = game;

  const total = calcPrice(price, offer).toFixed();

  return (
    <>
      <div className="cart__card">
        <img
          className="cart__img"
          src={`${import.meta.env.VITE_API}/images/${img}`}
          alt={`imagen de ${title}`}
          loading="lazy"
        />
        <div className="cart__div">
          <div className="cart__text">
            <h4 className="prices__title">{title}</h4>
            <div className="cart__precio">
              <p className="cart__total">
                $ {total}
                {offer > 0 && <span className="cart__offer">{offer}%</span>}
              </p>
              {offer > 0 && <p className="cart__price">$ {price}</p>}
            </div>
            <button className="cart__paper" onClick={() => deleteOne(id)}>
              {/* me falta agregar la kuantiti */}
              <img
                className="cart__img--paper"
                src={Paper}
                alt="icono de eliminar"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
