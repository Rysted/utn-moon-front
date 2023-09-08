import Filters from "./Filters/Filters.jsx";
import "./Shop.css";

const shop = () => {
  return (
    <main className="shop container">
      <div className="hola"></div>
      <Filters />
      <h2>Juegos</h2>
      <div>
        <div className="shop__items" id="shopItems"></div>
        <ul className="shop__pagination" id="pagination"></ul>
      </div>
      <div>hola</div>
    </main>
  );
};

export default shop;
