import { Link } from "react-router-dom";
import { FormSearch } from "../Search/FormSearch";

import "./Header.css";
import logoIcon from "../../assets/images/logo/Logo.svg";
import userIcon from "../../assets/images/user/seba.jpg";
import cartIcon from "../../assets/images/icons/cart.svg";

const Header = () => {
  return (
    <header className="header right-shifted">
      <div className="header__wrapper">
        <Link to="/" className="header__link">
          <img src={logoIcon} alt="Logotipo Moon" className="header__logo" />
        </Link>

        <FormSearch />

        <div className="header__user">
          <Link to="/profile" className="header__link header__profile">
            <img
              src={userIcon}
              alt="Imagen del usuario"
              className="header__profile-image"
            />
            <div className="header__profile-detail">
              <span className="header__profile-name">@NickName</span>
              <span className="header__profile-email">user@email.com</span>
            </div>
          </Link>
          <Link to="/Cart" className="header__link">
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
