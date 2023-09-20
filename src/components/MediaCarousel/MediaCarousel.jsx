/* 
  Debe recibir este formato de objeto.

 {
    id: 0,
    url: "https://i.postimg.cc/m2t66mVy/diablo-Immortal.png",
    title: "Diablo Immortal",

    link: "1", // Puede no recibir un valor 'Link'. -- En caso de no querer poner 'link'

    media: "png", // acepta: Imagenes:( png, jpg, jpeg, avif, webp ) -- Videos:( webp, mp4 ) 

    poster:"", // Puede no recibir un valor poster. -- En caso de recibirlo, debe ser en formato imagen
    
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

  const {
    link = undefined,
    url,
    title,
    media,
    poster,
  } = data[currentItemIndex];

  return (
    <>
      <article className="carousel__container">
        <Link to={`/detail/${link}`} className="carousel__link">
          {media === "webm" || media === "mp4" ? (
            <video
              className="carousel__img"
              autoPlay
              loop
              muted
              playsInline
              poster={poster ? poster : ""}
            >
              <source src={url} type={`video/${media}`} />
            </video>
          ) : media === "png" ||
            media === "jpg" ||
            media === "jpeg" ||
            media === "avif" ||
            media === "webp" ? (
            <img src={url} alt={title} className="carousel__img" />
          ) : (
            <p className="carousel__error">Media no válido corregir</p>
          )}
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
    </>
  );
};
