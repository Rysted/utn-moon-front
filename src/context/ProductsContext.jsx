// Importar las dependencias necesarias
import { createContext, useState, useEffect } from "react";
import { initialProduct } from "../services/initialProduct";
import { getAllProducts } from "../services/productService";

// Crear el contexto de productos
export const ProductsContext = createContext([initialProduct]);

// Crear el proveedor de contexto de productos
export const ProductContextProvider = ({ children }) => {
  //! Variables de estado para los juegos, la carga y el error
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  //! Variables de estado para el buscador
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  //! Función para abrir la lista de productos
  const getGamesFilter = (query) => {
    setSearchQuery(query);
    // Filtrar los productos basados en la query
    const gamesFilter = games.filter((game) =>
      game.title.toLowerCase().includes(query)
    );
    setFilteredProducts(gamesFilter);
  };
  const onCloseList = () => {
    setSearchQuery("");
    setFilteredProducts([]);
  };
  //! Función para obtener los datos de los juegos por género
  const getGamesByGenre = (genre) => {
    const gamesFilter = games.filter((game) => game.genre.includes(genre));
    return gamesFilter;
  };

  //! Función para obtener los datos de los productos
  const fetchData = async () => {
    try {
      setError(null);
      setIsLoading(true);
      const data = await getAllProducts();
      setGames(data);
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Efecto para inicializar el contexto
  useEffect(() => {
    fetchData();
  }, []);

  // Devolver el proveedor de contexto
  return (
    <ProductsContext.Provider
      value={{
        games,
        isLoading,
        error,
        getGamesFilter,
        searchQuery,
        onCloseList,
        filteredProducts,
        getGamesByGenre,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
