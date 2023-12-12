import "./Home.css";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import { MediaCarousel } from "../../components/MediaCarousel/MediaCarousel";
import { ProductsContext } from "../../context/ProductsContext";
import { Loading } from "../../components/Load/Loading";
import { Games } from "../../components/Game/Games.jsx";

import { advertisements } from "./advertisements.js";

const Home = () => {
  const [arrayGenres, setArrayGenres] = useState([]);

  const { products, isLoading, error } = useContext(ProductsContext);

  const genresStatic = ["Acción", "MMOARPG"];

  useEffect(() => {
    const updatedArrayGenres = [];

    genresStatic.forEach((genre) => {
      const gamesFilter = products.filter((game) =>
        game.genres.includes(genre)
      );
      updatedArrayGenres.push(gamesFilter.slice(0, 3));
    });

    setArrayGenres(updatedArrayGenres);
  }, [products]);

  if (isLoading) return <Loading />;

  if (error) return <h2>{error}</h2>;

  if (arrayGenres.length === 0) return <h2>No hay juegos disponibles</h2>;

  return (
    products && (
      <main className="main right-shifted">
        <MediaCarousel data={advertisements} />

        <section className="recommended">
          <h2 className="recommended__title">Recomendado para ti</h2>
          <div className="products">
            {arrayGenres.map((genres, index) => (
              <div className="products__list border-line" key={index}>
                <h3 className="products__title-genre">{`Juegos de ${genresStatic[index]}`}</h3>
                <div className="products__items">
                  <Games className="products__item" games={genres} />
                </div>
                <div className="product__see-more">
                  {arrayGenres[index].length >= 3 && (
                    <Link
                      to={`/shop?genre=${genres}`}
                      className="product__see-more-link adjustSize"
                    >
                      ver más
                    </Link>
                  )}
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
