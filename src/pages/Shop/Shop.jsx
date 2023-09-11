import { useState, useEffect } from "react";
import { selection } from "../../utils/functions/shopFunctions.js";
import Paginator from "../../components/Paginator/Paginator.jsx";
import Filters from "../../components/Filters/Filters.jsx";
import Games from "../../components/Games/Games.jsx";
import "./Shop.css";

const Shop = () => {
  console.log("render");

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [filterResult, setFilterResult] = useState([]);
  const [dateFilters, setDateFilters] = useState({
    name: "",
    genre: "",
    editor: "",
    priceMin: 0,
    priceMax: "",
    developer: "",
    order: "",
  });
  const recordsPerPage = 6;
  const baseUrl = "https://api.npoint.io/c5896f30ed32b1b4cc8e"; // Cambia la URL de la API

  useEffect(() => {
    const callApi = async () => {
      try {
        const response = await fetch(baseUrl);
        const result = await response.json();

        const filteredResult = selection(result);

        if (filteredResult.length) {
          const totalPages = calcPages(filteredResult.length);
          setTotalPages(totalPages);

          const startIndex = (currentPage - 1) * recordsPerPage;
          const endIndex = startIndex + recordsPerPage;
          const gamesToDisplay = filteredResult.slice(startIndex, endIndex);

          // Utiliza el estado de React para gestionar los datos en lugar de manipular el DOM directamente
          setFilterResult(gamesToDisplay);
        } else {
          setTotalPages(1);
          setFilterResult([]);
        }
      } catch (error) {
        console.error("Error al llamar a la API:", error);
      }
    };

    const calcPages = total => {
      return Math.ceil(total / recordsPerPage);
    };

    // Llama a la función cuando cambia currentPage o dateFilters
    callApi();
  }, [currentPage, dateFilters]);

  const handlePageChange = newPage => {
    setCurrentPage(newPage);
  };

  const handleFilterChange = (filterType, value) => {
    // Actualiza el estado de los filtros
    setDateFilters({ ...dateFilters, [filterType]: value });
  };

  return (
    <>
      <div className="header">
        <h1>Hola</h1>
      </div>
      <Filters />
      <main className="shop container">
        <div className="hola"></div>
        <h2>Juegos</h2>
        {filterResult.length > 0 ? (
          <>
            <Games games={filterResult} />
            <Paginator
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </>
        ) : (
          <p>No hay resultado</p>
        )}
      </main>
    </>
  );
};

export default Shop;
