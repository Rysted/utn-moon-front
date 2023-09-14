import { Link } from "react-router-dom";
import "./Product.css";

export const Product = ({ genreData, titleGenre }) => {
  return (
    <div className="products__related">
      <h3 className="products__title-genre">{titleGenre}</h3>
      {genreData.map(({ id, img, title, price, offer }) => (
        <article className="product" key={id}>
          <Link to={`/shop/${id}`} className="product__link">
            <img className="product__image" src={`${img}`} alt={title} />
            <div className="product__details">
              <span className="product__title">
                {title.length > 30 ? `${title.slice(0, 30)}...` : title}
              </span>
              {/* {offer > 0 ? (
                <div>
                  <span className="product__price">${price}</span>
                  <span className="product__offer">%{offer}</span>
                </div>
              ) : (
                <span className="product__price">${price}</span>
              )} */}
              <div>
                <span className="product__price">${price}</span>
                {offer > 0 && <span className="product__offer">%{offer}</span>}
              </div>
            </div>
          </Link>
        </article>
      ))}
      <div className="product__see-more">
        <Link to="/genre" className="product__see-more-link">
          ver más
        </Link>
      </div>
    </div>
  );
};
