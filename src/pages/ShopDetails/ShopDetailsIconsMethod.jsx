import { Link, useNavigate } from "react-router-dom";
import Eliminate from "../../assets/images/icons/eliminate.svg";
import Change from "../../assets/images/icons/change.svg";
import { useState } from "react";

export const ShopDetailsIconsMethod = ({ id }) => {
  const navigate = useNavigate();

  const [showAlert, setShowAlert] = useState(false);
  const [showError, setErrorAlert] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [deleteGame, setDeleteGame] = useState(false);

  const handleEliminateClick = () => {
    setShowAlert(true);
  };

  const handleCancelClick = () => {
    setShowAlert(false);
  };

  const handleAcceptClick = async () => {
    try {
      if (
        showSuccess === false &&
        showError === false &&
        deleteGame === false
      ) {
        const response = await fetch(`http://localhost:3000/api/games/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          setDeleteGame(true);
          setShowSuccess(true);
          setTimeout(() => {
            setShowSuccess(false);
            navigate(-1); // This is equivalent to goBack()
          }, 5000);
        } else {
          setErrorAlert(true);
          setTimeout(() => {
            setErrorAlert(false);
          }, 5000);
        }
      }
    } catch (error) {
      console.error("Error de red al eliminar el juego", error);
    }
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
      <p
        className={`details-form__alert details-form__alert--error ${
          showError === true ? "details-form__alert--opacity" : ""
        } `}
      >
        Eliminación del juego fallida
      </p>

      <p
        className={`details-form__alert details-form__alert--success ${
          showSuccess === true ? "details-form__alert--opacity" : ""
        }`}
      >
        Juego eliminado, recarga la página después de 5 segundos.
      </p>

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
    </>
  );
};
