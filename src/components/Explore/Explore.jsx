import { useState } from "react";
import { Link } from "react-router-dom";
import arrowDownIcon from "./../../assets/images/icons/nav-arrow-down.svg";

import "./Explore.css";

export const Explore = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMouseClick = () => {
    return setShowMenu(!showMenu);
  };

  const handleMouseLeave = () => {
    return setShowMenu(false);
  };

  return (
    <div
      className="explore"
      onClick={handleMouseClick}
      onMouseLeave={handleMouseLeave}
    >
      <div className="explore__select">
        <span>Descubrir</span>
        <img
          src={arrowDownIcon}
          alt="Flecha para mostrar Menú"
          className={`explore__icon--arrowDown ${
            showMenu && "explore__icon--rotate"
          }`}
        />
        <nav className={`explore__dropdown ${showMenu && "explore__open"}`}>
          <ul className="explore__list">
            <li className="explore__item">
              <Link to="/shop?sortOrder=ASC" className="explore__link">
                Más baratos
              </Link>
            </li>
            <li className="explore__item">
              <Link
                to="/shop?publisher=Xbox+Game+Studios"
                className="explore__link"
              >
                Xbox Game Studios
              </Link>
            </li>
            <li className="explore__item">
              <Link to="/destacados" className="explore__link">
                Destacados
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
