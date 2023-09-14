import { useContext, useState, useEffect } from "react";
import { ProductsContext } from "../../context/ProductsContext";

import { Product } from "../../components/ProductContainer/Product";
import "./Home.css";

const Home = () => {
  const { games } = useContext(ProductsContext);

  /*   const [genreData, setGenreData] = useState({});

  const arrayGenres = ["Estrategia", "Aventura", "Shooter"];

  useEffect(() => {
    const genreData = {};

    arrayGenres.forEach((genre) => {
      genreData[genre] = games
        .filter((game) => game.genre.includes(genre))
        .slice(0, 3);
    });

    setGenreData(genreData);
  }, []);

  console.log(genreData); */

  const arrayGenres = ["Estrategia", "Aventura", "Shooter"];

  const genreData = {};

  arrayGenres.forEach((genre) => {
    genreData[genre] = games
      .filter((game) => game.genre.includes(genre))
      .slice(0, 3);
  });

  console.log(genreData);

  //! Variables de estado para los Datos de géneros
  /*   const [genreData, setGenreData] = useState({});

  const getGenresFilter = (array) => {
    const gamesFilters = [];

    array.forEach((reqGenre) => {
      gamesFilters[reqGenre] = games.filter((game) =>
        game.genre.includes(reqGenre)
      );
    });
    

    console.log(gamesFilters);

     const gamesFilter = array.reduce((accumulator, genre) => {
      accumulator[genre] = games.filter((game) => game.genre.includes(genre));
      return accumulator;
    }, []); 

    setGenreData( gamesFilter );
  };

  const arrayGenres = ["Estrategia", "Aventura", "Shooter"];

  useEffect(() => {
    getGenresFilter(arrayGenres);
  }, []); */

  return (
    <main className="main right-shifted">
      <section className="recommended">
        <h2 className="recommended__title">Recomendado para ti</h2>
        <div className="products">
          {arrayGenres.map((genre) => (
            <Product
              key={genre}
              genreData={genreData[genre]}
              titleGenre={genre}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
