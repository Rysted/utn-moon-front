import { FilterElement } from "./FilterElement";
import { FilterOrder } from "./FilterOrder";
import { filterItems } from "../FliterItem/filterItems";
import { FilterItem } from "../FliterItem/FilterItem";

export const FilterMovil = (
  activeFilters,
  handleFilterClick,
  selectedFilter,
  handleSelectedClick,
  genres,
  developer,
  publisher
) => {
  return (
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
        <h3>Filtrar por</h3>
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
        <h3>Ordenar por</h3>
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
  );
};
