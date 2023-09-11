export const FilterItem = ({ item, isActive, onClick }) => {
  return (
    <div
      className={`filter__item ${isActive ? "active" : ""}`}
      onClick={onClick}
    >
      <img className="filter__img" src={item.iconSrc} alt="icono de filtro" />
      <p>{item.name}</p>
    </div>
  );
};
