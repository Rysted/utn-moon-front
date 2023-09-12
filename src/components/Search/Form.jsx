import { Explore } from "./Explore";
import searchIcon from "../../assets/images/icons/search.svg";

export const Form = ({ handleInputChange, searchQuery, products }) => {
  const displayedProducts = products.slice(0, 3);

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
                {displayedProducts.map(({ id, img, title }) => (
                  <li key={id} className="product-list__item">
                    <a href={`detail/${id}`} className="product-list__link">
                      <img
                        src={img}
                        alt={title}
                        className="product-list__image"
                      />
                      <span className="product-list__name">{title}</span>
                    </a>
                  </li>
                ))}
                <li className="product-list__item">
                  <a
                    href=""
                    className="product-list__link product-list__results"
                  >
                    <span className="product-list__name">
                      Resultados totales: {products.length}
                    </span>
                  </a>
                </li>
              </ul>
            </nav>
          )}
        </label>
      </div>
      <Explore />
    </form>
  );
};
