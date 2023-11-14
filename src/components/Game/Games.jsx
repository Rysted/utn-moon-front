import { calcPrice } from "../../utils/shopFunctions";
import { Link, Outlet } from "react-router-dom";
import "./Games.css";

export const Games = ({ games }) => {
  const sliceTitle = (title) => {
    return title.length > 30 ? `${title.slice(0, 30)}...` : title;
  };

  const GamePrice = ({ price, offer }) => {
    const total = calcPrice(price, offer).toFixed();

    return (
      <div className="game__prices">
        <p className="game__total">
          $ {total}
          {offer > 0 && <span className="game__offer">{offer}%</span>}
        </p>
        {offer > 0 && <p className="game__price">$ {price}</p>}
      </div>
    );
  };

  return (
    <>
      {games.map((game) => (
        <Link to={`/detail/${game.id}`} className="game" key={game.id}>
          <img
            className="game__img"
            src={`/images/products/${game.img}`}
            alt={`imagen de ${game.title}`}
            loading="lazy"
          />
          <div className="game__text">
            <h4>{sliceTitle(game.title)}</h4>
            <GamePrice price={game.price} offer={game.offer} />
          </div>
        </Link>
      ))}
      <Outlet />
    </>
  );
};
