import "./Shop.css";

import { FilterPhone } from "./FilterPhone/FilterPhone.jsx";
import { Games } from "../../components/Game/Games.jsx";

import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Shop = () => {
  const initialFilters = {
    searchTerm: "",
    genre: "",
    publisher: "",
    developer: "",
    min: "",
    max: "",
    sortOrder: "ASC",
  };

  const [filtersApplied, setFilters] = useState(initialFilters);

  const [genreData, setGenreData] = useState([]);
  const [companysData, setCompanysData] = useState([]);

  const [searchResults, setSearchResults] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  const fetchDataFromApi = async (url) => {
    try {
      let response = await fetch(url);

      if (!response.ok) {
        return [];
      }

      const data = await response.json();

      console.log("Data:", data);

      const addProduct = {
        id: "AddProduct",
        name: "Agregar nuevo producto",
        img: "add.webp",
      };

      data.unshift(addProduct);

      return data;
    } catch (error) {
      console.error("Error al obtener datos:", error);
      throw error;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const host = `${import.meta.env.VITE_API}`;

      const queryParams = new URLSearchParams(location.search);

      const newFilters = {};
      for (const key of queryParams.keys()) {
        if (queryParams.get(key) !== filtersApplied[key]) {
          newFilters[key] = queryParams.get(key);
        }
      }

      setFilters((prevFilters) => ({ ...prevFilters, ...newFilters }));

      try {
        const data = await fetchDataFromApi(
          `${host}/api/games?${queryParams.toString()}`
        );

        setSearchResults(data);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
    };

    fetchData();
  }, [location.search]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [genresResponse, companyResponse] = await Promise.all([
          fetch(`${import.meta.env.VITE_API}/api/genres`),
          fetch(`${import.meta.env.VITE_API}/api/company`),
        ]);

        const [genres, companys] = await Promise.all([
          genresResponse.json(),
          companyResponse.json(),
        ]);

        setGenreData(genres || []);
        setCompanysData(companys || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleInputChange = (e) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [e.target.name]: e.target.value,
    }));
  };

  const handleReset = (e) => {
    setFilters(initialFilters);
    handleSubmit(e);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const queryParams = new URLSearchParams();

    for (const key in filtersApplied) {
      if (filtersApplied[key] !== "") {
        queryParams.set(key, filtersApplied[key]);
      }
    }

    navigate(`/shop?${queryParams.toString()}`);

    try {
      const host = `${import.meta.env.VITE_API}`;
      const data = await fetchDataFromApi(
        `${host}/api/games?${queryParams.toString()}`
      );
      setSearchResults(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const renderResults = () => {
    if (searchResults.length === 0) {
      return;
    }

    return (
      <div className="games__container">
        <Games games={searchResults} />
      </div>
    );
  };

  return (
    <>
      <main className="container">
        <FilterPhone
          genreData={genreData}
          companysData={companysData}
          handleInputChange={handleInputChange}
          filtersApplied={filtersApplied}
          handleSubmit={handleSubmit}
          handleReset={handleReset}
        />

        <section className="shop__games">
          <h2 className="shop__title">
            Resultados de la búsqueda: {searchResults.length}
          </h2>
          {renderResults()}
        </section>
      </main>
    </>
  );
};

export default Shop;
