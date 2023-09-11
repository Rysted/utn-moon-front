import "./Paginator.css";

const Paginator = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li key={i}>
          <button
            className={
              i === currentPage
                ? "pagination__button pagination__button--select"
                : "pagination__button"
            }
            aria-label={`enlace de pagina ${i}`}
            onClick={() => onPageChange(i)}
          >
            {i}
          </button>
        </li>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="pagination">
      <ul className="pagination__list">
        <li>
          <button
            className={
              currentPage === 1
                ? "pagination__prev pagination__prev--disabled"
                : "pagination__prev"
            }
            onClick={handlePrevPage}
            aria-label="anterior pagina"
          >
            &laquo;
          </button>
        </li>
        {renderPageNumbers()}
        <li>
          <button
            className={
              currentPage === totalPages
                ? "pagination__next pagination__next--disabled"
                : "pagination__next"
            }
            onClick={handleNextPage}
            aria-label="siguiente pagina"
          >
            &raquo;
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Paginator;
