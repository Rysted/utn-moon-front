/* 
  Debe recibir este formato de objeto.

  Importante: En caso de no querer poner link, CAMBIAR por null
 {
    id: 0,
    image: "https://i.postimg.cc/m2t66mVy/diablo-Immortal.png",
    title: "Diablo Immortal",
    link: "1",
  },
*/

import { useState, useEffect } from "react";
import { CarouselCard } from "../CarouselCard/CarouselCard";
import { Link } from "react-router-dom";

import "./MediaCarousel.css";

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

  const { link, image, title } = data[currentItemIndex];

  return (
    <section className="automated__carousel">
      <article className="carousel__container">
        <Link to={`/detail/${link}`} className="carousel__link">
          <img src={image} alt={title} className="carousel__img" />
        </Link>
      </article>
      <article className="carousel__card--container">
        {data.map((element, index) => (
          <CarouselCard
            key={index}
            element={element}
            selectItem={selectItem}
            currentItemIndex={currentItemIndex}
          />
        ))}
      </article>
    </section>
  );
};
