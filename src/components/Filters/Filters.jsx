import { FilterElement } from "./FilterMovil/FilterElement";
import { FilterOrder } from "./FilterMovil/FilterOrder";
import { filterItems } from "./FliterItem/filterItems";
import { FilterItem } from "./FliterItem/FilterItem";
import { FormFilter } from "./Form/Form";
import { useState } from "react";
import "./Filter.css";

const Filters = ({ games, onFilterSubmit, filterValues }) => {
  // const [selectedFilter, setSelectedFilter] = useState(7);
  const [activeFilters, setActiveFilters] = useState({
    [filterItems[0].id]: false,
    [filterItems[1].id]: false,
  });

  const uniqueGenres = Array.from(
    new Set(
      games.reduce((genres, game) => {
        game.genre.forEach(genre => {
          genres.add(genre);
        });
        return genres;
      }, new Set())
    )
  );

  const uniqueDeveloper = Array.from(
    new Set(games.map(game => game.developer))
  );

  const uniquePublishers = Array.from(
    new Set(games.map(game => game.publisher))
  );

  const handleFilterClick = filterName => {
    setActiveFilters(prevFilters => ({
      ...prevFilters,
      [filterName]: !prevFilters[filterName],
    }));
  };

  const handleSelectedClick = (filter, filterName) => {
    setActiveFilters(prevFilters => ({
      ...prevFilters,
      [filterName]: !prevFilters[filterName],
    }));
    // setSelectedFilter(filter);
    // console.log(filter);
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
          <h3>Filtrar por</h3>
          <div className="filter">
            {filterItems[0].item.map(filter => (
              <FilterElement
                key={filter.id}
                name={filter.name}
                element={
                  filter.name === "categoria" ? uniqueGenres : uniqueDeveloper
                }
                value={filter.value}
                onClick={onFilterSubmit}
                filterValues={filterValues}
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
                filterName={filterItems[1].value}
                hola={filterItems[1]}
                filterValue={filter.value}
                filterValues={filterValues}
                key={filter.id}
                filter={filter}
                activeFilters={activeFilters}
                filterElementId={filterItems[1].id}
                onFilterSubmit={onFilterSubmit}
                handleFilterClick={handleFilterClick}
              />
            ))}
          </ul>
        </div>
      </section>

      <FormFilter
        filterValues={filterValues}
        genres={uniqueGenres}
        developer={uniqueDeveloper}
        publisher={uniquePublishers}
        onFilterSubmit={onFilterSubmit}
      />
    </>
  );
};

export default Filters;
