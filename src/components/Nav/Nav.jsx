// import { renderAdminMenu } from "./renderAdminMenu.jsx";
import { NavLink } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  return (
    <>
      <nav className="menu__nav menu__nav--primary">
        <ul className="menu__list">
          <li className="menu__item">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "menu__link menu__item--hover" : "menu__link"
              }
              aria-label="Inicio"
            >
              <img
                className="menu__img"
                src="./src/assets/images/icons/home.svg"
                alt="icono de inicio"
              />
            </NavLink>
          </li>
          <li className="menu__item">
            <button href="#search" className="menu__link" aria-label="Buscar">
              <img
                className="nav__img"
                src="./src/assets/images/icons/"
                alt="icono de buscar"
              />
            </button>
          </li>
          <li className="menu__item">
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                isActive ? "menu__link menu__item--hover" : "menu__link"
              }
              aria-label="Tienda"
            >
              <img
                className="menu__img"
                src="/src/assets/images/icons/shopping-bag.svg"
                alt="icono de tienda"
              />
            </NavLink>
          </li>
          <li className="menu__item menu__item--notification">
            <NavLink
              to="/notification"
              className={({ isActive }) =>
                isActive ? "menu__link menu__item--hover" : "menu__link"
              }
              aria-label="Notificaciones"
            >
              <img
                className="menu__img"
                src="/src/assets/images/icons/"
                alt="icono de notificación"
              />
            </NavLink>
          </li>
          <li className="menu__item">
            <NavLink
              to="/user"
              className={({ isActive }) =>
                isActive ? "menu__link menu__item--hover" : "menu__link"
              }
              aria-label="Usuario"
            >
              <img
                className="menu__img"
                src="/src/assets/images/icons/user.svg"
                alt="icono de usuario"
              />
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="menu__sidebar">
        <NavLink to="/" className="menu__logo" href="#">
          <picture className="menu__picture">
            <img src="./src/assets/images/icons/Logo.svg" alt="Logo de Moon" />
          </picture>
        </NavLink>

        <nav className="menu__nav menu__nav--secondary">
          <ul className="menu__list menu__list--sidebar">
            <li className="menu__item">
              <NavLink
                to="/"
                aria-label="Inicio"
                className={({ isActive }) =>
                  isActive ? "menu__link menu__link--select" : "menu__link"
                }
              >
                <picture className="menu__picture">
                  <img
                    className="menu__img"
                    src="./public/icons/home.svg"
                    alt="logo de inicio"
                  />
                </picture>
                <h2>Inicio</h2>
              </NavLink>
            </li>

            <li className="menu__item">
              <NavLink
                to="/shop"
                aria-label="Tienda"
                className={({ isActive }) =>
                  isActive ? "menu__link menu__link--select" : "menu__link"
                }
              >
                <picture className="menu__picture">
                  <img
                    className="menu__img"
                    src="./src/assets/images/icons/shopping-bag.svg"
                    alt="logo de tienda"
                  />
                </picture>
                <h2>Tienda</h2>
              </NavLink>
            </li>

            <li className="menu__item">
              <NavLink
                to="/library"
                aria-label="Biblioteca"
                className={({ isActive }) =>
                  isActive ? "menu__link menu__link--select" : "menu__link"
                }
              >
                <picture className="menu__picture">
                  <img
                    className="menu__img"
                    src="./src/assets/images/icons/game.svg"
                    alt="logo de biblioteca"
                  />
                </picture>
                <h2>Biblioteca</h2>
              </NavLink>
            </li>

            <li className="menu__item">
              <NavLink
                to="/user"
                aria-label="Usuario"
                className={({ isActive }) =>
                  isActive ? "menu__link menu__link--select" : "menu__link"
                }
              >
                <picture className="menu__picture">
                  <img
                    className="menu__img"
                    src="./src/assets/images/icons/user.svg"
                    alt="logo de usuario"
                  />
                </picture>
                <h2>Usuario</h2>
              </NavLink>
            </li>

            <li className="menu__item">
              <NavLink
                to="/analysis"
                aria-label="Analisis"
                className={({ isActive }) =>
                  isActive ? "menu__link menu__link--select" : "menu__link"
                }
              >
                <picture className="menu__picture">
                  <img
                    className="menu__img"
                    src="./src/assets/images/icons/analisis.svg"
                    alt="logo de analisis"
                  />
                </picture>
                <h2>Análisis</h2>
              </NavLink>
            </li>

            <li className="menu__item">
              <NavLink
                to="/bin"
                aria-label="Papelera"
                className={({ isActive }) =>
                  isActive ? "menu__link menu__link--select" : "menu__link"
                }
              >
                <picture className="menu__picture">
                  <img
                    className="menu__img"
                    src="./src/assets/images/icons/papelera.svg"
                    alt="logo de papelera"
                  />
                </picture>
                <h2>Papelera</h2>
              </NavLink>
            </li>

            <li className="menu__item">
              <NavLink
                to="/settings"
                aria-label="Ajustes"
                className={({ isActive }) =>
                  isActive ? "menu__link menu__link--select" : "menu__link"
                }
              >
                <picture className="menu__picture">
                  <img
                    className="menu__img"
                    src="./src/assets/images/icons/config.svg"
                    alt="logo de ajustes"
                  />
                </picture>
                <h2>Ajustes</h2>
              </NavLink>
            </li>

            <li className="menu__item">
              <NavLink
                to="/help"
                aria-label="Ayuda"
                className={({ isActive }) =>
                  isActive ? "menu__link menu__link--select" : "menu__link"
                }
              >
                <picture className="menu__picture">
                  <img
                    className="menu__img"
                    src="./src/assets/images/icons/ayuda.svg"
                    alt="logo de ayuda"
                  />
                </picture>
                <h2>Ayuda</h2>
              </NavLink>
            </li>
          </ul>
        </nav>

        <nav className="menu__nav menu__nav--secondary">
          <ul className="menu__list menu__list--sidebar">
            <li className="menu__item">
              <NavLink
                to="/exit"
                aria-label="Salir"
                className={({ isActive }) =>
                  isActive ? "menu__link menu__link--select" : "menu__link"
                }
              >
                <picture className="menu__picture">
                  <img
                    className="menu__img"
                    src="./src/assets/images/icons/logout.svg"
                    alt="logo de salir"
                  />
                </picture>
                <h2>Salir</h2>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
