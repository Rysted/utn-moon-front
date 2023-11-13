import { MediaCarousel } from "../../components/MediaCarousel/MediaCarousel";
import { ProductsContext } from "../../context/ProductsContext";
import { Loading } from "../../components/Load/Loading";
import Games from "../../components/Games/Games";
import { Link } from "react-router-dom";
import { useContext } from "react";
import "./Home.css";

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
  const advertisementsa = [
    {
      id: 0,
      image: "https://i.postimg.cc/m2t66mVy/diablo-Immortal.png",
      title: "Diablo Immortal",
      link: "1",
    },
    {
      id: 1,
      image: "https://i.postimg.cc/rsz0928W/mortal-kombat-one.png",
      title: "mortal kombat 1",
      link: "20",
    },
    {
      id: 2,
      image: "https://i.postimg.cc/MT9B01Fr/egs-witchfire.png",
      title: "witchfire",
      link: "21",
    },
    {
      id: 3,
      image: "https://i.postimg.cc/CKJmM24t/overwatch-2.png",
      title: "Overwatch 2",
      link: "0",
    },
    {
      id: 4,
      image: "https://i.postimg.cc/wTqmkB5C/Halo-Infinite.png",
      title: "Halo Infinite",
      link: "14",
    },
  ];

  if (isLoading) return <Loading />;

  if (error) return <h2>{error}</h2>;

  return (
    products && (
      <main className="main right-shifted">
        <MediaCarousel data={advertisementsa} />

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
                    to="/genre"
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
