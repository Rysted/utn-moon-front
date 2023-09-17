import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import { Link } from "react-router-dom";

import { Product } from "../../components/ProductContainer/Product";
import diabloImmortalImage from "../../assets/images/publicity/diablo-immortal.gif";
import "./Home.css";

const Home = () => {
  //! Variables de estado para los Datos de géneros

  const { products } = useContext(ProductsContext);

  const arrayGenres = ["Estrategia", "Aventura", "Shooter"];

  //! Función para obtener los datos de los juegos por género
  const getGamesByGenre = (genre) => {
    const gamesFilter = products.filter((game) => game.genre.includes(genre));
    return gamesFilter;
  };

  return (
    <main className="main right-shifted">
      <section className="publicity">
        <article className="publicity__container">
          <Link to={`/detail/1`} className="publicity__link">
            <img
              src={diabloImmortalImage}
              alt="gif publicitario Remnant"
              className="publicity__img"
            />
          </Link>
        </article>
      </section>
      <section></section>
      <section className="recommended">
        <h2 className="recommended__title">Recomendado para ti</h2>
        <div className="products">
          {arrayGenres.map((genre) => (
            <Product
              key={genre}
              genreData={getGamesByGenre(genre)}
              titleGenre={genre}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
