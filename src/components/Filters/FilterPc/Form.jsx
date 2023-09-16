import { useRef, useState } from "react";
import "./Form.css";

export const FormFilter = ({
  genres,
  developer,
  publisher,
  onMinPriceChange,
  onMaxPriceChange,
  onNameGameSubmit,
}) => {
  const formRef = useRef(null);

  const handleSubmit = event => {
    event.preventDefault();
    const priceMin = Number(event.target.priceMin.value);
    const priceMax = Number(event.target.priceMax.value);

    if (!isNaN(priceMin)) {
      onMinPriceChange(priceMin);
    }

    if (!isNaN(priceMax)) {
      onMaxPriceChange(priceMax);
    }

    if (event.target.name.value) {
      onNameGameSubmit(event.target.name.value);
    }
    // onMaxPriceChange
  };

  // Función para manejar cambios en el campo de entrada del precio mínimo

  return (
    <form ref={formRef} className="form__filter" onSubmit={handleSubmit}>
      <div className="form__group">
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Nombre del juego"
        />
      </div>
      <div className="form__group">
        <label htmlFor="genre2">Género</label>
        <select name="" id="genre2" defaultValue="0">
          <option disabled value="0">
            Seleccione
          </option>
          {genres.map((genre, index) => (
            <option key={index} value={index}>
              {genre}
            </option>
          ))}
        </select>
      </div>
      <div className="form__group">
        <p>Precio</p>
        <div className="form__groups">
          <div className="form__group form__group--flex">
            <label htmlFor="priceMin">Precio Min</label>
            <input
              type="text"
              name="priceMin"
              id="priceMin"
              maxLength="4"
              placeholder="0"
            />
            <div className="form__linear"></div>
          </div>
          <div className="form__group form__group--flex">
            <label htmlFor="priceMax">Precio Max</label>
            <input
              type="text"
              name="priceMax"
              id="priceMax"
              maxLength="4"
              placeholder="5000"
            />
          </div>
        </div>
      </div>
      <div className="form__group">
        <label htmlFor="order2">Ordenar por</label>
        <select name="" id="order2" defaultValue="0">
          <option disabled value="0">
            Seleccione
          </option>
          <option value="">Más relevantes</option>
          <option value="">Menor precio</option>
          <option value="">Mayor precio</option>
        </select>
      </div>
      <div className="form__group">
        <label htmlFor="developer2">Editor</label>
        <select name="" id="developer2" defaultValue="0">
          <option disabled value="0">
            Seleccione
          </option>
          {developer.map((developer, index) => (
            <option key={index} value={index}>
              {developer}
            </option>
          ))}
        </select>
      </div>
      <div className="form__group">
        <label htmlFor="publisher2">Desarrollador</label>
        <select name="" id="publisher2" defaultValue="0">
          <option value="0" disabled>
            Seleccione
          </option>
          {publisher.map((publisher, index) => (
            <option key={index} value={index}>
              {publisher}
            </option>
          ))}
        </select>
      </div>

      <input className="btn btn--primary" type="submit" value="Buscar" />
      <input className="btn btn--secondary" type="reset" value="Limpiar" />
    </form>
  );
};
