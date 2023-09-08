import Navigation from "./components/Nav/Nav.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop/Shop.jsx";

import "./App.css";

export default function App() {
  return (
    <>
      <Navigation />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h3>Hola</h3>} />
          <Route path="/shop" element={<Shop />} />
          {/* <Route path="*" element={<NoMatch />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}
