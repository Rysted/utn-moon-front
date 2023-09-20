export const CarouselCard = ({ element, currentItemIndex, selectItem }) => {
  const sliceTitle = (title) => {
    return title.length > 20 ? `${title.slice(0, 30)}...` : title;
  };

  const { id, url, title, media, poster = false } = element;

  const commonCardProps = {
    className: `carousel__card ${
      id === currentItemIndex ? "carousel__selected" : ""
    }`,
    onClick: () => selectItem(id),
  };

  return (
    <>
      <div {...commonCardProps}>
        {media === "webm" || media === "mp4" ? (
          <video
            className="carousel__media"
            poster={poster ? poster : ""}
          ></video>
        ) : media === "png" ||
          media === "jpg" ||
          media === "jpeg" ||
          media === "avif" ||
          media === "webp" ? (
          <img
            src={url}
            alt={`imagen de publicidad ${title}`}
            className="carousel__media"
          />
        ) : (
          <p className="carousel__error">Media no válido corregir</p>
        )}

        <h3 className="carousel__title">{sliceTitle(title)}</h3>
      </div>
    </>
  );
};
