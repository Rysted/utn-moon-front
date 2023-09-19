import React from "react";

export function FilterElement({
  filter,
  element,
  filterValues,
  onClick,
  setActiveFilters,
  filterItems,
  filterLabel,
}) {
  const handleItemClick = itemValue => {
    // Primero, llama a la función onClick existente para manejar la lógica actual
    onClick({ ...filterValues, [filter.value]: itemValue.toLowerCase() });

    // Luego, establece el filtro correspondiente en activeFilters como true
    setActiveFilters(prevFilters => ({
      ...prevFilters,
      [filterItems.id]: !prevFilters,
    }));
  };

  return (
    <div className="filter-dropdown__container">
      <div className="filter-dropdown">
        <input
          className="filter-dropdown__checkbox filter-dropdown__checkbox--none"
          type="checkbox"
          id={filter.name}
        />
        <label className="filter-dropdown__menu" htmlFor={filter.name}>
          <span className="filter-dropdown__title">{filter.name}</span>
          <span className="filter-dropdown__icon filter-dropdown__icon--hidden">
            <img
              className="filter-dropdown__img"
              src="./src/assets/images/icons/arrow-top.svg"
              alt="flecha hacia abajo"
            />
          </span>
          <span className="filter-dropdown__icon filter-dropdown__icon--show">
            <img
              className="filter-dropdown__img"
              src="./src/assets/images/icons/arrow-bottom.svg"
              alt="flecha hacia abajo"
            />
          </span>
        </label>
        <div className="filter-dropdown__content">
          <div className="filter-dropdown__info">
            <ul className="filter-dropdown__lists">
              <li
                key="all"
                value=""
                onClick={() => handleItemClick("")}
                className={`filter-dropdown__list ${
                  "" === filterLabel ? "filter-dropdown__list--select" : ""
                }`}
              >
                <button>Cualquier {filter.name}</button>
              </li>

              {element.map((item, index) => (
                <li
                  key={index}
                  value={item.toLowerCase()}
                  onClick={() => handleItemClick(item)}
                  className={`filter-dropdown__list ${
                    item.toLowerCase() === filterLabel
                      ? "filter-dropdown__list--select"
                      : ""
                  }`}
                >
                  <button>{item}</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
