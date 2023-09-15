// Importar las dependencias necesarias
import { createContext, useState, useEffect } from "react";
import { initialProduct } from "../services/initialProduct";
import { getAllProducts } from "../services/productService";

// Crear el contexto de productos
export const ProductsContext = createContext([initialProduct]);

// Crear el proveedor de contexto de productos
export const ProductContextProvider = ({ children }) => {
  //! Variables de estado para los juegos, la carga y el error
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  //! Función para obtener los datos de los productos
  const fetchData = async () => {
    try {
      setError(null);
      setIsLoading(true);
      const data = await getAllProducts();
      setProducts(data);
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
        products,
        isLoading,
        error,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
