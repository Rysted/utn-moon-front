import "./NotFound.css";
import Logo from "../../assets/images/icons/Logo.svg";

const NotFound = () => {
  return (
    <div className="container">
      <button className="boton">Botonparatras</button>
      <h1 className="texto">Error 404</h1>
      <p className="texto">Página no encontrada</p>
      <img src={Logo} alt="img logo" />
    </div>
  );
};

export default NotFound;
