export const CarouselCard = ({ element, currentItemIndex, selectItem }) => {
  const sliceTitle = (title) => {
    return title.length > 20 ? `${title.slice(0, 30)}...` : title;
  };

  const { id, image, title } = element;

  return (
    <div
      className={`publicity__carousel--card ${
        id === currentItemIndex ? "publicity__selected" : ""
      }`}
      onClick={() => selectItem(id)}
    >
      <img
        src={image}
        alt="gif publicitario diablo immortal"
        className="publicity__carousel--img"
      />
      <h3 className="publicity__carousel--title">{sliceTitle(title)}</h3>
    </div>
  );
};
