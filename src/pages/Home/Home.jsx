import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";

import { Product } from "../../components/ProductContainer/Product";
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
