import { ProductsContext } from "../../context/ProductsContext.jsx";
import { useNavigate, useParams } from "react-router-dom";
import { calcPrice } from "../../utils/shopFunctions.js";
import { useContext } from "react";
import "./ShopDetails.css";

const ShopDetails = () => {
  const { products, isLoading, error } = useContext(ProductsContext);

  const pagePrev = useNavigate();

  const handlePagePrev = () => pagePrev("/shop");
  const { id } = useParams();

  const newData = products.find(objeto => objeto.id == id);

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

  return (
    <>
      {isLoading ? (
        <div>
          <h2>Loading...</h2>
        </div>
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
                src="/src/assets/images/icons/arrow-left.svg"
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
