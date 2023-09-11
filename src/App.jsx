import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav.jsx";
import Shop from "./pages/Shop/Shop.jsx";
import "./App.css";
// import ShopDetails from "./pages/Shop/ShopDetails.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/shop">
          <Route index element={<Shop />} />
          {/* <Route path=":id" element={<ShopDetails />} /> */}
        </Route>
        <Route path="*" element={<h2>Pagina de Error</h2>} />
      </Routes>
    </BrowserRouter>
  );
}
