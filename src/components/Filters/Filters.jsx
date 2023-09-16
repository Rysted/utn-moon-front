import { useState } from "react";
import { FilterMovil } from "./FilterMovil/FilterMovil";
import { filterItems } from "./FliterItem/filterItems";
import { FormFilter } from "./FilterPc/Form";
import "./Filter.css";

const Filters = ({
  games,
  onMinPriceChange,
  onMaxPriceChange,
  onNameGameSubmit,
}) => {
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

  const [activeFilters, setActiveFilters] = useState({
    [filterItems[0].id]: false,
    [filterItems[1].id]: false,
  });

  const [selectedFilter, setSelectedFilter] = useState(7);

  return (
    <>
      <FilterMovil
        activeFilters={activeFilters}
        handleFilterClick={filterName => {
          setActiveFilters(prevFilters => ({
            ...prevFilters,
            [filterName]: !prevFilters[filterName],
          }));
        }}
        selectedFilter={selectedFilter}
        handleSelectedClick={(filter, filterName) => {
          setActiveFilters(prevFilters => ({
            ...prevFilters,
            [filterName]: !prevFilters[filterName],
          }));
          setSelectedFilter(filter);
        }}
        genres={uniqueGenres}
        developer={uniqueDeveloper}
        publisher={uniquePublishers}
      />
      <FormFilter
        genres={uniqueGenres}
        developer={uniqueDeveloper}
        publisher={uniquePublishers}
        onMinPriceChange={onMinPriceChange}
        onMaxPriceChange={onMaxPriceChange}
        onNameGameSubmit={onNameGameSubmit}
      />
    </>
  );
};

export default Filters;
