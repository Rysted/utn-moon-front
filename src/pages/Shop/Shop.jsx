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
import { Loading } from "../../components/Load/Loading.jsx";

const Shop = () => {
  const { products, isLoading, error } = useContext(ProductsContext);
  const [filterResult, setFilterResult] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [filterValues, setFilterValues] = useState({
    developer: "",
    nameGame: "",
    genre: "",
    maxPrice: 15000,
    minPrice: 0,
    order: "relevant",
    publisher: "",
  });

  const recordsPerPage = 8;
  const startIndex = (currentPage - 1) * recordsPerPage;
  const endIndex = startIndex + recordsPerPage;
  const gamesToDisplay = filterResult.slice(startIndex, endIndex);

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
      <main className="shop container">
        <Filters
          games={products}
          onFilterSubmit={handleFilterSubmit}
          filterValues={filterValues}
        />
        <h2>Juegos</h2>
        {isLoading ? (
          <Loading />
        ) : error ? (
          <div>
            <h2>{error}</h2>
          </div>
        ) : (
          <>
            {gamesToDisplay.length > 0 ? (
              <>
                <div className="games">
                  <Games games={gamesToDisplay} />
                </div>
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
