// import { useContext, useState } from "react";
import { useContext, useRef, useState } from "react";
import { ProductsContext } from "../../context/ProductContext";
import { calcPages, calcPrice } from "../../utils/shopFunctions.js";
// import Paginator from "../../components/Paginator/Paginator.jsx";
import Filters from "../../components/Filters/Filters.jsx";
import Games from "../../components/Games/Games.jsx";
import "./Shop.css";

const Shop = () => {
  const { products, isLoading, error } = useContext(ProductsContext);

  const [filterResult, setFilterResult] = useState([]);
  const [minPrice, setMinPrice] = useState(0); // Nuevo estado para minPrice

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 6;
  const totalPagesRef = useRef(null);

  // const calculateTotalPages = () => {
  //   totalPagesRef.current = calcPages(products.length, recordsPerPage);
  // };

  // console.log(minPrice);

  // if (
  // products.length !== totalPagesRef.current ||
  // recordsPerPage !== totalPagesRef.current
  // ) {
  // calculateTotalPages();
  // }

  // Función para filtrar productos por minPrice
  const filterProductsByMinPrice = minPrice => {
    products.filter(element => {
      const total = calcPrice(element.price, element.offer);
      const productItem = total >= minPrice;
      return productItem;
    });
  };

  // const filterProductsByMinPrice = () => {
  //   products.forEach(element => {
  //     console.log(element.price)
  //   });

  // const filterPriceMin = (games, dateFilters) => {
  // const { priceMin } = dateFilters;
  // return !priceMin || calcPrice(games.price, games.offer) >= priceMin;
  // };

  // const filteredProducts = products.filter(product => {
  // Asegúrate de que minPrice no esté vacío antes de aplicar el filtro
  // if (minPrice.trim() === "") {
  // return true; // Si minPrice está vacío, muestra todos los productos
  // }
  // return product.price >= parseFloat(minPrice);
  // });

  // setFilterResult(filteredProducts);
  // setCurrentPage(1); // Restablecer la página actual al filtrar
  // };

  // Llamado cuando se cambia el valor de minPrice
  const handleMinPriceChange = value => {
    setMinPrice(value);
    filterProductsByMinPrice(value);
  };

  const startIndex = (currentPage - 1) * recordsPerPage;
  const endIndex = startIndex + recordsPerPage;

  const gamesToDisplay =
    filterResult.length > 0
      ? filterResult.slice(startIndex, endIndex)
      : products.slice(startIndex, endIndex);

  console.log(gamesToDisplay);
  return (
    <>
      {/* <Filters games={products} /> */}
      <Filters games={gamesToDisplay} onMinPriceChange={handleMinPriceChange} />
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
                {/* <Paginator
                  currentPage={currentPage}
                  totalPages={totalPagesRef.current}
                  onPageChange={newPage => setCurrentPage(newPage)}
                /> */}
              </>
            ) : (
              <p>No hay resultados</p>
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
