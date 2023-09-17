import "./Footer.css";
import LogoFooter from "../../assets/images/icons/Logo.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <section className="footer__content">
        <div className="footer__mobile-nav">
          <img src="" alt="" className="footer__mobile-logo" />
          <img src="" alt="" className="footer__mobile-img" />
        </div>
        <nav className="footer__nav">
          <h4 className="footer__nav-title">Moon</h4>
          <ul className="footer__nav-list">
            <li className="footer__nav-item">
              <a href="" className="footer__nav-link"></a>
            </li>
            <li className="footer__nav-item">
              <a href="" className="footer__nav-link"></a>
            </li>
            <li className="footer__nav-item">
              <a href="" className="footer__nav-link"></a>
            </li>
            <li className="footer__nav-item">
              <a href="" className="footer__nav-link"></a>
            </li>
          </ul>
        </nav>
        <div className="footer__secondary">
          <ul className="footer__secondary-list">
            <li className="footer__secondary-item">
              <a href="" className="footer__secondary-link"></a>
            </li>
            <li className="footer__secondary-item">
              <a href="" className="footer__secondary-link"></a>
            </li>
            <li className="footer__secondary-item">
              <a href="" className="footer__secondary-link"></a>
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
