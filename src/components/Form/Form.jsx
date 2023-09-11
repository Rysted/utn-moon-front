import "./Form.css";

export const Form = () => {
  return (
    <form className="form__filter" action="">
      <div className="form__group">
        <label htmlFor="name2">Nombre</label>
        <input type="text" name="" id="name2" />
      </div>
      <div className="form__group">
        <p>Genero</p>
        <select name="" id="">
          <option disabled value="0">
            Selecione
          </option>
          <option value="">a</option>
        </select>
      </div>
      <div className="form__group">
        <p>Editor</p>
        <select name="" id="">
          <option disabled value="0">
            Selecione
          </option>
          <option value="">a</option>
        </select>
      </div>
      <div className="form__group">
        <p>Precio</p>
        <div className="form__groups">
          <div className="form__group form__group--flex">
            <label htmlFor="priceMin">Precio Min</label>
            <input type="text" name="" id="priceMin" />
          </div>
          <div className="form__linear"></div>
          <div className="form__group form__group--flex">
            <label htmlFor="priceMax">Precio Max</label>
            <input type="text" name="" id="priceMax" />
          </div>
        </div>
      </div>
      <div className="form__group">
        <p>Desarrollador</p>
        <select name="" id="">
          <option value="" disabled>
            Selecione
          </option>
          <option value="">a</option>
        </select>
      </div>
      <div className="form__group">
        <p>Ordernar por</p>
        <select name="" id="">
          <option disabled value="0">
            Selecione
          </option>
          <option value="">a</option>
        </select>
      </div>
      <input className="btn btn--primary" type="submit" value="Buscar" />
      <input className="btn btn--secondary" type="reset" value="Limpiar" />
    </form>
  );
};
