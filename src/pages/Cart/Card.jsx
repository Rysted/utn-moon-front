import { calcPrice } from "../../utils/shopFunctions";

export const Card = ({ game, deleteOne, addProduct }) => {
  const { id, img, title, price, offer, quantity } = game;

  const total = calcPrice(price, offer).toFixed();
  const sliceTitle = (title) => {
    return title.length > 30 ? `${title.slice(0, 30)}...` : title;
  };

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
            <h4 className="prices__title">{sliceTitle(title)}</h4>
            <div className="cart__precio">
              <p className="cart__total">
                $ {total}
                {offer > 0 && <span className="cart__offer">{offer}%</span>}
              </p>
              {offer > 0 && <p className="cart__price">$ {price}</p>}
            </div>
            <div className="cart__kuan">
              Cantidad:{" "}
              <a onClick={() => deleteOne(id)} className="btn__quan">
                -
              </a>
              <span className="cart__quantity">{quantity}</span>
              <a className="btn__quan" onClick={() => addProduct(game)}>
                +
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
