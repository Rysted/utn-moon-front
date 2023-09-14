import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import { NavLink } from "react-router-dom";

import { Explore } from "./Explore";
import searchIcon from "../../assets/images/icons/search.svg";

export const Form = ({}) => {
  const { getGamesFilter, searchQuery, filteredProducts, onCloseList } =
    useContext(ProductsContext);

  const displayedProducts = filteredProducts.slice(0, 3);

  return (
    <form action="" className="header__form">
      <div className="header__form-container">
        <div className="header__form-label">
          <input
            value={searchQuery}
            onChange={(e) => getGamesFilter(e.target.value.toLowerCase())}
            type="search"
            placeholder="buscar en la tienda"
            name="search"
            id="search"
            className="header__form-input"
          />
          {!searchQuery && (
            <img
              src={searchIcon}
              alt="Icono de búsqueda"
              className="header__form-icon"
            />
          )}
          {searchQuery && (
            <nav className="product-list">
              <ul className="product-list__items">
                {displayedProducts.map(({ id, img, title }) => (
                  <li key={id} className="product-list__item">
                    <NavLink
                      to={`detail/${id}`}
                      className="product-list__link"
                      onClick={onCloseList}
                    >
                      <img
                        src={img}
                        alt={title}
                        className="product-list__image"
                      />
                      <span className="product-list__name">
                        {title.length <= 50
                          ? title
                          : `${title.slice(0, 50)}...`}
                      </span>
                    </NavLink>
                  </li>
                ))}
                <li className="product-list__results">
                  <span className="product-list__name">
                    Resultados: {filteredProducts.length}
                  </span>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </div>
      <Explore />
    </form>
  );
};
