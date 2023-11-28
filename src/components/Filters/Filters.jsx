import { useState } from "react";

import { FilterItem } from "./FliterItem/FilterItem";
import { FilterElement } from "./FilterMovil/FilterElement";
import { FilterOrder } from "./FilterMovil/FilterOrder";
import { FormFilter } from "./Form/Form";
import { filterItems } from "./FliterItem/filterItems";
import { orderItems } from "./FliterItem/orderItems";

import filtros from "../../assets/images/icons/filtros.svg";
import ordenar from "../../assets/images/icons/arrows.svg";

import left from "../../assets/images/icons/arrow-left.svg";

import "./Filter.css";

const Filters = ({ games, onFilterSubmit, filterValues }) => {
  const [activeFilters, setActiveFilters] = useState({
    [filterItems[0].id]: false,
    [orderItems[0].id]: false,
  });

  const uniqueGenres = Array.from(
    new Set(
      games.reduce((genres, game) => {
        game.genres.forEach(genre => {
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
              filtros={filtros}
            />
          ))}
          {orderItems.map(filter => (
            <FilterItem
              key={filter.id}
              item={filter}
              isActive={activeFilters[filter.id]}
              onClick={() => handleFilterClick(filter.id)}
              filtros={ordenar}
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
              src={left}
              alt="enlace de volver"
            />
          </button>
          <h3>Filtrar por</h3>
          <div className="filter">
            {filterItems[0].item.map(filter => (
              <FilterElement
                key={filter.id}
                filter={filter}
                element={
                  filter.name === "categoria" ? uniqueGenres : uniqueDeveloper
                }
                filterItems={filterItems[0]}
                onClick={onFilterSubmit}
                filterValues={filterValues}
                filterLabel={
                  filter.name === "categoria"
                    ? filterValues.genres
                    : filterValues.developer
                }
                setActiveFilters={setActiveFilters}
              />
            ))}
          </div>
        </div>

        <div
          className={`filter-order__background ${
            activeFilters[orderItems[0].id] ? "" : "filter__order--desactive"
          }`}
        >
          <button
            className="filter__link"
            onClick={() => handleFilterClick(orderItems[0].id)}
          >
            <img
              className="filter__img filter__img--width"
              src={left}
              alt="enlace de volver"
            />
          </button>
          <h3>Ordenar por</h3>
          <ul>
            {orderItems[0].item.map(filter => (
              <FilterOrder
                filter={filter}
                key={filter.id}
                filterValues={filterValues}
                onFilterSubmit={onFilterSubmit}
                filterItems={orderItems[0]}
                activeFilters={activeFilters}
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
