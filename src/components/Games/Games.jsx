import { calcPrice } from "../../utils/shopFunctions";
import { Link, Outlet } from "react-router-dom";
import "./Games.css";

export const Games = ({ games }) => {
  const sliceTitle = (title) => {
    return title.length > 30 ? `${title.slice(0, 30)}...` : title;
  };

  return (
    <>
      {games.map((game) => (
        <Link to={`/detail/${game.id}`} className="game" key={game.id}>
          <img
            className="game__img"
            src={`./images/products/${game.img}`}
            alt={`imagen de ${game.title}`}
            loading="lazy"
          />
          <div className="game__text">
            <h4>{sliceTitle(game.title)}</h4>
            <div className="game__prices">
              {game.offer > 0 ? (
                <>
                  <p className="game__total">
                    $ {calcPrice(game.price, game.offer).toFixed()}
                    <span className="game__offer">{game.offer}%</span>
                  </p>
                  <p className="game__price">$ {game.price}</p>
                </>
              ) : (
                <>
                  <p className="game__total">
                    $ {calcPrice(game.price, game.offer)}
                  </p>
                </>
              )}
            </div>
          </div>
        </Link>
      ))}
      <Outlet />
    </>
  );
};

export default Games;
