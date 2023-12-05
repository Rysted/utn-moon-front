import { useState } from "react";
import "./FilterPhone.css";

export const FilterPhone = ({
  genreData,
  companysData,
  handleInputChange,
  filtersApplied,
  handleSubmit,
  handleReset,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  if (isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return (
    <section className="filter-phone">
      <article className="filter-phone__open-container">
        <button className="filter-phone__button" onClick={handleToggle}>
          <img
            src="./icons/filter.svg"
            alt="Icono para los filtros"
            className="filter-phone__icon"
          />
          <span className="filter-phone__text">Filtros</span>
        </button>
      </article>

      <article
        className={`filter-phone__form  ${
          isOpen ? "filter-phone--open" : "filter-phone--close"
        }`}
      >
        <form onSubmit={handleSubmit} className="filter-phone__form-container">
          <div className="filter-phone__close-button-container">
            <button
              className="filter-phone__close-button"
              title="Cerrar filtros"
              onClick={handleToggle}
            >
              <img
                src="./icons/arrow-left.svg"
                alt="Icono para regresar"
                className="filter-phone__icon-back"
              />
            </button>
            <div className="filter-phone__action-buttons">
              <button
                title="Limpiar filtros"
                className="filter-phone__action-button filter-phone--primary"
                onClick={(e) => handleReset(e)}
              >
                Limpiar
              </button>
              <button
                title="Filtrar resultados"
                className="filter-phone__action-button filter-phone--secondary"
                onClick={handleToggle}
              >
                Filtrar
              </button>
            </div>
          </div>

          <div className="filter-phone__form-content">
            <div className="filter-phone-container">
              <button className="filter-phone__button-container">
                <div className="filter-phone__info-container">
                  <span className="filter-phone__field">Buscar por nombre</span>
                  <span className="filter-phone__applied">
                    {filtersApplied.searchTerm}
                  </span>
                </div>
                <div className="filter-phone__icon-container">
                  <img
                    src="./icons/nav-arrow-down.svg"
                    alt="Icono para abrir el filtro"
                    className="filter-phone__icon-img"
                  />
                </div>
              </button>
              <label
                htmlFor="searchTerm"
                className="filter-search__label filter-phone__hide"
              >
                <input
                  id="searchTerm"
                  type="search"
                  name="searchTerm"
                  placeholder="Buscar por nombre..."
                  className="filter-search__input"
                  minLength={1}
                  maxLength={255}
                  value={filtersApplied.searchTerm}
                  onChange={handleInputChange}
                />
              </label>
            </div>
            <div className="filter-phone-container">
              <button className="filter-phone__button-container">
                <div className="filter-phone__info-container">
                  <span className="filter-phone__field">Ordenar por</span>
                  <span className="filter-phone__applied">
                    {filtersApplied.sortOrder === "ASC"
                      ? "Precio Ascendente"
                      : "Precio Descendente"}
                  </span>
                </div>
                <div className="filter-phone__icon-container">
                  <img
                    src="./icons/nav-arrow-down.svg"
                    alt="Icono para abrir el filtro"
                    className="filter-phone__icon-img"
                  />
                </div>
              </button>
              <div
                htmlFor="sortOrder"
                className="filter-order__label filter-phone__hide"
              >
                <label htmlFor="ASC" className="filter-order__option-label">
                  <input
                    id="ASC"
                    type="radio"
                    name="sortOrder"
                    value="ASC"
                    checked={filtersApplied.sortOrder === "ASC"}
                    className="filter-order__option"
                    onChange={handleInputChange}
                  />
                  <span className="filter-order__option-custom"></span>
                  <span className="filter-order__option-text">Ascendente</span>
                </label>
                <label htmlFor="DESC" className="filter-order__option-label">
                  <input
                    id="DESC"
                    type="radio"
                    name="sortOrder"
                    value="DESC"
                    checked={filtersApplied.sortOrder === "DESC"}
                    className="filter-order__option"
                    onChange={handleInputChange}
                  />
                  <span className="filter-order__option-custom"></span>
                  <span className="filter-order__option-text">Descendente</span>
                </label>
              </div>
            </div>
            <div className="filter-phone-container">
              <button className="filter-phone__button-container">
                <div className="filter-phone__info-container">
                  <span className="filter-phone__field">
                    Seleccionar genero
                  </span>
                  <span className="filter-phone__applied">
                    {filtersApplied.genre}
                  </span>
                </div>
                <div className="filter-phone__icon-container">
                  <img
                    src="./icons/nav-arrow-down.svg"
                    alt="Icono para abrir el filtro"
                    className="filter-phone__icon-img"
                  />
                </div>
              </button>
              <label
                htmlFor="genre"
                className="filter-genre__label filter-phone__hide"
              >
                <select
                  name="genre"
                  className="filter-genre__select"
                  value={filtersApplied.genre}
                  onChange={handleInputChange}
                >
                  <option value="" className="filter-genre__option">
                    Todos
                  </option>
                  {genreData.map((genre, index) => (
                    <option
                      key={index}
                      value={genre._name}
                      className="filter-genre__option"
                    >
                      {genre._name}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <div className="filter-phone-container">
              <button className="filter-phone__button-container">
                <div className="filter-phone__info-container">
                  <span className="filter-phone__field">
                    Seleccionar publisher
                  </span>
                  <span className="filter-phone__applied">
                    {filtersApplied.publisher}
                  </span>
                </div>
                <div className="filter-phone__icon-container">
                  <img
                    src="./icons/nav-arrow-down.svg"
                    alt="Icono para abrir el filtro"
                    className="filter-phone__icon-img"
                  />
                </div>
              </button>
              <label
                htmlFor="publisher"
                className="filter-publisher__label filter-phone__hide"
              >
                <select
                  name="publisher"
                  className="filter-publisher__select"
                  value={filtersApplied.publisher}
                  onChange={handleInputChange}
                >
                  <option value="" className="filter-publisher__option">
                    Todos
                  </option>
                  {companysData.map((company, index) => (
                    <option
                      key={index}
                      value={company._name}
                      className="filter-publisher__option"
                    >
                      {company._name}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <div className="filter-phone-container">
              <button className="filter-phone__button-container">
                <div className="filter-phone__info-container">
                  <span className="filter-phone__field">
                    Buscar por precio minimo
                  </span>
                  <span className="filter-phone__applied">
                    {filtersApplied.developer}
                  </span>
                </div>
                <div className="filter-phone__icon-container">
                  <img
                    src="./icons/nav-arrow-down.svg"
                    alt="Icono para abrir el filtro"
                    className="filter-phone__icon-img"
                  />
                </div>
              </button>
              <label
                htmlFor="developer"
                className="filter-developer__label filter-phone__hide"
              >
                <select
                  name="developer"
                  className="filter-developer__select"
                  value={filtersApplied.developer}
                  onChange={handleInputChange}
                >
                  <option value="" className="filter-developer__option">
                    Todos
                  </option>
                  {companysData.map((company, index) => (
                    <option
                      key={index}
                      value={company._name}
                      className="filter-developer__option"
                    >
                      {company._name}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="filter-phone-container">
              <button className="filter-phone__button-container">
                <div className="filter-phone__info-container">
                  <span className="filter-phone__field">Precio</span>
                  <span className="filter-phone__applied">
                    {filtersApplied.min === "" && filtersApplied.max === "" ? (
                      ""
                    ) : (
                      <>
                        {filtersApplied.min === ""
                          ? "Desde $0"
                          : `Desde $${filtersApplied.min}`}
                        {filtersApplied.max === ""
                          ? " hasta $999999"
                          : ` hasta $${filtersApplied.max}`}
                      </>
                    )}
                  </span>
                </div>
                <div className="filter-phone__icon-container">
                  <img
                    src="./icons/nav-arrow-down.svg"
                    alt="Icono para abrir el filtro"
                    className="filter-phone__icon-img"
                  />
                </div>
              </button>
              <div className="filter-price__container">
                <label htmlFor="min" className="filter-min__label">
                  <input
                    id="min"
                    type="number"
                    name="min"
                    placeholder="Minimo"
                    className="filter-min__input filter-price__input"
                    value={filtersApplied.min}
                    onChange={handleInputChange}
                  />
                </label>
                <span>-</span>
                <label htmlFor="max" className="filter-max__label">
                  <input
                    id="max"
                    type="number"
                    name="max"
                    placeholder="Maximo"
                    maxLength={4}
                    className="filter-max__input filter-price__input"
                    value={filtersApplied.max}
                    onChange={handleInputChange}
                  />
                </label>
              </div>
            </div>
          </div>
        </form>
      </article>
    </section>
  );
};
