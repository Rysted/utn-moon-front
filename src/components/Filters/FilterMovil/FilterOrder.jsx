import { useId } from "react";

export function FilterOrder({
  filter,
  // selectedFilter,
  handleFilterClick,
  onFilterSubmit,
  filterElementId,
  filterValue,
  filterName,
  filterValues,
  hola,
}) {
  const handleItemClick = () => {
    onFilterSubmit({
      ...filterValues,
      [filterName]: filterValue,
    });

    handleFilterClick(hola);
  };

  return (
    <li
      value={filterValue}
      key={useId()}
      className="filter-order__item"
      // className={`filter-order__item ${
      // selectedFilter === filter.id ? "filter-order__item--select" : ""
      // }`}
      // onClick={() => handleSelectedClick(filterValue, filterElementId)}
      onClick={handleItemClick}
    >
      <button>{filter.name}</button>
    </li>
  );
}
