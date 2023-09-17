export function FilterElement({ name, element, value, filterValues, onClick }) {
  const handleItemClick = itemValue => {
    onClick({ ...filterValues, [value]: itemValue.toLowerCase() });

    console.log(value);
  };

  return (
    <div className="filter-dropdown__container">
      <div className="filter-dropdown">
        <input
          className="filter-dropdown__checkbox filter-dropdown__checkbox--none"
          type="checkbox"
          id={name}
        />
        <label className="filter-dropdown__menu" htmlFor={name}>
          <span className="filter-dropdown__title">{name}</span>
          <span className="filter-dropdown__icon filter-dropdown__icon--hidden">
            <img
              className="filter-dropdown__img"
              src="./src/assets/images/icons/arrow-top.svg"
              alt="flecha hacia abajo"
            />
          </span>
          <span className="filter-dropdown__icon filter-dropdown__icon--show">
            <img
              className="filter-dropdown__img"
              src="./src/assets/images/icons/arrow-bottom.svg"
              alt="flecha hacia abajo"
            />
          </span>
        </label>
        <div className="filter-dropdown__content">
          <div className="filter-dropdown__info">
            <ul className="filter-dropdown__lists">
              <li
                key="all"
                value=""
                onClick={() => handleItemClick("")}
                className="filter-dropdown__list"
              >
                <button>Cualquier {name}</button>
              </li>

              {element.map((item, index) => (
                <li
                  key={index}
                  value={item}
                  onClick={() => handleItemClick(item)}
                  className="filter-dropdown__list"
                >
                  <button>{item}</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
