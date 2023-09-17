import { Link } from "react-router-dom";
import "./Product.css";

export const Product = ({ genreData, titleGenre }) => {
  const sliceTitle = (title) => {
    return title.length > 30 ? `${title.slice(0, 30)}...` : title;
  };
  const products = genreData.slice(0, 3);

  return (
    <div className="products__grid ">
      <h3 className="products__title-genre">{titleGenre}</h3>
      {products.map(({ id, img, title, price, offer }) => (
        <article className="product" key={id}>
          <Link to={`/detail/${id}`} className="product__link">
            <img className="product__image" src={`${img}`} alt={title} />
            <div className="product__details">
              <span className="product__title adjustSize">
                {sliceTitle(title)}
              </span>
              <div className="product__amount">
                <span
                  className={`product__price adjustSize ${
                    offer > 0 && "product__priceOnOffer"
                  }`}
                >
                  ${(price -= (price * offer) / 100)}
                </span>
                {offer > 0 && (
                  <span className="product__offer adjustSize">%{offer}</span>
                )}
              </div>
            </div>
          </Link>
        </article>
      ))}
      <div className="product__see-more">
        <Link to="/genre" className="product__see-more-link adjustSize">
          ver más
        </Link>
      </div>
    </div>
  );
};
