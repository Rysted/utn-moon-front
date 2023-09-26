import { useRef, useEffect } from "react";
import "./Form.css";

export const FormFilter = ({
  filterValues,
  genres,
  developer,
  publisher,
  onFilterSubmit,
}) => {
  const formRef = useRef(null);

  useEffect(() => {
    // Actualiza el valor seleccionado del campo "Género" cuando filterValues.genre cambie
    formRef.current.genre.value = filterValues.genre;

    // Actualiza el valor seleccionado del campo "Desarrollador" cuando filterValues.developer cambie
    formRef.current.developer.value = filterValues.developer;

    // Actualiza el valor seleccionado del campo "Ordenar por" cuando filterValues.order cambie
    formRef.current.order.value = filterValues.order;
  }, [filterValues.genre, filterValues.developer, filterValues.order]);

  const handleSubmit = event => {
    event.preventDefault();

    // Accedemos a los valores de los campos directamente desde los elementos de formulario
    const nameGame = formRef.current.nameGame.value.trim();
    const minPrice = parseFloat(formRef.current.minPrice.value) || 0;
    const maxPrice = parseFloat(formRef.current.maxPrice.value) || 15000;
    const genre = formRef.current.genre.value;
    const developer = formRef.current.developer.value;
    const publisher = formRef.current.publisher.value;
    const order = formRef.current.order.value;

    // Crear un objeto con los valores filtrados
    const filterValues = {
      nameGame,
      minPrice,
      maxPrice,
      genre,
      developer,
      publisher,
      order,
    };

    // Llamar a onFilterSubmit con el objeto filterValues
    onFilterSubmit(filterValues);
  };

  const renderOptions = options => {
    return options.map((option, index) => (
      <option key={index} value={option.toLowerCase()}>
        {option}
      </option>
    ));
  };

  return (
    <form ref={formRef} className="form__filter" onSubmit={handleSubmit}>
      <div className="form__group">
        <label htmlFor="nameGame">Nombre</label>
        <input
          type="text"
          name="nameGame"
          id="nameGame"
          placeholder="Nombre del juego"
        />
      </div>
      <div className="form__group">
        <label htmlFor="genre">Género</label>
        <select name="genre" id="genre">
          <option value="">Todos</option>
          {renderOptions(genres)}
        </select>
      </div>
      <div className="form__group">
        <p>Precio</p>
        <div className="form__groups">
          <div className="form__group form__group--flex">
            <label htmlFor="minPrice">Precio Min</label>
            <input
              type="text"
              name="minPrice"
              id="minPrice"
              maxLength="5"
              placeholder="0"
            />
            <div className="form__linear"></div>
          </div>
          <div className="form__group form__group--flex">
            <label htmlFor="maxPrice">Precio Max</label>
            <input
              type="text"
              name="maxPrice"
              id="maxPrice"
              maxLength="5"
              placeholder="15000"
            />
          </div>
        </div>
      </div>
      <div className="form__group">
        <label htmlFor="order">Ordenar por</label>
        <select name="order" id="order" defaultValue="relevant">
          <option value="relevant">Más relevantes</option>
          <option value="lowPrice">Menor precio</option>
          <option value="highPrice">Mayor precio</option>
        </select>
      </div>
      <div className="form__group">
        <label htmlFor="publisher">Editor</label>
        <select name="publisher" id="publisher" defaultValue="">
          <option value="">Todos</option>
          {renderOptions(publisher)}
        </select>
      </div>
      <div className="form__group">
        <label htmlFor="developer">Desarrollador</label>
        <select name="developer" id="developer" defaultValue="">
          <option value="">Todos</option>
          {renderOptions(developer)}
        </select>
      </div>

      <input className="btn btn--primary" type="submit" value="Buscar" />
      <input className="btn btn--secondary" type="reset" value="Limpiar" />
    </form>
  );
};
