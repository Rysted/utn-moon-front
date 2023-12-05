import "./MediaCarousel.css";

import { sliceTitle } from "../../utils/shopFunctions.js";

import { useState, useEffect } from "react";

export const MediaCarousel = ({ data }) => {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  const nextItem = () => {
    setCurrentItemIndex((prevValue) => (prevValue + 1) % data.length);
  };

  const selectItem = (id) => {
    setCurrentItemIndex(id);
  };

  useEffect(() => {
    const intervalId = setInterval(nextItem, 5000); // Cambiar cada 5 segundos

    // Limpia el temporizador cuando el componente se desmonta o cuando cambia currentItemIndex
    return () => clearInterval(intervalId);
  }, [currentItemIndex]);

  const { image: currentImage, title: currentTitle } = data[currentItemIndex];

  return (
    <section className="automated__carousel">
      <article className="carousel__container">
        <img
          src={currentImage}
          className="carousel__img"
          alt="Imagen de la publicidad"
        />
      </article>
      <article className="carousel__card--container">
        {data.map(({ id, image, title }, index) => (
          <div
            key={index}
            className={`carousel__card ${
              id === currentItemIndex ? "carousel__selected" : ""
            }`}
            onClick={() => selectItem(id)}
          >
            <img
              src={image}
              alt={`gif publicitario ${title}`}
              className="carousel__image"
            />
            <h3 className="carousel__title">{sliceTitle(title)}</h3>
          </div>
        ))}
      </article>
    </section>
  );
};
