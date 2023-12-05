// Importa las funciones de utilidad necesarias aquí
export function calcPrice(price, offer) {
  const totalOffer = (price * offer) / 100;
  return price - totalOffer;
}

export function filterAndSortProducts(products, filterValues) {
  return products
    .filter((element) => {
      const total = element.discounted_price;

      const priceFilter =
        (!filterValues.minPrice || total >= filterValues.minPrice) &&
        (!filterValues.maxPrice || total <= filterValues.maxPrice);

      const nameFilter =
        !filterValues.nameGame ||
        element.title
          .toLowerCase()
          .includes(filterValues.nameGame.toLowerCase());

      const genreFilter =
        !filterValues.genres ||
        element.genres.some((g) =>
          g.toLowerCase().includes(filterValues.genres.toLowerCase())
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
      const totalPriceA = a.discounted_price;
      const totalPriceB = b.discounted_price;

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

export const sliceTitle = (title) => {
  return title.length > 20 ? `${title.slice(0, 30)}...` : title;
};

export function validateValues(value1, value2, value3) {
  if (
    (value1 !== "" || value2 !== "" || value3 !== "") &&
    // Verifica si hay al menos dos valuees diferentes
    (value1 !== value2 || value1 === "") &&
    (value1 !== value3 || value1 === "") &&
    (value2 !== value3 || value2 === "")
  ) {
    return true;
  } else {
    return false;
  }
}

export function validateFields(regexPatterns, formData, validateField) {
  const fieldsToValidate = [
    "title",
    "price",
    "offer",
    "stock",
    "release_date",
    "genres",
    "developer",
    "publisher",
    "short_description",
  ];

  // Validar todos los campos
  fieldsToValidate.forEach((field) => {
    const expression = regexPatterns[field];
    const inputValue = { value: formData[field] };

    validateField(expression, inputValue, field);
  });
}
