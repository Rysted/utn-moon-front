import { ProductContextProvider } from "./context/ProductsContext";
import { CartProvider } from "./context/CartContext.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopDetails from "./pages/ShopDetails/ShopDetails";
import NotFound from "./pages/NotFound/NotFound";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav.jsx";
import { Cart } from "./pages/Cart/Cart.jsx";
import Home from "./pages/Home/Home.jsx";
import Shop from "./pages/Shop/Shop.jsx";
import Edition from "./pages/Edition/Edition.jsx";
import "./App.css";

export const App = () => {
  return (
    <BrowserRouter>
      <ProductContextProvider>
        <CartProvider>
          <Nav />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/detail/:id" element={<ShopDetails />} />
            <Route path="/create" element={<Edition />} />
            <Route path="/edition" element={<Edition />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </CartProvider>
      </ProductContextProvider>
    </BrowserRouter>
  );
};
