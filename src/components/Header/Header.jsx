import { Link } from "react-router-dom";
import { Form } from "../Search/Form";

import "./Header.css";
import cartIcon from "../../assets/images/icons/cart.svg";

const Header = () => {
  return (
    <header className="header right-shifted">
      <div className="header__wrapper">
        <Link to="/" className="header__link">
          <img
            src="./images/Logo.svg"
            alt="Logotipo Moon"
            className="header__logo"
          />
        </Link>

        <Form />

        <div className="header__user">
          <Link to="/profile" className="header__link header__profile">
            <img
              src="./user/seba.jpg"
              alt="Imagen del usuario"
              className="header__profile-image"
            />
            <div className="header__profile-detail">
              <span className="header__profile-name">@sebastianszz</span>
              <span className="header__profile-email">sebastian@gmail.com</span>
            </div>
          </Link>
          <Link to="/cart" className="header__link">
            <img
              src={cartIcon}
              alt="Icono del carrito"
              className="header__icon icon--cart"
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
