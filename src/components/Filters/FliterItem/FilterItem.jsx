export const FilterItem = ({ item, isActive, onClick, filtros }) => {
  return (
    <div
      className={`filter__item ${isActive ? "active" : ""}`}
      onClick={onClick}
    >
      <img className="filter__img" src={filtros} alt="icono de filtro" />
      <p>{item.name}</p>
    </div>
  );
};
