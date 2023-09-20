import "./Footer.css";
import LogoFooter from "../../assets/images/icons/Logo.svg";
import { Link } from "react-router-dom";
import Fb from "../../assets/images/icons/facebook.svg";
import Ig from "../../assets/images/icons/instagram.svg";
import Git from "../../assets/images/icons/github.svg";

function Footer() {
  return (
    <footer className="footer container">
      <section className="footer__content">
        <div className="footer__mobile-nav">
          <img src={LogoFooter} alt="logo" className="footer__logo" />
        </div>
        <nav className="footer__nav">
          <h4 className="footer__nav-title">Moon</h4>
          <ul className="footer__nav-list">
            <li className="footer__nav-item">
              <Link
                to={"/NotFound"}
                className="footer__nav-link"
                aria-label="SobreMoon"
              >
                Sobre Moon
              </Link>
            </li>
            <li className="footer__nav-item">
              <Link to={"/Shop"} className="footer__nav-link">
                Tienda
              </Link>
            </li>
            <li className="footer__nav-item">
              <Link to={"/NotFound"} className="footer__nav-link">
                Bibloteca
              </Link>
            </li>
            <li className="footer__nav-item">
              <Link to={"/NotFound"} className="footer__nav-link">
                Ajustes
              </Link>
            </li>
            <li className="footer__nav-item">
              <Link to={"/NotFound"} className="footer__nav-link">
                Ayuda
              </Link>
            </li>
          </ul>
        </nav>
        <div className="footer__socials">
          <ul className="footer__socials-list">
            <li className="footer__socials-item">
              <a
                rel="noopener noreferrer"
                href="https://github.com/SeezDev/Moon"
                className="footer__socials-link"
                target="_blank"
              >
                <img
                  className="footer__socials-icons"
                  src={Git}
                  alt="LogoGit"
                />
              </a>
            </li>
            <li className="footer__socials-item">
              <a
                rel="noopener noreferrer"
                href="https://github.com/SeezDev/Moon"
                className="footer__socials-link"
                target="_blank"
              >
                <img className="footer__socials-icons" src={Fb} alt="LogoGit" />
              </a>
            </li>
            <li className="footer__socials-item">
              <a
                rel="noopener noreferrer"
                href="https://github.com/SeezDev/Moon"
                className="footer__socials-link"
                target="_blank"
              >
                <img className="footer__socials-icons" src={Ig} alt="LogoIg" />
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section>
        <p className="footer__copyright">
          @2023 Moon - Todos los derechos reservados.
        </p>
      </section>
    </footer>
  );
}

export default Footer;
