import "./Navigation.css";
import { renderAdminMenu } from "./renderAdminMenu.jsx";

const usuarioPuebra = {
  // role: "administrador",
  // role: "sinSesion",
  // role: "usuario",
};
// usuario y salir
// salir => sinSeccion a iniciar seccion

export default function Navigation() {
  return (
    <>
      <section className="menu">
        <nav className="menu__nav menu__nav--primary">
          <ul className="menu__list">
            <li className="menu__item">
              <a href="#" className="menu__link" aria-label="Inicio">
                <img
                  className="menu__img"
                  src="./src/assets/images/icons/home.svg"
                  alt="icono de inicio"
                />
              </a>
            </li>
            <li className="menu__item">
              <a href="#" className="menu__link" aria-label="Buscar">
                <img
                  className="nav__img"
                  src="./src/assets/images/icons/"
                  alt="icono de buscar"
                />
              </a>
            </li>
            <li className="menu__item">
              <a href="#" className="menu__link" aria-label="Tienda">
                <img
                  className="menu__img"
                  src="/src/assets/images/icons/shopping-bag.svg"
                  alt="icono de tienda"
                />
              </a>
            </li>
            <li className="menu__item menu__item--notification">
              <a href="#" className="menu__link" aria-label="Notificaciones">
                <img
                  className="menu__img"
                  src="/src/assets/images/icons/"
                  alt="icono de notificación"
                />
              </a>
            </li>
            <li className="menu__item">
              <a href="#" className="menu__link" aria-label="Usuario">
                <img
                  className="menu__img"
                  src="/src/assets/images/icons/user.svg"
                  alt="icono de usuario"
                />
              </a>
            </li>
          </ul>
        </nav>

        <div className="menu__sidebar">
          <a className="menu__logo" href="#">
            <picture className="menu__picture">
              <img
                src="./src/assets/images/icons/Logo.svg"
                alt="Logo de Moon"
              />
            </picture>
          </a>

          <nav className="menu__nav menu__nav--secondary">
            <ul className="menu__list menu__list--sidebar">
              <li className="menu__item">
                <a
                  href="#"
                  aria-label="Inicio"
                  className="menu__link menu__link--select"
                >
                  <picture className="menu__picture">
                    <img
                      className="menu__img"
                      src="./src/assets/images/icons/home.svg"
                      alt="logo de inicio"
                    />
                  </picture>
                  <p>Inicio</p>
                </a>
              </li>
              <li className="menu__item">
                <a href="#" aria-label="Tienda" className="menu__link">
                  <picture className="menu__picture">
                    <img
                      className="menu__img"
                      src="./src/assets/images/icons/shopping-bag.svg"
                      alt="logo de tienda"
                    />
                  </picture>
                  <p>Tienda</p>
                </a>
              </li>

              <li className="menu__item">
                <a href="#" aria-label="Ajustes" className="menu__link">
                  <picture className="menu__picture">
                    <img
                      className="menu__img"
                      src="./src/assets/images/icons/config.svg"
                      alt="logo de ajustes"
                    />
                  </picture>
                  <p>Ajustes</p>
                </a>
              </li>
              {renderAdminMenu(usuarioPuebra)}

              <li className="menu__item">
                <a href="#" aria-label="Ayuda" className="menu__link">
                  <picture className="menu__picture">
                    <img
                      className="menu__img"
                      src="./src/assets/images/icons/ayuda.svg"
                      alt="logo de ayuda"
                    />
                  </picture>
                  <p>Ayuda</p>
                </a>
              </li>
            </ul>
          </nav>

          {/* 
          <nav className="menu__nav menu__nav--secondary">
            <ul className="menu__list menu__list--sidebar">
              <li className="menu__item">
                <a href="#" aria-label="Salir" className="menu__link">
                  <picture className="menu__picture">
                    <img
                      className="menu__img"
                      src="./src/assets/images/icons/logout.svg"
                      alt="logo de salir"
                    />
                  </picture>
                  <p>Salir</p>
                </a>
              </li>
            </ul>
          </nav> */}
        </div>
      </section>
    </>
  );
}
