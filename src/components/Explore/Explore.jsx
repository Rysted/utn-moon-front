import { useState } from "react";
import { NavLink } from "react-router-dom";
import arrowDownIcon from "../../assets/images/icons/nav-arrow-down.svg";

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
              <NavLink to="/nuevos" className="explore__link">
                Nuevos
              </NavLink>
            </li>
            <li className="explore__item">
              <NavLink to="/oferta" className="explore__link">
                Ofertas
              </NavLink>
            </li>
            <li className="explore__item">
              <NavLink to="/destacados" className="explore__link">
                Destacados
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
