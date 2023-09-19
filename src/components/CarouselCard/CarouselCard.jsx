export const CarouselCard = ({ element, currentItemIndex, selectItem }) => {
  const sliceTitle = (title) => {
    return title.length > 20 ? `${title.slice(0, 30)}...` : title;
  };

  const { id, image, title } = element;

  return (
    <div
      className={`carousel__card ${
        id === currentItemIndex ? "carousel__selected" : ""
      }`}
      onClick={() => selectItem(id)}
    >
      <img
        src={image}
        alt="gif publicitario diablo immortal"
        className="carousel__image"
      />
      <h3 className="carousel__title">{sliceTitle(title)}</h3>
    </div>
  );
};
