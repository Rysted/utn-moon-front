import { useContext, useEffect, useState, useCallback } from "react";
import { ProductsContext } from "../../context/ProductsContext.jsx";
import {
  filterAndSortProducts,
  calcPages,
  calcPrice,
} from "../../utils/shopFunctions.js";
import Filters from "../../components/Filters/Filters.jsx";
import Games from "../../components/Games/Games.jsx";
import Paginator from "../../components/Paginator/Paginator.jsx";
import "./Shop.css";

const Shop = () => {
  const { products, isLoading, error } = useContext(ProductsContext);
  const [filterResult, setFilterResult] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const recordsPerPage = 6;
  const startIndex = (currentPage - 1) * recordsPerPage;
  const endIndex = startIndex + recordsPerPage;
  const gamesToDisplay = filterResult.slice(startIndex, endIndex);
  const [filterValues, setFilterValues] = useState({
    developer: "",
    nameGame: "",
    genre: "",
    maxPrice: 5000,
    minPrice: 0,
    order: "relevant",
    publisher: "",
  });

  console.log(filterValues);

  const filterProducts = useCallback(() => {
    const filteredProducts = filterAndSortProducts(products, filterValues);

    setCurrentPage(1);
    setTotalPages(calcPages(filteredProducts.length, recordsPerPage));
    setFilterResult(filteredProducts);
  }, [filterValues, products]);

  useEffect(() => {
    filterProducts();
  }, [filterProducts]);

  const handleFilterSubmit = value => {
    setFilterValues(value);
  };

  const handlePageChange = newPage => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <Filters
        games={products}
        onFilterSubmit={handleFilterSubmit}
        filterValues={filterValues}
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
                <Paginator
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
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
