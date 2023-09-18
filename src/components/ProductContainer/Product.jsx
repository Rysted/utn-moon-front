import { Link } from "react-router-dom";
import "./Product.css";

export const Product = ({ products, titleGenre }) => {
  const sliceTitle = (title) => {
    return title.length > 30 ? `${title.slice(0, 30)}...` : title;
  };

  return (
    <div className="products__grid br-right">
      <h3 className="products__title-genre">Juegos de {titleGenre}</h3>
      {products.map(({ id, img, title, price, offer }) => (
        <article className="product" key={id}>
          <Link to={`/detail/${id}`} className="product__link">
            <img className="product__image" src={img} alt={title} />
            <div className="product__details">
              <span className="product__title adjustSize">
                {sliceTitle(title)}
              </span>
              <div className="product__amount">
                {offer > 0 ? (
                  <>
                    <span className="product__price">
                      $ {price - (price * offer) / 100}
                    </span>
                    <span className="product__offer">{offer}%</span>
                    <div>
                      <span className={`product__oldPrice`}>${price}</span>
                    </div>
                  </>
                ) : (
                  <span className="product__price">$ {price}</span>
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
