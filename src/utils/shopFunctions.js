export function selection(result) {
  const filteredGames = result
    .filter(filterGenre)
    .filter(filterPriceMin)
    .filter(filterPriceMax);

  return filteredGames;
}

export function removeElements(parentElement) {
  while (parentElement.firstChild) {
    parentElement.removeChild(parentElement.firstChild);
  }
}

export function calcPages(total, recordsPerPage) {
  return Math.ceil(total / recordsPerPage);
}

export function calcPrice(price, offer) {
  const totalOffer = (price * offer) / 100;
  return price - totalOffer;
}

const filterGenre = (games, dateFilters) => {
  const { genre } = dateFilters;
  return !genre || games.genre.includes(genre);
};

const filterPriceMin = (games, dateFilters) => {
  const { priceMin } = dateFilters;
  return !priceMin || calcPrice(games.price, games.offer) >= priceMin;
};

const filterPriceMax = (games, dateFilters) => {
  const { priceMax } = dateFilters;
  return !priceMax || calcPrice(games.price, games.offer) <= priceMax;
};
