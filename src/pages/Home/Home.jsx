import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";

import { Product } from "../../components/ProductContainer/Product";
import "./Home.css";

const Home = () => {
  //! Variables de estado para los Datos de géneros

  const { getGamesByGenre } = useContext(ProductsContext);

  const arrayGenres = ["Estrategia", "Aventura", "Shooter"];

  /*  const [genreData, setGenreData] = useState([]);

  const arrayGenres = ["Estrategia", "Aventura", "Shooter"];
  useEffect(() => {
    for (const genre of arrayGenres) {
      genreData[genre] = games
        .filter((game) => game.genre.includes(genre))
        .slice(0, 3);
    }

    setGenreData(genreData);
  }, []); */

  /*   const arrayGenres = ["Estrategia", "Aventura", "Shooter"];

  const genreData = {};

  arrayGenres.forEach((genre) => {
    genreData[genre] = games
      .filter((game) => game.genre.includes(genre))
      .slice(0, 3);
  });

  console.log(genreData); */

  return (
    <main className="main right-shifted">
      <section className="recommended">
        <h2 className="recommended__title">Recomendado para ti</h2>
        <div className="products">
          {/* {genreData ? console.log(genreData) : console.log(genreData)} */}
          {arrayGenres.map((genre) => (
            <Product
              key={genre}
              genreData={getGamesByGenre(genre)}
              titleGenre={genre}
            />
          ))}
          {/* {arrayGenres.map((genre) => (
            <Product
              key={genre}
              genreData={genreData[genre]}
              titleGenre={genre}
            />
          ))} */}
        </div>
      </section>
    </main>
  );
};

export default Home;
