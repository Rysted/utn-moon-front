import "./NotFound.css";
import Gato from "../../assets/images/notfound/gatoNotFound.png";
import Left from "../../assets/images/icons/arrow-left.svg";
import { Link, useNavigate } from "react-router-dom";

const NotFound = ({ message }) => {
  const pagePrev = useNavigate();
  const handlePagePrev = () => pagePrev("/shop");

  return (
    <div className="container">
      <button
        className="error__link"
        onClick={handlePagePrev}
        aria-label="enlace de volver"
      >
        <img
          className="error__arrowLeft"
          src={Left}
          alt="flecha hacia la izquierda"
        />
      </button>
      <h2 className="error__title">Error 404</h2>
      <p className="error__text">{message || "Página no encontrada"}</p>
      <img className="error__imgCat" src={Gato} alt="img logo" />
    </div>
  );
};

export default NotFound;
