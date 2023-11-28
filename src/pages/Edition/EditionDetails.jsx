const EditionDetails = ({
  formData,
  handleInputChange,
  handleBlur,
  genresData,
  companyData,
  titleValid,
  priceValid,
  offerValid,
  stockValid,
  dateValid,
  genresValid,
  publisherValid,
  developerValid,
}) => {
  return (
    <>
      <div className="edition__data">
        <div className="edition__datas">
          <div
            className={`edition__form-group ${
              titleValid ? "" : "edition__form-group--error"
            }`}
          >
            <label htmlFor="title" className="edition__subtitle">
              Nombre
            </label>
            <input
              id="title"
              name="title"
              type="text"
              className="edition__form-input"
              placeholder="Nombre del juego"
              minLength="1"
              maxLength="255"
              value={formData.title}
              onChange={event => handleInputChange(event, "title")}
              onBlur={event => handleBlur(event, "title")}
            />
            {!titleValid && (
              <p className="edition__form-paragraph edition__form-paragraph--error">
                El nombre solo puede contener letras, números y espacios, y debe
                tener entre 1 y 255 caracteres.
              </p>
            )}
          </div>
          <div
            className={`edition__form-group ${
              priceValid ? "" : "edition__form-group--error"
            }`}
          >
            <label htmlFor="price" className="edition__subtitle">
              Precio
            </label>
            <input
              id="price"
              type="text"
              className="edition__form-input"
              placeholder="Precio del juego"
              minLength="1"
              maxLength="6"
              value={formData.price}
              onChange={event => handleInputChange(event, "price")}
              onBlur={event => handleBlur(event, "price")}
            />
            {!priceValid && (
              <p className="edition__form-paragraph edition__form-paragraph--error">
                El precio solo puede contener números, sin espacios, y debe
                tener entre 1 y 6 caracteres.
              </p>
            )}
          </div>

          <div className="edition__form-groups">
            <div
              className={`edition__form-group ${
                offerValid ? "" : "edition__form-group--error"
              }`}
            >
              <label htmlFor="offer" className="edition__subtitle">
                Oferta
              </label>
              <input
                id="offer"
                type="text"
                className="edition__form-input"
                placeholder="Oferta del juego"
                maxLength="3"
                value={formData.offer}
                onChange={event => handleInputChange(event, "offer")}
                onBlur={event => handleBlur(event, "offer")}
              />
              {!offerValid && (
                <p className="edition__form-paragraph edition__form-paragraph--error">
                  La oferta solo puede contener números, sin espacios, y debe
                  estar en el rango de 0 a 100.
                </p>
              )}
            </div>

            <div
              className={`edition__form-group ${
                stockValid ? "" : "edition__form-group--error"
              }`}
            >
              <label htmlFor="stock" className="edition__subtitle">
                Stock
              </label>
              <input
                id="stock"
                type="text"
                className="edition__form-input"
                placeholder="Stock del juego"
                maxLength="3"
                value={formData.stock}
                onChange={event => handleInputChange(event, "stock")}
                onBlur={event => handleBlur(event, "stock")}
              />
              {!stockValid && (
                <p className="edition__form-paragraph edition__form-paragraph--error">
                  La oferta solo puede contener números, sin espacios, y debe
                  estar en el rango de 0 a 255.
                </p>
              )}
            </div>
          </div>

          <div
            className={`edition__form-group edition__form-group--date ${
              dateValid ? "" : "edition__form-group--error"
            }`}
          >
            <label htmlFor="releaseDate" className="edition__subtitle">
              Lanzamiento
            </label>
            <input
              type="date"
              id="releaseDate"
              className="edition__form-input"
              placeholder="aaaa/mm/dd"
              value={formData.release_date}
              onChange={event => handleInputChange(event, "release_date")}
              onBlur={event => handleBlur(event, "release_date")}
            />
            {!dateValid && (
              <p className="edition__form-paragraph edition__form-paragraph--error">
                Seleccionar una fecha de lanzamiento.
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="edition__categories">
        <div className="edition__roles">
          <h3 className="edition__subtitle">Categoría</h3>
          <div
            className={`edition__genres ${
              genresValid ? "" : "edition__form-group--error"
            }`}
          >
            <div className="edition__form-group">
              <label htmlFor="gameGenres1" className="edition__subtitle">
                Género
              </label>
              <select
                name="gameGenres1"
                id="gameGenres1"
                className="edition__form-input edition__form-input--padding"
                value={formData.genre1}
                onChange={event => handleInputChange(event, "genre1")}
                onBlur={event => handleBlur(event, "genres")}
              >
                <option value="">Seleccionar</option>
                {genresData.map(genre => (
                  <option key={genre.id} value={genre.id}>
                    {genre.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="edition__form-group">
              <label htmlFor="gameGenres2" className="edition__subtitle">
                Género
              </label>
              <select
                name="gameGenres2"
                id="gameGenres2"
                className="edition__form-input edition__form-input--padding"
                value={formData.genre2}
                onChange={event => handleInputChange(event, "genre2")}
                onBlur={event => handleBlur(event, "genres")}
              >
                <option value="">Seleccionar</option>
                {genresData.map(genre => (
                  <option key={genre.id} value={genre.id}>
                    {genre.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="edition__form-group edition__form-group--tertiary">
              <label htmlFor="gameGenres3" className="edition__subtitle">
                Género
              </label>
              <select
                name="gameGenres3"
                id="gameGenres3"
                className="edition__form-input edition__form-input--padding"
                value={formData.genre3}
                onChange={event => handleInputChange(event, "genre3")}
                onBlur={event => handleBlur(event, "genres")}
              >
                <option value="">Seleccionar</option>
                {genresData.map(genre => (
                  <option key={genre.id} value={genre.id}>
                    {genre.name}
                  </option>
                ))}
              </select>
            </div>
            {!genresValid && (
              <p className="edition__form-paragraph edition__form-paragraph--error">
                Seleccionar uno o varios géneros que sean diferentes entre sí.
              </p>
            )}
          </div>
        </div>
        <div className="edition__form-groups">
          <div
            className={`edition__form-group ${
              publisherValid ? "" : "edition__form-group--error"
            }`}
          >
            <label htmlFor="publisher" className="edition__subtitle">
              Editor
            </label>
            <select
              className="edition__form-input"
              name="publisher"
              id="publisher"
              value={formData.publisher}
              onChange={event => handleInputChange(event, "publisher")}
              onBlur={event => handleBlur(event, "publisher")}
            >
              <option value="">Seleccionar</option>
              {companyData.map(publisher => (
                <option key={`publisher-${publisher.id}`} value={publisher.id}>
                  {publisher.name}
                </option>
              ))}
            </select>
            {!publisherValid && (
              <p className="edition__form-paragraph edition__form-paragraph--error">
                Seleccionar un editor.
              </p>
            )}
          </div>
          <div
            className={`edition__form-group ${
              developerValid ? "" : "edition__form-group--error"
            }`}
          >
            <label htmlFor="developer" className="edition__subtitle">
              Desarrollador
            </label>
            <select
              className="edition__form-input"
              name="developer"
              id="developer"
              value={formData.developer}
              onChange={event => handleInputChange(event, "developer")}
              onBlur={event => handleBlur(event, "developer")}
            >
              <option value="">Seleccionar</option>
              {companyData.map(developer => (
                <option key={`developer-${developer.id}`} value={developer.id}>
                  {developer.name}
                </option>
              ))}
            </select>
            {!developerValid && (
              <p className="edition__form-paragraph edition__form-paragraph--error">
                Seleccionar un desarrollador.
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default EditionDetails;
