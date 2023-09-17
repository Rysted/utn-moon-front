// Importar las dependencias necesarias
import { createContext, useEffect, useState } from "react";
import { initialProduct } from "./initialProduct.jsx";
import { getAllProducts } from "./productsService.jsx";

// Crear el contexto de productos
export const RickAndMortyContext = createContext([initialProduct]);

export function RickAndMortyProvider({ children }) {
  // Variables de estado para los juegos, la carga y el error
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Función para obtener los datos de los productos
  const fetchData = async () => {
    try {
      setError(null);
      setIsLoading(true);
      const data = await getAllProducts();
      setProducts(data);
    } catch (error) {
      console.error(error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Efecto para inicializar el contexto
  useEffect(() => {
    fetchData();
  }, []);

  // Devolver el proveedor de contexto
  const contextValues = { products, isLoading, error };

  return (
    <ProductsContext.Provider value={contextValues}>
      {children}
    </ProductsContext.Provider>
  );
}
