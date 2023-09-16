import { useRef, useState } from "react";
import "./Form.css";

export const FormFilter = ({
  genres,
  developer,
  publisher,
  onMinPriceChange,
}) => {
  const formRef = useRef(null);
  const [minPriceValue, setMinPriceValue] = useState(""); // Nuevo estado para el precio mínimo

  const handleSubmit = event => {
    event.preventDefault();
    // Llama a la función onMinPriceChange para pasar el valor del precio mínimo al componente Shop
    onMinPriceChange(minPriceValue);
  };

  // Función para manejar cambios en el campo de entrada del precio mínimo
  const handleMinPriceChange = event => {
    // Actualiza el estado del precio mínimo cuando cambia el campo de entrada
    setMinPriceValue(event.target.value);
  };

  return (
    <form ref={formRef} className="form__filter" onSubmit={handleSubmit}>
      <div className="form__group">
        <label htmlFor="name2">Nombre</label>
        <input type="text" name="" id="name2" placeholder="Nombre del juego" />
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
              name="priceMin" // Nombre del campo debe coincidir con el evento de obtención de valor
              id="priceMin"
              placeholder="0"
              maxLength="4"
              value={minPriceValue} // Asigna el valor del estado al campo de entrada
              onChange={handleMinPriceChange} //
            />
            <div className="form__linear"></div>
          </div>
          <div className="form__group form__group--flex">
            <label htmlFor="priceMax">Precio Max</label>
            <input
              type="text"
              name=""
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
