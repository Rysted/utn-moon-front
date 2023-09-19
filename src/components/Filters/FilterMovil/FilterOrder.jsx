import { useId } from "react";

export function FilterOrder({
  filterItems,
  filter,
  handleFilterClick,
  onFilterSubmit,
  filterValues,
}) {
  const isSelected = filter.value === filterValues.order;

  const handleItemClick = () => {
    onFilterSubmit({
      ...filterValues,
      [filterItems.value]: filter.value,
    });

    handleFilterClick(filterItems.id);
  };

  return (
    <li
      value={filter.value}
      key={useId()}
      // className="filter-order__item"
      className={`filter-order__item ${
        isSelected ? "filter-order__item--select" : ""
      }`}
      onClick={handleItemClick}
    >
      <button>{filter.name}</button>
    </li>
  );
}
