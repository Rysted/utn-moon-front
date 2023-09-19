import { useContext, useState, useEffect } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import { Link } from "react-router-dom";

import { Product } from "../../components/ProductContainer/Product";
import "./Home.css";

const Home = () => {
  //! Variables de estado para los Datos de géneros

  const { products, isLoading } = useContext(ProductsContext);

  //! obtener los datos de los juegos por género
  const arrayGenres = ["Estrategia", "Aventura", "Shooter"];

  const getGamesByGenre = (genre) => {
    const gamesFilter = products.filter((game) => game.genre.includes(genre));
    return gamesFilter.slice(0, 3);
  };
  //!

  //! Carrusel publicity
  const publicitys = [
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
      link: null,
    },
    {
      id: 2,
      image: "https://i.postimg.cc/MT9B01Fr/egs-witchfire.png",
      title: "witchfire",
      link: null,
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

  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  const nextItem = () => {
    setCurrentItemIndex((prevValue) => (prevValue + 1) % publicitys.length);
  };

  const selectItem = (id) => {
    setCurrentItemIndex(id);
  };

  useEffect(() => {
    const intervalId = setInterval(nextItem, 5000); // Cambiar cada 5 segundos

    // Limpia el temporizador cuando el componente se desmonta o cuando cambia currentItemIndex
    return () => clearInterval(intervalId);
  }, [currentItemIndex]);

  const sliceTitle = (title) => {
    return title.length > 30 ? `${title.slice(0, 30)}...` : title;
  };
  //!

  // console.log(isLoading ? "Loading" : "Rendering...");

  return (
    <main className="main right-shifted">
      <section className="publicity">
        <article className="publicity__container">
          <Link
            to={`/detail/${publicitys[currentItemIndex].link}`}
            className="publicity__link"
          >
            <img
              src={publicitys[currentItemIndex].image}
              alt="gif publicitario diablo immortal"
              className="publicity__img"
            />
          </Link>
        </article>
        <article className="publicity__carousel--images">
          {publicitys.map(({ id, image, title }) => (
            <div
              key={id}
              className={`publicity__carousel--card ${
                id === currentItemIndex ? "publicity__selected" : ""
              }`}
              onClick={() => selectItem(id)}
            >
              <img
                src={image}
                alt="gif publicitario diablo immortal"
                className="publicity__carousel--img"
              />
              <h3 className="publicity__carousel--title">
                {sliceTitle(title)}
              </h3>
            </div>
          ))}
        </article>
      </section>
      {/* <section className="Carousel-test">
        <div className="wrapper">
          <div className="carousel">
            <div className="carousel__item">
              <div className="carousel__item-head">🐳</div>
              <div className="carousel__item-body">
                <p className="title">spouting whale</p>
                <p className="carousel-subtitle">Unicode: U+1F433</p>
              </div>
            </div>
            <div className="carousel__item">
              <div className="carousel__item-head">🐋</div>
              <div className="carousel__item-body">
                <p className="title">whale</p>
                <p className="carousel-subtitle">Unicode: U+1F40B</p>
              </div>
            </div>
            <div className="carousel__item">
              <div className="carousel__item-head">🐬</div>
              <div className="carousel__item-body">
                <p className="title">dolphin</p>
                <p className="carousel-subtitle">Unicode: U+1F42C</p>
              </div>
            </div>
            <div className="carousel__item">
              <div className="carousel__item-head">🐟</div>
              <div className="carousel__item-body">
                <p className="title">fish</p>
                <p className="carousel-subtitle">Unicode: U+1F41F</p>
              </div>
            </div>
            <div className="carousel__item">
              <div className="carousel__item-head">🐠</div>
              <div className="carousel__item-body">
                <p className="title">tropical fish</p>
                <p className="carousel-subtitle">Unicode: U+1F420</p>
              </div>
            </div>
            <div className="carousel__item">
              <div className="carousel__item-head">🐡</div>
              <div className="carousel__item-body">
                <p className="title">blowfish</p>
                <p className="carousel-subtitle">Unicode: U+1F421</p>
              </div>
            </div>
            <div className="carousel__item">
              <div className="carousel__item-head">🦈</div>
              <div className="carousel__item-body">
                <p className="title">shark</p>
                <p className="carousel-subtitle">Unicode: U+1F988</p>
              </div>
            </div>
            <div className="carousel__item">
              <div className="carousel__item-head">🐙</div>
              <div className="carousel__item-body">
                <p className="title">octopus</p>
                <p className="carousel-subtitle">Unicode: U+1F419</p>
              </div>
            </div>
            <div className="carousel__item">
              <div className="carousel__item-head">🐚</div>
              <div className="carousel__item-body">
                <p className="title">spiral shell</p>
                <p className="carousel-subtitle">Unicode: U+1F41A</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

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
  );
};

export default Home;
