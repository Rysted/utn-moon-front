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
        <Link
          key={game.id}
          to={game.id !== "newGame" ? `/detail/${game.id}` : "/create"}
          className={game.id !== "newGame" ? `game` : "game game--color"}
        >
          <img
            className="game__img"
            src={`${import.meta.env.VITE_API}/images/${game.img}`}
            alt={
              game.id !== "newGame"
                ? `imagen de ${game.title}`
                : "imagen de crear juego"
            }
            loading="lazy"
          />
          <div className="game__text">
            {game.id !== "newGame" ? (
              <>
                <h4>{sliceTitle(game.title)}</h4>
                <GamePrice price={game.price} offer={game.offer} />
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
