import "./NotFound.css";
import Gato from "../../assets/images/notfound/gatoNotFound.png";
import Left from "../../assets/images/icons/arrow-left.svg";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container">
      <Link to="/Home" className="container__link" aria-label="Tienda">
        <img className="container__arrowLeft" src={Left} alt="icono de izq" />
      </Link>
      <h2 className="container__texto">Error 404</h2>
      <p className="container__texto">Página no encontrada</p>
      <img className="container__imgCat" src={Gato} alt="img logo" />
    </div>
  );
};

export default NotFound;
