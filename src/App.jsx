import { ProductsContextProvider } from "./context/ProductContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopDetails from "./pages/Shop/ShopDetails";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav.jsx";
import Home from "./pages/Home/Home.jsx";
import Shop from "./pages/Shop/Shop.jsx";

import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <ProductsContextProvider>
        <Nav />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop">
            <Route index element={<Shop />} />
            <Route path=":id" element={<ShopDetails />} />
          </Route>
          <Route path="*" element={<h2>Pagina de Error</h2>} />
        </Routes>
      </ProductsContextProvider>
    </BrowserRouter>
  );
}
