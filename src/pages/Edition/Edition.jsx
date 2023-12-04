import "./Edition.css";

import { useNavigate, useParams } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";

import Left from "../../assets/images/icons/arrow-left.svg";

import { useEffect, useState } from "react";

const Edition = () => {
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [genresData, setGenresData] = useState([]);
  const [companysData, setCompanysData] = useState([]);
  const [existGame, setExistGame] = useState({
    title: "",
    price: "",
    offer: "",
    stock: "",
    release_date: "",
    img: "",
    genres: [],
    developer: "",
    publisher: "",
    short_description: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [genresResponse, companyResponse] = await Promise.all([
          fetch(`${import.meta.env.VITE_API}/api/genres`),
          fetch(`${import.meta.env.VITE_API}/api/company`),
        ]);

        const [genres, company] = await Promise.all([
          genresResponse.json(),
          companyResponse.json(),
        ]);

        setGenresData(genres || []);
        setCompanysData(company || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const pagePrev = useNavigate();

  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      title: "",
      price: "",
      offer: "",
      stock: "",
      release_date: "",
      img: "",
      genres: [],
      developer: "",
      publisher: "",
      short_description: "",
    },
  });

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API}/api/gamesId/${id}`
        );

        const data = await response.json();

        if (!data) return pagePrev("/shop");

        setExistGame((prevState) => ({
          ...prevState,
          ...data,
        }));
        setSelectedGenres(data.genres);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    setValue("title", existGame.title);
    setValue("price", `${existGame.price}`);
    setValue("offer", `${existGame.offer}`);
    setValue("stock", `${existGame.stock}`);
    setValue("img", existGame.img);
    setValue("developer", existGame.developer);
    setValue("publisher", existGame.publisher);
    setValue("release_date", existGame.release_date);
    setValue("short_description", existGame.short_description);
    setValue("genres", selectedGenres);
  }, [existGame, setValue]);

  const handleSelectChange = (e) => {
    const { value } = e.target;

    if (selectedGenres.length >= 3) {
      return alert("No puedes agregar más géneros");
    }

    if (selectedGenres.includes(value)) {
      return alert("No puedes agregar el mismo género");
    }

    const newGenres = [...selectedGenres, value];

    setSelectedGenres(newGenres);

    setValue("genres", newGenres);
  };

  const handleRemoveGenre = (genre) => {
    const newGenres = selectedGenres.filter((item) => item !== genre);

    setSelectedGenres(newGenres);

    setValue("genres", newGenres);
  };

  /* const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setExistGame((prevState) => ({
          ...prevState,
          imgView: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  }; */

  const submitFrom = async (data) => {
    try {
      const inputsData = { ...data };

      if (inputsData.img && typeof inputsData.img !== "string") {
        inputsData.img = inputsData.img[0];
      }

      let oneInput = false;

      // Recorrer cada propiedad del objeto inputsData
      for (const key in inputsData) {
        const value = inputsData[key];

        // Verificar si la propiedad es un array y tiene longitud cero, o es una cadena vacía
        if (
          !(
            (Array.isArray(value) && value.length === 0) ||
            (typeof value === "string" && value.trim() === "")
          )
        ) {
          // Si se cumple la condición, entonces hay al menos un campo con datos
          oneInput = true;
          break;
        }
      }

      if (!oneInput) {
        return alert("No se han realizado cambios en el formulario.");
      }

      const formData = new FormData();

      Object.entries(data).forEach(([key, value]) => {
        if (key === "img" && value[0] && typeof value !== "string") {
          // Si hay una imagen, añádela al FormData
          formData.append(key, value[0]);
        } else if (value.length > 0) {
          // Para otros campos, simplemente añádelos al FormData
          formData.append(key, value);
        }
      });

      console.log("formData", formData);

      const response = await fetch(
        `${import.meta.env.VITE_API}/api/games/${id}`,
        {
          method: "PATCH",
          body: formData,
        }
      );

      if (response.ok) {
        alert("Juego editado correctamente");
        // return pagePrev("/shop");
      } else {
        alert("Error al editar el juego");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="details container">
      <div className="details__preview">
        <button
          className="details__link"
          onClick={() => pagePrev("/shop")}
          aria-label="enlace de volver"
        >
          <img
            className="details__img"
            src={Left}
            alt="flecha hacia la izquierda"
          />
          <p>Tienda</p>
        </button>
        <p className="details__icon">&#62;</p>
        <p>Editando Juego</p>
      </div>

      <form encType="multipart/form-data" onSubmit={handleSubmit(submitFrom)}>
        <div className="edition__content">
          <div className="edition__content-img">
            <div className="content-img">
              <img
                src={
                  /* existGame.imgView || */
                  existGame.img
                    ? `${import.meta.env.VITE_API}/images/${existGame.img}`
                    : `${import.meta.env.VITE_API}/images/default.webp`
                }
                alt="imagen de nuevo juego"
                className="edition__img"
              />
              <input
                className=""
                type="file"
                id="fileGame"
                accept="image/*"
                {...register("img")}
                /* onInput={handleImageChange;} */
              />
              <label
                className={`edition__label--file ${
                  existGame.img === "" ? "" : "edition__label--color"
                }`}
                htmlFor="fileGame"
              >
                Cargar Imagen
              </label>
            </div>
          </div>

          <div className="edition__data">
            <div className="edition__datas">
              <div className="edition__form-group">
                <label htmlFor="title" className="edition__subtitle">
                  Título
                </label>
                <input
                  type="text"
                  className="edition__form-input"
                  placeholder="Título del juego"
                  {...register("title", {
                    maxLength: {
                      value: 255,
                      message: "El nombre es demasiado largo",
                    },
                  })}
                />
                {errors.title && (
                  <p className="edition__form-paragraph edition__form-paragraph--error">
                    {errors.title.message}
                  </p>
                )}
              </div>
              <div className="edition__form-group">
                <label htmlFor="price" className="edition__subtitle">
                  Precio
                </label>
                <input
                  type="number"
                  className="edition__form-input"
                  placeholder="Precio del juego"
                  {...register("price", {
                    maxLength: {
                      value: 6,
                      message: "El precio es demasiado largo",
                    },
                  })}
                />
                {errors.price && (
                  <p className="edition__form-paragraph edition__form-paragraph--error">
                    {errors.price.message}
                  </p>
                )}
              </div>

              <div className="edition__form-groups">
                <div className={`edition__form-group`}>
                  <label htmlFor="offer" className="edition__subtitle">
                    Oferta
                  </label>
                  <input
                    type="number"
                    className="edition__form-input"
                    placeholder="Oferta del juego"
                    {...register("offer", {
                      maxLength: {
                        value: 2,
                        message: "La oferta supera el 99%",
                      },
                    })}
                  />
                  {errors.offer && (
                    <p className="edition__form-paragraph edition__form-paragraph--error">
                      {errors.offer.message}
                    </p>
                  )}
                </div>

                <div className={`edition__form-group`}>
                  <label htmlFor="stock" className="edition__subtitle">
                    Stock
                  </label>
                  <input
                    type="number"
                    className="edition__form-input"
                    placeholder="Stock del juego"
                    {...register("stock", {
                      maxLength: {
                        value: 3,
                        message: "El stock supera las 999 unidades",
                      },
                    })}
                  />
                  {errors.stock && (
                    <p className="edition__form-paragraph edition__form-paragraph--error">
                      {errors.stock.message}
                    </p>
                  )}
                </div>
              </div>

              <div className={`edition__form-group edition__form-group--date`}>
                <label htmlFor="release_date" className="edition__subtitle">
                  Lanzamiento
                </label>
                <input
                  type="date"
                  className="edition__form-input"
                  placeholder="aaaa/mm/dd"
                  {...register("release_date", {
                    maxLength: {
                      value: 10,
                      message: "La fecha de lanzamiento es demasiado larga",
                    },
                  })}
                />
                {errors.release_date && (
                  <p className="edition__form-paragraph edition__form-paragraph--error">
                    {errors.release_date.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="edition__categories">
            <div className="edition__roles">
              <br />
              <div className="edition__form-group">
                <label htmlFor="genres" className="edition__subtitle">
                  Género
                </label>
                <Controller
                  name="genres"
                  control={control}
                  defaultValue={[]}
                  render={({ field }) => (
                    <select
                      {...field}
                      multiple
                      onChange={(e) => handleSelectChange(e)}
                      className="edition__form-input"
                    >
                      {genresData.map((genre, index) => (
                        <option key={index} value={genre.genres_id}>
                          {genre._name}
                        </option>
                      ))}
                    </select>
                  )}
                />

                <div className="edition__form-selected">
                  {selectedGenres.map((genreId) => {
                    const foundGenre = genresData.find(
                      (item) => String(item.genres_id) === genreId
                    );

                    return foundGenre ? (
                      <span
                        key={genreId}
                        className="edition__form-selected-item"
                        onClick={() => handleRemoveGenre(genreId)}
                      >
                        {foundGenre._name}
                      </span>
                    ) : null;
                  })}
                </div>
              </div>
            </div>

            <div className="edition__form-groups">
              <div className={`edition__form-group`}>
                <label htmlFor="publisher" className="edition__subtitle">
                  Editor
                </label>
                <Controller
                  name="publisher"
                  control={control}
                  render={({ field }) => (
                    <select {...field} className="edition__form-input">
                      <option value="" disabled>
                        Seleccionar
                      </option>
                      {companysData.map((company, index) => (
                        <option key={index} value={company.company_id}>
                          {company._name}
                        </option>
                      ))}
                    </select>
                  )}
                />
              </div>
              <div className={`edition__form-group`}>
                <label htmlFor="developer" className="edition__subtitle">
                  Desarrollador
                </label>
                <Controller
                  name="developer"
                  control={control}
                  render={({ field }) => (
                    <select {...field} className="edition__form-input">
                      <option value="" disabled>
                        Seleccionar
                      </option>
                      {companysData.map((company, index) => (
                        <option key={index} value={company.company_id}>
                          {company._name}
                        </option>
                      ))}
                    </select>
                  )}
                />
              </div>
            </div>
          </div>
        </div>

        <div className={`edition__form-group edition__form-group--margin`}>
          <label htmlFor="short_description" className="edition__subtitle">
            Descripcion
          </label>
          <textarea
            className="edition__form-textarea"
            name="short_description"
            cols="30"
            rows="10"
            placeholder="Descripción corta del juego"
            {...register("short_description", {
              maxLength: {
                value: 255,
                message: "La descripción es demasiado larga",
              },
            })}
          ></textarea>
        </div>

        <div className="details__ctas">
          <button
            className="cta cta--tertiary"
            type="button"
            aria-label="Limpiar formulario"
            onClick={() => reset()}
          >
            Limpiar
          </button>
          <button
            className="cta cta--primary"
            type="submit"
            aria-label="Enviar formulario"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Edition;
