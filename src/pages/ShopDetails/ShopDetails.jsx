import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { ProductsContext } from "../../context/ProductsContext.jsx";
import { calcPrice } from "../../utils/shopFunctions.js";
import { Loading } from "../../components/Load/Loading.jsx";
import arrowLeft from '"../../assets/images/icons/arrow-left.svg"';

import "./ShopDetails.css";

const ShopDetails = () => {
  const { products, isLoading, error } = useContext(ProductsContext);
  const pagePrev = useNavigate();
  const handlePagePrev = () => pagePrev("/shop");
  const { id } = useParams();
  const newData = products.find((objeto) => objeto.id == id);

  if (!newData) {
    return (
      <>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod aliquid
          quo, repellendus officia perspiciatis quam tempore exercitationem
          quis, error cupiditate itaque dolorum maxime! Magnam facere nulla a?
          In, voluptas expedita.
        </p>
      </>
    );
  }

  const starTotal = newData.rating;
  const starsAndNone = [];

  for (let i = 0; i < 5; i++) {
    starsAndNone.push(
      starTotal >= i + 1
        ? "star"
        : starTotal >= `${i}.5`
        ? "star--half"
        : "star--none"
    );
  }

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : error ? (
        <div>
          <h2>ERROR</h2>
        </div>
      ) : (
        <div className="details container">
          <div className="details__preview">
            <button
              className="details__link"
              onClick={handlePagePrev}
              aria-label="enlace de volver"
            >
              <img
                className="details__img"
                src={arrowLeft}
                alt="flecha hacia la izquierda"
              />
              <p>Tienda</p>
            </button>
            <p className="details__icon">&#62;</p>
            <p>{newData.title}</p>
          </div>

          <div className="details__content">
            <img src={newData.img} alt={`imagen de ${newData.title}`} />
            <div className="details__data">
              <div className="details__datas">
                <h2>{newData.title}</h2>
                <div className="stars">
                  {starsAndNone.map((element, index) => (
                    <div className={element} key={index}></div>
                  ))}
                </div>
                <div className="details__cost">
                  {newData.offer > 0 ? (
                    <>
                      <p className="details__price">
                        ${calcPrice(newData.price, newData.offer)}{" "}
                        <span>{newData.offer}% OFF</span>
                      </p>
                      <p className="details__offer">${newData.price}</p>
                    </>
                  ) : (
                    <p className="details__price">${newData.price}</p>
                  )}
                </div>

                <div className="details__info">
                  <p>
                    <span>Desarrollador:</span> {newData.developer}
                  </p>
                  <p>
                    <span>Editor:</span> {newData.publisher}
                  </p>
                  <p>
                    <span>Lanzado:</span> {newData.release_date}
                  </p>
                </div>
              </div>
            </div>

            <div className="details__categories">
              <h3>Categoría</h3>
              <div className="details__roles">
                {newData.genre.map((genre, index) => (
                  <p key={index}>{genre}</p>
                ))}
              </div>
            </div>

            <p className="details__description">{newData.short_description}</p>
          </div>

          <div className="details__ctas">
            <a
              className="cta cta--primary"
              href="#"
              aria-label="enlace de comprar"
            >
              comprar ahora
            </a>
            <a
              className="cta cta--secondary"
              href="#"
              aria-label="enlace de agregar al carrito"
            >
              agregar al carrito
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default ShopDetails;
