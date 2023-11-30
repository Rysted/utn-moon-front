import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProductsContext } from "../../context/ProductsContext.jsx";
import { Loading } from "../../components/Load/Loading.jsx";
import EditionForm from "./EditionForm";
import Left from "../../assets/images/icons/arrow-left.svg";
import { validateValues, validateFields } from "../../utils/shopFunctions.js";
import {
  genresData,
  companyData,
  regexPatterns,
  initialFormData,
} from "./EditionGame.js";
import "./Edition.css";

const Edition = () => {
  const { products, error, isLoading } = useContext(ProductsContext);
  const [formData, setFormData] = useState(initialFormData);
  const [titleValid, setTitleValid] = useState(true);
  const [priceValid, setPriceValid] = useState(true);
  const [offerValid, setOfferValid] = useState(true);
  const [stockValid, setStockValid] = useState(true);
  const [dateValid, setDateValid] = useState(true);
  const [genresValid, setGenresValid] = useState(true);
  const [developerValid, setDeveloperValid] = useState(true);
  const [publisherValid, setPublisherValid] = useState(true);
  const [descriptionValid, setDescriptionValid] = useState(true);
  const [formError, setFormError] = useState(true);
  const [formSuccess, setFormSuccess] = useState(false);
  const [formTime, setFormTime] = useState(false);
  // const [loaderVisible, setLoaderVisible] = useState(false);
  // const [successMessageVisible, setSuccessMessageVisible] = useState(false);
  // const [errorMessageVisible, setErrorMessageVisible] = useState(false);

  // console.log(genresValid);
  const pagePrev = useNavigate();

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div className="details container">
        <p>{error}</p>
      </div>
    );
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prevState) => ({
          ...prevState,
          img: file,
          imgView: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    validateFields(regexPatterns, formData, validateField);

    if (
      titleValid &&
      priceValid &&
      offerValid &&
      stockValid &&
      dateValid &&
      genresValid &&
      developerValid &&
      publisherValid &&
      descriptionValid & formTime
    ) {
      if (formTime) {
        const formDataToSend = new FormData();

        // Append genres as an array, removing empty strings
        // Crear un nuevo objeto FormData

        // Datos a enviar
        const data = {
          genres: [
            formData.genre1 ? formData.genre1 : null,
            formData.genre2 ? formData.genre2 : null,
            formData.genre3 ? formData.genre3 : null,
          ].filter(
            (genre, index, array) =>
              genre !== null && array.indexOf(genre) === index
          ),
          img: formData.img,
          title: formData.title,
          price: formData.price,
          offer: formData.offer,
          stock: formData.stock,
          release_date: formData.release_date,
          developer: formData.developer,
          publisher: formData.publisher,
          short_description: formData.short_description,
          rating: 0,
        };

        // Iterar sobre las claves del objeto y agregar al formulario
        for (const key in data) {
          if (data.hasOwnProperty(key)) {
            const value = data[key];

            // Si es un array, agregar cada elemento por separado
            if (Array.isArray(value)) {
              for (let i = 0; i < value.length; i++) {
                formDataToSend.append(`${key}[${i}]`, value[i]);
              }
            } else {
              formDataToSend.append(key, value);
            }
          }
        }

        // formDataToSend.forEach((value, key) => {
        //   console.log(`${key}: ${value}`, `${typeof value}`);
        // });

        setFormTime(false);
        try {
          const response = await fetch(
            `${import.meta.env.VITE_API}/api/games`,
            {
              method: "POST",
              body: formDataToSend,
            }
          );

          if (response.ok) {
            // La solicitud fue exitosa
            setFormSuccess(true);
            handleReset();
            setTimeout(() => {
              setFormSuccess(false);
              setFormTime(true);
            }, 5000);
          } else {
            // La solicitud falló
            setFormError(false);
            setTimeout(() => {
              setFormError(true);
              setFormTime(true);
            }, 5000);
          }
        } catch (error) {
          // Manejar errores de red u otros errores durante la solicitud
          console.error("Error al enviar la solicitud:", error);
          // setFormError(false);
          setFormTime(true);
        }
      } else {
        setFormError(false);
        setFormTime(false);
        setTimeout(() => {
          setFormError(true);
          setFormTime(true);
        }, 5000);
      }
    } else {
      setFormTime(true);
    }
  };

  const handleInputChange = (event, field) => {
    setFormData({ ...formData, [field]: event.target.value });
  };

  const handleBlur = (event, field) => {
    validateField(regexPatterns[field], { value: event.target.value }, field);
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setTitleValid(true);
    setPriceValid(true);
    setOfferValid(true);
    setStockValid(true);
    setDateValid(true);
    setGenresValid(true);
    setDeveloperValid(true);
    setPublisherValid(true);
    setDescriptionValid(true);
    // setLoaderVisible(false);
    // setSuccessMessageVisible(false);
    // setErrorMessageVisible(false);
  };

  const validateField = (expression, input, field) => {
    const isValid = expression.test(input.value);

    switch (field) {
      case "title":
        setTitleValid(isValid);
        break;
      case "price":
        setPriceValid(isValid);
        break;
      case "offer":
        setOfferValid(isValid);
        break;
      case "stock":
        setStockValid(isValid);
        break;
      case "release_date":
        setDateValid(isValid);
        break;
      case "genres":
        setGenresValid(
          validateValues(formData.genre1, formData.genre2, formData.genre3)
        );
        break;
      case "developer":
        setDeveloperValid(isValid);
        break;
      case "publisher":
        setPublisherValid(isValid);
        break;
      case "short_description":
        setDescriptionValid(isValid);
        break;
      default:
        break;
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
        <p>Nuevo Juego</p>
      </div>

      <EditionForm
        formData={formData}
        handleImageChange={handleImageChange}
        handleInputChange={handleInputChange}
        handleBlur={handleBlur}
        handleSubmit={handleSubmit}
        handleReset={handleReset}
        titleValid={titleValid}
        priceValid={priceValid}
        offerValid={offerValid}
        stockValid={stockValid}
        dateValid={dateValid}
        genresValid={genresValid}
        publisherValid={publisherValid}
        developerValid={developerValid}
        descriptionValid={descriptionValid}
        genresData={genresData}
        companyData={companyData}
        formError={formError}
        formSuccess={formSuccess}
      />
    </div>
  );
};

export default Edition;
