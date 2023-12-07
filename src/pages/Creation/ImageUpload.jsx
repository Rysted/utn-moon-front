const ImageUpload = ({ img, imgView, handleImageChange }) => {
  return (
    <div className="create__image-upload">
      <div className="create__image-upload--container">
        <img
          src={imgView || `${import.meta.env.VITE_API}/images/default.webp`}
          alt="imagen de nuevo juego"
          className="create__image"
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
          className={`create__label--file ${
            img === "" ? "" : "create__label--color"
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
