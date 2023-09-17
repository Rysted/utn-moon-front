// Importa las funciones de utilidad necesarias aquí
export function calcPrice(price, offer) {
  const totalOffer = (price * offer) / 100;
  return price - totalOffer;
}

export function filterAndSortProducts(products, filterValues) {
  return products
    .filter(element => {
      const total = calcPrice(element.price, element.offer);

      const priceFilter =
        (!filterValues.minPrice || total >= filterValues.minPrice) &&
        (!filterValues.maxPrice || total <= filterValues.maxPrice);

      const nameFilter =
        !filterValues.nameGame ||
        element.title
          .toLowerCase()
          .includes(filterValues.nameGame.toLowerCase());

      const genreFilter =
        !filterValues.genre ||
        element.genre.some(g =>
          g.toLowerCase().includes(filterValues.genre.toLowerCase())
        );

      const developerFilter =
        !filterValues.developer ||
        element.developer
          .toLowerCase()
          .includes(filterValues.developer.toLowerCase());

      const publisherFilter =
        !filterValues.publisher ||
        element.publisher
          .toLowerCase()
          .includes(filterValues.publisher.toLowerCase());

      // Combinar los filtros
      return (
        priceFilter &&
        nameFilter &&
        genreFilter &&
        developerFilter &&
        publisherFilter
      );
    })
    .sort((a, b) => {
      const totalPriceA = calcPrice(a.price, a.offer);
      const totalPriceB = calcPrice(b.price, b.offer);

      if (filterValues.order === "lowPrice") {
        // Ordenar los productos por el precio total de menor a mayor
        return totalPriceA - totalPriceB;
      } else if (filterValues.order === "highPrice") {
        // Ordenar los productos por el precio total de mayor a menor
        return totalPriceB - totalPriceA;
      }

      // Orden por defecto (relevant)
      return 0;
    });
}

export function calcPages(total, recordsPerPage) {
  return Math.ceil(total / recordsPerPage);
}
