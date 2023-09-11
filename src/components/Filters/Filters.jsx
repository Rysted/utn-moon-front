import { FilterElement } from "./FilterElement/FilterElement";
import { FilterOrder } from "./FilterOrder/FilterOrder";
import { filterItems } from "./FliterItem/filterItems";
import { FilterItem } from "./FliterItem/FilterItem";
import { Form } from "../Form/Form";
import { useState } from "react";
import "./Filter.css";

const Filters = () => {
  const [activeFilters, setActiveFilters] = useState({
    [filterItems[0].id]: false,
    [filterItems[1].id]: false,
  });
  const [selectedFilter, setSelectedFilter] = useState(7);

  const handleFilterClick = filterName => {
    setActiveFilters(prevFilters => ({
      ...prevFilters,
      [filterName]: !prevFilters[filterName],
    }));
  };

  const handleSelectedClick = (filter, filterName) => {
    handleFilterClick(filterName);
    setSelectedFilter(filter);
  };

  return (
    <>
      <section className="filters">
        <div className="filters__container">
          {filterItems.map(filter => (
            <FilterItem
              key={filter.id}
              item={filter}
              isActive={activeFilters[filter.id]}
              onClick={() => handleFilterClick(filter.id)}
            />
          ))}
        </div>
        <div
          className={`filter-element__background ${
            activeFilters[filterItems[0].id] ? "" : "filter__element--desactive"
          }`}
        >
          <button
            className="filter__link"
            onClick={() => handleFilterClick(filterItems[0].id)}
          >
            <img
              className="filter__img filter__img--width"
              src="./src/assets/images/icons/arrow-left.svg"
              alt="enlace de volver"
            />
          </button>
          <h4>Filtrar por</h4>
          <div className="filter">
            {filterItems[0].item.map(filter => (
              <FilterElement
                name={filter.name}
                key={filter.id}
                element={filter.element}
              />
            ))}
          </div>
        </div>

        <div
          className={`filter-order__background ${
            activeFilters[filterItems[1].id] ? "" : "filter__order--desactive"
          }`}
        >
          <button
            className="filter__link"
            onClick={() => handleFilterClick(filterItems[1].id)}
          >
            <img
              className="filter__img filter__img--width"
              src="./src/assets/images/icons/arrow-left.svg"
              alt="enlace de volver"
            />
          </button>
          <h4>Ordenar por</h4>
          <ul>
            {filterItems[1].item.map(filter => (
              <FilterOrder
                key={filter.id}
                filter={filter}
                selectedFilter={selectedFilter}
                filterElementId={filterItems[1].id}
                handleSelectedClick={handleSelectedClick}
              />
            ))}
          </ul>
        </div>
      </section>
      <Form />
    </>
  );
};

export default Filters;
