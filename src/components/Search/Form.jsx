import { Explore } from "./Explore";

import searchIcon from "../../assets/images/icons/search.svg";

export const Form = ({ handleInputChange, searchQuery, products }) => {
  return (
    <form action="" className="header__form">
      <div className="header__form-container">
        <label htmlFor="search" className="header__form-label">
          <input
            onChange={handleInputChange}
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
                {products.map(({ id, imageUrl, name }) => (
                  <li key={id} className="product-list__item">
                    <a href={`detail/${id}`} className="product-list__link">
                      <img
                        src={imageUrl}
                        alt={name}
                        className="product-list__image"
                      />
                      <span className="product-list__name">{name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </label>
      </div>
      <Explore />
    </form>
  );
};
