import { useId } from "react";

export function FilterOrder({
  filter,
  selectedFilter,
  handleSelectedClick,
  filterElementId,
}) {
  return (
    <li
      key={useId()}
      className={`filter-order__item ${
        selectedFilter === filter.id ? "filter-order__item--select" : ""
      }`}
      onClick={() => handleSelectedClick(filter.id, filterElementId)}
    >
      <button>{filter.name}</button>
    </li>
  );
}
