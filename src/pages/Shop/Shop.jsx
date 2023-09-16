import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../context/ProductContext";
import { calcPrice } from "../../utils/shopFunctions.js";
import Filters from "../../components/Filters/Filters.jsx";
import Games from "../../components/Games/Games.jsx";
import "./Shop.css";
// import { inicialProduct } from "../../service/inicialProduct";

const Shop = () => {
  const { products, isLoading, error } = useContext(ProductsContext);
  const [filterResult, setFilterResult] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(5000);
  const [nameGame, setNameGame] = useState("");

  // const [formData, setFormData] = useState(inicialProduct);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 6;
  // const totalPagesRef = useRef(null);

  // Función para filtrar productos por minPrice y maxPrice
  const filterProducts = () => {
    const filteredProducts = products.filter(element => {
      const total = calcPrice(element.price, element.offer);

      // Filtrar por precio mínimo y máximo
      const priceFilter =
        (!minPrice || total >= minPrice) && (!maxPrice || total <= maxPrice);

      // Filtrar por nombre del juego (ignorar mayúsculas/minúsculas)
      const nameFilter =
        !nameGame ||
        element.title.toLowerCase().includes(nameGame.toLowerCase());

      // Combinar los filtros
      return priceFilter && nameFilter;
    });

    setFilterResult(filteredProducts);
  };

  // Llamado cuando se cambian los valores de minPrice o maxPrice
  const handleMinPriceChange = value => {
    setMinPrice(value);
  };

  const handleMaxPriceChange = value => {
    setMaxPrice(value);
  };

  const handleNameGame = value => {
    setNameGame(value);
  };

  // Cuando products, minPrice o maxPrice cambian, aplicar el filtro
  useEffect(() => {
    filterProducts();
  }, [products, minPrice, maxPrice, nameGame]);

  const startIndex = (currentPage - 1) * recordsPerPage;
  const endIndex = startIndex + recordsPerPage;

  const gamesToDisplay = filterResult.slice(startIndex, endIndex);

  // console.log(nameGame);

  return (
    <>
      <Filters
        games={products}
        onMinPriceChange={handleMinPriceChange}
        onMaxPriceChange={handleMaxPriceChange}
        onNameGameSubmit={handleNameGame}
      />
      <main className="shop container">
        <h2>Juegos</h2>
        {isLoading ? (
          <div>
            <h2>Loading...</h2>
          </div>
        ) : error ? (
          <div>
            <h2>{error}</h2>
          </div>
        ) : (
          <>
            {gamesToDisplay.length > 0 ? (
              <>
                <Games games={gamesToDisplay} />
              </>
            ) : (
              <p className="shop__result">No hay resultados</p>
            )}
          </>
        )}
      </main>
    </>
  );
};

export default Shop;

// import { useContext, useState, useEffect } from "react";
// import { ProductsContext } from "../../context/ProductContext";
// import { calcPages } from "../../utils/shopFunctions.js";
// import Paginator from "../../components/Paginator/Paginator.jsx";
// import Filters from "../../components/Filters/Filters.jsx";
// import Games from "../../components/Games/Games.jsx";
// import "./Shop.css";

// const Shop = () => {
//   console.log("render");
//   const { products, isLoading, error } = useContext(ProductsContext);
//   const [filterResult, setFilterResult] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(null);
//   const recordsPerPage = 6;

//   useEffect(() => {
//     const startIndex = (currentPage - 1) * recordsPerPage;
//     const endIndex = startIndex + recordsPerPage;
//     const gamesToDisplay = products.slice(startIndex, endIndex);
//     setTotalPages(calcPages(products.length, recordsPerPage));
//     setFilterResult(gamesToDisplay);
//   }, [products, currentPage, recordsPerPage]);

//   const handlePageChange = newPage => {
//     setCurrentPage(newPage);
//   };

//   if (isLoading) {
//     return (
//       <div>
//         <h2>Loading...</h2>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div>
//         <h2>{error}</h2>
//       </div>
//     );
//   }

//   return (
//     <>
//       <Filters games={products}/>
//       <main className="shop container">
//         <h2>Juegos</h2>
//         {filterResult.length > 0 ? (
//           <>
//             <Games games={filterResult} />
//             <Paginator
//               currentPage={currentPage}
//               totalPages={totalPages}
//               onPageChange={handlePageChange}
//             />
//           </>
//         ) : (
//           <p>No hay resultado</p>
//         )}
//       </main>
//     </>
//   );
// };

// export default Shop;
