import { Link, Outlet } from "react-router-dom";
import "./Games.css";

export const Games = ({ games }) => {
  const sliceTitle = (title) => {
    return title.length > 30 ? `${title.slice(0, 30)}...` : title;
  };

  const GamePrice = ({ price, offer, discounted_price }) => {
    return (
      <div className="game__prices">
        {offer > 0 ? (
          <>
            <p className="game__total">
              $ {discounted_price}
              <span className="game__offer">{offer}%</span>
            </p>
          </>
        ) : (
          <p className="game__total">$ {price}</p>
        )}
        {offer > 0 && <p className="game__price">$ {price}</p>}
      </div>
    );
  };

  return (
    <>
      {games.map(({ id, img, title, price, offer, discounted_price }) => (
        <Link
          key={id}
          to={id !== "AddProduct" ? `/detail/${id}` : "/create"}
          className={id !== "AddProduct" ? `game` : "game game--color"}
        >
          <img
            className="game__img"
            src={`${import.meta.env.VITE_API}/images/${img}`}
            alt={
              id !== "AddProduct"
                ? `imagen de ${title}`
                : "imagen de crear juego"
            }
            loading="lazy"
          />
          <div className="game__text">
            {id !== "AddProduct" ? (
              <>
                <h4>{sliceTitle(title)}</h4>
                <GamePrice
                  price={price}
                  offer={offer}
                  discounted_price={discounted_price}
                />
              </>
            ) : (
              <>
                <h4 className="game__title">Agregar Nuevo Juego</h4>
              </>
            )}
          </div>
        </Link>
      ))}
      <Outlet />
    </>
  );
};
