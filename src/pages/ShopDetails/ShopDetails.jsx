import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { calcPrice } from "../../utils/functions/shopFunctions.js";
import "./ShopDetails.css";

const ShopDetails = () => {
  const pagePrev = useNavigate();
  const handlePagePrev = () => pagePrev("/shop");
  const baseUrl = "https://api.npoint.io/c5896f30ed32b1b4cc8e";
  const [data, setData] = useState({});
  const { id } = useParams(); // Obtén el parámetro 'id' de la URL

  useEffect(() => {
    const callApi = async url => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error(error);
      }
    };

    callApi(baseUrl);
  }, [baseUrl]); // Agrega 'baseUrl' como dependencia

  // Verifica si 'newData' contiene datos válidos antes de usarlo en el JSX
  if (!data || !data.length || !id) {
    return <div>Cargando...</div>;
  }

  const newData = data.find(objeto => objeto.id == id);

  return (
    <div className="details container">
      <div className="details__preview">
        <button
          className="details__link"
          onClick={handlePagePrev}
          aria-label="enlace de volver"
        >
          <img
            className="details__img"
            src="./assets/images/icons/arrow-left.svg"
            alt="flecha hacia la izquierda"
          />
          <p>Tienda</p>
        </button>
        <img
          className="details__img"
          src="../assets/images/icons/arrow-right.svg"
          alt="flecha hacia la derecha"
        />
        <p>{newData.title}</p>
      </div>

      <div className="details__content">
        <img src={newData.img} alt={`imagen de ${newData.title}`} />
        <div className="details__data">
          <div className="details__datas">
            <h2>{newData.title}</h2>
            <div className="stars">
              <fieldset className="stars__items">
                <input type="radio" name="stars" id="st5" />
                <label aria-label="estrella 5" htmlFor="st5">
                  <span className="star__stroke">
                    <span className="star__fill"></span>
                  </span>
                </label>
                <input type="radio" name="stars" id="st4" />
                <label aria-label="estrella 4" htmlFor="st4">
                  <span className="star__stroke">
                    <span className="star__fill"></span>
                  </span>
                </label>
                <input type="radio" name="stars" id="st3" />
                <label aria-label="estrella 3" htmlFor="st3">
                  <span className="star__stroke">
                    <span className="star__fill"></span>
                  </span>
                </label>
                <input type="radio" name="stars" id="st2" />
                <label aria-label="estrella 2" htmlFor="st2">
                  <span className="star__stroke">
                    <span className="star__fill"></span>
                  </span>
                </label>
                <input type="radio" name="stars" id="st1" />
                <label aria-label="estrella 1" htmlFor="st1">
                  <span className="star__stroke">
                    <span className="star__fill"></span>
                  </span>
                </label>
              </fieldset>
            </div>
            <div className="details__cost">
              <p className="details__price">
                ${calcPrice(newData.price, newData.offer)}{" "}
                <span>{newData.offer}% OFF</span>
              </p>
              <p className="details__offer">${newData.price}</p>
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
          <h3>Categoria</h3>

          <div className="details__roles">
            <p>{newData.genre[0]}</p>
            <p>{newData.genre[1]}</p>
            <p>{newData.genre[2]}</p>
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
