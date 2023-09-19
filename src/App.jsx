import { ProductContextProvider } from "./context/ProductsContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopDetails from "./pages/ShopDetails/ShopDetails";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav.jsx";
import Home from "./pages/Home/Home.jsx";
import CheckboxGroup from "./pages/Shop/Shop.jsx";
import Footer from "./components/Footer/Footer";
import NotFound from "./pages/NotFound/NotFound";
import "./App.css";

export const App = () => {
  return (
    <BrowserRouter>
      <ProductContextProvider>
        <Nav />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/shop" element={<CheckboxGroup />} />
          <Route path="/detail/:id" element={<ShopDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </ProductContextProvider>
    </BrowserRouter>
  );
};
