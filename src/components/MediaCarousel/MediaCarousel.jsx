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
    <section className="publicity">
      <article className="publicity__container">
        <Link to={`/detail/${link}`} className="publicity__link">
          <img src={image} alt={title} className="publicity__img" />
        </Link>
      </article>
      <article className="publicity__carousel--images">
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
