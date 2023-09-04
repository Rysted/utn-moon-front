export const renderAdminMenu = () => {
  return (
    <>
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
            <img src="./src/assets/images/icons/Logo.svg" alt="Logo de Moon" />
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
                <h2>Inicio</h2>
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
                <h2>Tienda</h2>
              </a>
            </li>

            <li className="menu__item">
              <a href="#" aria-label="Biblioteca" className="menu__link">
                <picture className="menu__picture">
                  <img
                    className="menu__img"
                    src="./src/assets/images/icons/game.svg"
                    alt="logo de biblioteca"
                  />
                </picture>
                <h2>Biblioteca</h2>
              </a>
            </li>

            <li className="menu__item">
              <a href="#" aria-label="Usuario" className="menu__link">
                <picture className="menu__picture">
                  <img
                    className="menu__img"
                    src="./src/assets/images/icons/user.svg"
                    alt="logo de usuario"
                  />
                </picture>
                <h2>Usuario</h2>
              </a>
            </li>

            <li className="menu__item">
              <a href="#" aria-label="Analisis" className="menu__link">
                <picture className="menu__picture">
                  <img
                    className="menu__img"
                    src="./src/assets/images/icons/analisis.svg"
                    alt="logo de analisis"
                  />
                </picture>
                <h2>Análisis</h2>
              </a>
            </li>

            <li className="menu__item">
              <a href="#" aria-label="Papelera" className="menu__link">
                <picture className="menu__picture">
                  <img
                    className="menu__img"
                    src="./src/assets/images/icons/papelera.svg"
                    alt="logo de papelera"
                  />
                </picture>
                <h2>Papelera</h2>
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
                <h2>Ajustes</h2>
              </a>
            </li>

            <li className="menu__item">
              <a href="#" aria-label="Ayuda" className="menu__link">
                <picture className="menu__picture">
                  <img
                    className="menu__img"
                    src="./src/assets/images/icons/ayuda.svg"
                    alt="logo de ayuda"
                  />
                </picture>
                <h2>Ayuda</h2>
              </a>
            </li>
          </ul>
        </nav>

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
                <h2>Salir</h2>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
