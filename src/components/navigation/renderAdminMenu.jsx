// Compara un objeto y verifica si la propiedad role es "administrador"

export const renderAdminMenu = user => {
  const administrador = user && user.role === "administrador";
  const usuario = user && user.role === "usuario";

  if (administrador) {
    return (
      <>
        <li className="menu__item">
          <a href="#" aria-label="Biblioteca" className="menu__link">
            <picture className="menu__picture">
              <img
                className="menu__img"
                src="./src/assets/images/icons/game.svg"
                alt="logo de biblioteca"
              />
            </picture>
            <p>Biblioteca</p>
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
            <p>Usuario</p>
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
            <p>Análisis</p>
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
            <p>Papelera</p>
          </a>
        </li>
      </>
    );
  }

  if (usuario) {
    return (
      <>
        <li className="menu__item">
          <a href="#" aria-label="Biblioteca" className="menu__link">
            <picture className="menu__picture">
              <img
                className="menu__img"
                src="./src/assets/images/icons/game.svg"
                alt="logo de biblioteca"
              />
            </picture>
            <p>Biblioteca</p>
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
            <p>Usuario</p>
          </a>
        </li>
      </>
    );
  }

  return null;
};
