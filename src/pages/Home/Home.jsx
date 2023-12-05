import "./Home.css";
import { Link } from "react-router-dom";
import { useContext } from "react";

import { MediaCarousel } from "../../components/MediaCarousel/MediaCarousel";
import { ProductsContext } from "../../context/ProductsContext";
import { Loading } from "../../components/Load/Loading";
import { Games } from "../../components/Game/Games.jsx";

import { advertisements } from "./advertisements.js";

const Home = () => {
  //! Variables de estado para los Datos de géneros

  const { products, isLoading, error } = useContext(ProductsContext);

  //! obtener los datos de los juegos por género
  const arrayGenres = ["Estrategia", "Aventura", "Shooter"];

  const getGamesByGenre = (genre) => {
    const gamesFilter = products.filter((game) => game.genres.includes(genre));
    return gamesFilter.slice(0, 3);
  };

  //! Carrusel publicity

  if (isLoading) return <Loading />;

  if (error) return <h2>{error}</h2>;

  return (
    products && (
      <main className="main right-shifted">
        <MediaCarousel data={advertisements} />

        <section className="recommended">
          <h2 className="recommended__title">Recomendado para ti</h2>
          <div className="products">
            {arrayGenres.map((genre) => (
              <div className="products__list border-line" key={genre}>
                <h3 className="products__title-genre">{`Juegos de ${genre}`}</h3>
                <Games
                  className="products__item"
                  games={getGamesByGenre(genre)}
                />
                <div className="product__see-more">
                  <Link
                    to={`/shop?genre=${genre}`}
                    className="product__see-more-link adjustSize"
                  >
                    ver más
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    )
  );
};

export default Home;
