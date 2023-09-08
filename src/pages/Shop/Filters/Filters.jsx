import { filterElement } from "./filterElement";
import { FilterItem } from "./FilterItem";
import { useState } from "react";
import "./Filter.css";

const Filters = () => {
  const [activeFilters, setActiveFilters] = useState({
    [filterElement[0].id]: false,
    [filterElement[1].id]: false,
  });
  const [selectedFilter, setSelectedFilter] = useState(7);

  const handleFilterClick = filterName => {
    setActiveFilters(prevFilters => ({
      ...prevFilters,
      [filterName]: !prevFilters[filterName],
    }));
  };

  const handleSelectedClick = filter => {
    // handleFilterClick(filterName);
    setSelectedFilter(filter);
  };

  return (
    <>
      <section className="filters">
        <div className="filters__container container">
          {filterElement.map(filter => (
            <FilterItem
              key={filter.id}
              item={filter}
              isActive={activeFilters[filter.id]}
              onClick={() => handleFilterClick(filter.id)}
            />
          ))}
        </div>
      </section>

      <div
        className={`filter-element__background ${
          activeFilters[filterElement[0].id] ? "" : "filter__element--desactive"
        }`}
      >
        <button
          className="filter__link"
          onClick={() => handleFilterClick(filterElement[0].id)}
        >
          <img
            className="filter__img filter__img--width"
            src="./src/assets/images/icons/arrow-left.svg"
            alt="enlace de volver"
          />
        </button>
        <h4>Filtrar por</h4>
        <div className="filter">
          {filterElement[0].item.map(filter => (
            <div className="filter-dropdown__container" key={filter.id}>
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
                      <li className="filter-dropdown__list">
                        {filter.element}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            // <li
            //   key={filter.id}
            //   className="filter-element__item"
            //   onClick={() =>
            //     handleSelectedClick(filter.id, filterElement[1].id)
            //   }
            // >
            //   <button>{filter.name}</button>
            // </li>
          ))}
        </div>
      </div>

      <div
        className={`filter-order__background ${
          activeFilters[filterElement[1].id] ? "" : "filter__order--desactive"
        }`}
      >
        <button
          className="filter__link"
          onClick={() => handleFilterClick(filterElement[1].id)}
        >
          <img
            className="filter__img filter__img--width"
            src="./src/assets/images/icons/arrow-left.svg"
            alt="enlace de volver"
          />
        </button>
        <h4>Ordenar por</h4>
        <ul>
          {filterElement[1].item.map(filter => (
            <li
              key={filter.id}
              className={`filter-order__item ${
                selectedFilter === filter.id ? "filter-order__item--select" : ""
              }`}
              onClick={() =>
                handleSelectedClick(filter.id, filterElement[1].id)
              }
            >
              <button>{filter.name}</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Filters;
