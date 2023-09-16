import { ProductContextProvider } from "./context/ProductsContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Nav from "./components/Nav/Nav.jsx";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home.jsx";
import Shop from "./pages/Shop/Shop.jsx";
import ShopDetails from "./pages/ShopDetails/ShopDetails";

export const App = () => {
  return (
    <BrowserRouter>
      <ProductContextProvider>
        <Nav />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/shop">
            <Route index element={<Shop />} />
            <Route path=":id" element={<ShopDetails />} />
          </Route>
          <Route path="*" element={<h2>Pagina de Error</h2>} />
        </Routes>
      </ProductContextProvider>
    </BrowserRouter>
  );
};
