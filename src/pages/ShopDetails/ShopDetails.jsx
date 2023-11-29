import { useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ShopDetailsIconsMethod } from "./ShopDetailsIconsMethod.jsx";
import { ProductsContext } from "../../context/ProductsContext.jsx";
import { calcPrice } from "../../utils/shopFunctions.js";
import { Loading } from "../../components/Load/Loading.jsx";
import Left from "../../assets/images/icons/arrow-left.svg";
import "./ShopDetails.css";

const ShopDetails = () => {
  const { products, error, isLoading } = useContext(ProductsContext);
  const pagePrev = useNavigate();
  const { id } = useParams();
  const newData = products.find(objeto => objeto.id === Number(id));

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

  const starTotal = newData.rating;
  const starsAndNone = [];

  for (let i = 0; i < 5; i++) {
    starsAndNone.push(
      starTotal >= i + 1
        ? "star"
        : starTotal >= i + 0.5
        ? "star--half"
        : "star--none"
    );
  }

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
        <p>{newData.title}</p>
      </div>

      <div className="details__content">
        <img
          className="details__main-img"
          src={`${newData.img}`}
          alt={`imagen de ${newData.title}`}
        />
        <div className="details__data">
          <div className="details__datas">
            <h2>{newData.title}</h2>
            <ShopDetailsIconsMethod id={id} />

            <div className="stars">
              {starsAndNone.map((element, index) => (
                <div className={element} key={index}></div>
              ))}
            </div>
            <div className="details__cost">
              {newData.offer > 0 ? (
                <>
                  <p className="details__text">
                    <span className="details__price">
                      ${calcPrice(newData.price, newData.offer)}{" "}
                    </span>
                    <span className="details__offer">{newData.offer}%</span>
                  </p>

                  <p className="details__total">${newData.price}</p>
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
            {newData.genres.map((genre, index) => (
              <p key={index}>{genre}</p>
            ))}
          </div>
        </div>

        <p className="details__description">{newData.short_description}</p>
      </div>

      <div className="details__ctas">
        <a className="cta cta--primary" href="#" aria-label="enlace de comprar">
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
  );
};

export default ShopDetails;
