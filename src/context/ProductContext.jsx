import { createContext, useState, useEffect } from "react";
import { inicialProduct } from "../service/inicialProduct";
import { getAllProducts } from "../service/productService";

export const ProductsContext = createContext(inicialProduct);

export const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fechData = async () => {
    try {
      setError(null);
      setIsLoading(true);
      const data = await getAllProducts();
      setProducts(data);
    } catch (error) {
      console.error("Error al llamar a la API:", error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fechData();
  }, []);

  const contextValues = { products, isLoading, error };

  return (
    <ProductsContext.Provider value={contextValues}>
      {children}
    </ProductsContext.Provider>
  );
};
