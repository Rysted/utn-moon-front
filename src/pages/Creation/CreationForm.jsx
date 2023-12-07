import CreateDetails from "./CreationDetails";
import ImageUpload from "./ImageUpload";

const EditionForm = ({
  formData,
  handleImageChange,
  handleInputChange,
  handleBlur,
  handleSubmit,
  handleReset,
  titleValid,
  priceValid,
  offerValid,
  stockValid,
  dateValid,
  genresValid,
  publisherValid,
  developerValid,
  descriptionValid,
  genresData,
  companyData,
  formError,
  formSuccess,
}) => {
  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <div className="create__content">
        <ImageUpload
          img={formData.img}
          imgView={formData.imgView}
          handleImageChange={handleImageChange}
        />

        <CreateDetails
          formData={formData}
          handleInputChange={handleInputChange}
          handleBlur={handleBlur}
          genresData={genresData}
          companyData={companyData}
          titleValid={titleValid}
          priceValid={priceValid}
          offerValid={offerValid}
          stockValid={stockValid}
          dateValid={dateValid}
          genresValid={genresValid}
          publisherValid={publisherValid}
          developerValid={developerValid}
        />
      </div>
      <div
        className={`create__form-group create__form-group--margin ${
          descriptionValid ? "" : "create__form-group--error"
        }`}
      >
        <label htmlFor="shortDescription" className="create__subtitle">
          Descripcion
        </label>
        <textarea
          className="create__form-textarea"
          name="shortDescription"
          id="shortDescription"
          cols="30"
          rows="10"
          value={formData.short_description}
          onChange={event => handleInputChange(event, "short_description")}
          onBlur={event => handleBlur(event, "short_description")}
        ></textarea>
        {!descriptionValid && (
          <p className="create__form-paragraph create__form-paragraph--error">
            La descripcion debe tener entre 1 y 255 caracteres.
          </p>
        )}
      </div>

      {!formError && (
        <p className={`create-form__alert create-form__alert--error`}>
          Por favor, complete todos los campos del formulario
        </p>
      )}
      {formSuccess && (
        <p className={`create-form__alert create-form__alert--success`}>
          El formulario ha sido enviado correctamente
        </p>
      )}
      <div className="create__ctas">
        <input
          className="cta cta--tertiary"
          aria-label="enlace de limpiar"
          type="reset"
          value="Limpiar"
          onClick={handleReset}
        />
        <input
          className="cta cta--primary"
          aria-label="enlace de agregar"
          type="submit"
          value="Enviar"
        />
      </div>
    </form>
  );
};

export default EditionForm;
