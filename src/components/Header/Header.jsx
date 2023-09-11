import { useState } from "react";
import { Form } from "../Search/Form";

import cartIcon from "../../assets/images/icons/cart.svg";
import "./Header.css";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState([]);

  const handleInputChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    // Realizar la lógica para obtener los productos basados en la query implicar una llamada a una API

    // Por ahora, uso una lista de productos dummy (ficticia)
    const dummyProducts = [
      { id: 1, name: "Fortnite", imageUrl: "./user/seba.jpg" },
      { id: 2, name: "Cyberpunk", imageUrl: "./user/seba.jpg" },
      { id: 3, name: "NBA 2K23", imageUrl: "./user/seba.jpg" },
    ];

    // Filtrar los productos basados en la query
    const filteredProducts = dummyProducts.filter((product) =>
      product.name.toLowerCase().includes(query)
    );

    setProducts(filteredProducts);
  };

  return (
    <header className="header">
      <div className="header__wrapper">
        <a href="/home" className="header__link">
          <img
            src="./images/Logo.svg"
            alt="Logotipo Moon"
            className="header__logo"
          />
        </a>
        <Form
          handleInputChange={handleInputChange}
          searchQuery={searchQuery}
          products={products}
        />

        <div className="header__user">
          <a href="/cart" className="header__link">
            <img
              src={cartIcon}
              alt="Icono del carrito"
              className="header__icon icon--cart"
            />
          </a>
          <a href="/profile" className="header__link header__profile">
            <img
              src="./user/seba.jpg"
              alt="Imagen del usuario"
              className="header__profile-image"
            />
            <div className="header__profile-detail">
              <span className="header__profile-name">@sebastianszz</span>
              <span className="header__profile-email">sebastian@gmail.com</span>
            </div>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
