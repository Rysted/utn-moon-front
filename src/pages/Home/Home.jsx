import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";

import { Product } from "../../components/ProductContainer/Product";
import { MediaCarousel } from "../../components/MediaCarousel/MediaCarousel";
import { Loading } from "../../components/Load/Loading";
import "./Home.css";

const Home = () => {
  //! Variables de estado para los Datos de géneros

  const { products, isLoading, error } = useContext(ProductsContext);

  //! obtener los datos de los juegos por género
  const arrayGenres = ["Estrategia", "Aventura", "Shooter"];

  const getGamesByGenre = (genre) => {
    const gamesFilter = products.filter((game) => game.genre.includes(genre));
    return gamesFilter.slice(0, 3);
  };

  //! Carrusel publicity
  const advertisementsa = [
    {
      id: 0,
      url: "https://cdn.akamai.steamstatic.com/steam/clusters/frontpage/e9b255d0186270e491543872/webm_page_bg_spanish.webm",
      title: "mortal kombat 1",
      link: "20",
      media: "webm",
      poster:
        "https://cdn.akamai.steamstatic.com/steam/clusters/frontpage/e9b255d0186270e491543872/page_bg_spanish.jpg",
    },
    {
      id: 1,
      url: "https://i.postimg.cc/m2t66mVy/diablo-Immortal.png",
      title: "Diablo Immortal",
      link: "1",
      media: "avif",
    },
    {
      id: 2,
      url: "https://i.postimg.cc/MT9B01Fr/egs-witchfire.png",
      title: "witchfire",
      link: "21",
      media: "avif",
    },
    {
      id: 3,
      url: "https://i.postimg.cc/CKJmM24t/overwatch-2.png",
      title: "Overwatch 2",
      link: "0",
      media: "avif",
    },
    {
      id: 4,
      url: "https://i.postimg.cc/wTqmkB5C/Halo-Infinite.png",
      title: "Halo Infinite",
      link: "14",
      media: "avif",
    },
  ];

  if (isLoading) return <Loading />;

  if (error) return <h2>{error}</h2>;

  return (
    products && (
      <main className="main right-shifted">
        <section className="automated__carousel">
          <MediaCarousel data={advertisementsa} />
        </section>
        <section className="recommended">
          <h2 className="recommended__title">Recomendado para ti</h2>
          <div className="products">
            {arrayGenres.map((genre) => (
              <Product
                key={genre}
                products={getGamesByGenre(genre)}
                titleGenre={genre}
              />
            ))}
          </div>
        </section>
      </main>
    )
  );
};

export default Home;
