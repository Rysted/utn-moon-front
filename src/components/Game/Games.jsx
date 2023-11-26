import { calcPrice } from "../../utils/shopFunctions";
import { Link, Outlet } from "react-router-dom";
import "./Games.css";

export const Games = ({ games }) => {
  const sliceTitle = (title) => {
    return title.length > 30 ? `${title.slice(0, 30)}...` : title;
  };

  const Game = ({ id, img, title, price, offer }) => {
    const total = calcPrice(price, offer).toFixed();

    return (
      <>
        <img
          className="game__img"
          src={`/images/products/${img}`}
          alt={`imagen de ${title}`}
          loading="lazy"
        />
        <div className="game__text">
          <h4>{sliceTitle(title)}</h4>
          <div className="game__prices">
            <p className="game__total">
              $ {total}
              {offer > 0 && <span className="game__offer">{offer}%</span>}
            </p>
            {offer > 0 && <p className="game__price">$ {price}</p>}
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      {games.map(({ id, img, title, price, offer }, index) => (
        <Link to={`/detail/${id}`} className="game" key={index}>
          <Game id={id} img={img} title={title} price={price} offer={offer} />
        </Link>
      ))}
      <Outlet />
    </>
  );
};
