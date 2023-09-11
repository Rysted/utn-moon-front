import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav.jsx";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home.jsx";
import Shop from "./pages/Shop/Shop.jsx";
import "./App.css";
// import ShopDetails from "./pages/Shop/ShopDetails.jsx";

export default function App() {
  const [games, setGames] = useState([]);

  const endPoint = "https://api.npoint.io/c5896f30ed32b1b4cc8e";

  useEffect(() => {
    fetch(endPoint)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setGames(data);
      })
      .catch((err) => {
        console.error("Error al llamar a la API:", err);
      });
  }, []);

  return (
    <BrowserRouter>
      <Nav />
      <Header games={games} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop">
          <Route index element={<Shop />} />
          {/* <Route path=":id" element={<ShopDetails />} /> */}
        </Route>
        <Route path="*" element={<h2>Pagina de Error</h2>} />
      </Routes>
    </BrowserRouter>
  );
}
