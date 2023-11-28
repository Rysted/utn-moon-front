import { Link } from "react-router-dom";
import Eliminate from "../../assets/images/icons/eliminate.svg";
import Change from "../../assets/images/icons/change.svg";
import { useState } from "react";

export const ShopDetailsIconsMethod = ({ id }) => {
  const [showAlert, setShowAlert] = useState(false);

  console.log(id);

  const handleEliminateClick = () => {
    // Aquí puedes realizar acciones adicionales antes de mostrar la alerta si es necesario
    setShowAlert(true);
  };

  const handleCancelClick = () => {
    setShowAlert(false);
  };

  const handleAcceptClick = () => {
    setShowAlert(false);
  };

  return (
    <>
      <div className="details__icons--method">
        <Link className="details__icon--method" to="/edition">
          <img src={Change} alt="Icono para editar juego" />
        </Link>

        <button
          className="details__icon--method"
          onClick={handleEliminateClick}
        >
          <img src={Eliminate} alt="Icono para eliminar juego" />
        </button>
      </div>

      <div
        className={`details__alert-content ${
          showAlert === true ? "details__alert-content--opacity" : ""
        } `}
        onClick={handleCancelClick}
      >
        <div className="details__alert">
          <p>¿Estás seguro de que deseas eliminar este juego?</p>

          <div className="details__alert-buttons">
            <button className="cta--alert" onClick={handleCancelClick}>
              Cancelar
            </button>
            <button className="cta--alert" onClick={handleAcceptClick}>
              Aceptar
            </button>
          </div>
        </div>
      </div>
      {/* )} */}
    </>
  );
};
