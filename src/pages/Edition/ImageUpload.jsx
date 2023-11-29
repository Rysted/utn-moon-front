const ImageUpload = ({ img, imgView, handleImageChange }) => {
  return (
    <div className="edition__content-img">
      <div className="content-img">
        <img
          src={imgView || "http://localhost:3000/default.webp"}
          alt="imagen de nuevo juego"
          className="edition__img"
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
