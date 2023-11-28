const ImageUpload = ({ img, handleImageChange }) => {
  return (
    <div className="edition__content-img">
      <div className="content-img">
        <img
          src={img || "/images/products/default.webp"}
          alt="imagen de nuevo juego"
          className="details__img"
        />
        <input
          className="edition__form-input--none"
          type="file"
          name="fileGame"
          id="fileGame"
          accept="image/*"
          onChange={handleImageChange}
        />
        <label
          className={`edition__label--file ${
            img === "" ? "" : "edition__label--color"
          }`}
          htmlFor="fileGame"
        >
          Cargar Imagen
        </label>
      </div>
    </div>
  );
};

export default ImageUpload;
