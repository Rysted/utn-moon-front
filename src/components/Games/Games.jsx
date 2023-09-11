import { Link, Outlet } from "react-router-dom";

import { calcPrice } from "../../utils/functions/shopFunctions";
import "./Games.css";

export const Games = ({ games }) => {
  return (
    <div className="games">
      {games.map(game => (
        <Link to={`/shop/${game.id}`} className="game" key={game.id}>
          <img
            className="game__img"
            src={game.img}
            alt={`imagen de ${game.title}`}
          />
          <div className="game__text">
            <h4>{game.title}</h4>
            <div className="game__prices">
              <p className="game__total">
                $ {calcPrice(game.price, game.offer)}
                <span className="game__offer">{game.offer} % off</span>
              </p>
              <p className="game__price">$ {game.price}</p>
            </div>
            <div className="game__categories">
              {game.genre.map((category, index) => (
                <p key={index}>{category}</p>
              ))}
            </div>
          </div>
        </Link>
      ))}
      <Outlet />
    </div>
  );
};

export default Games;
