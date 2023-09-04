const dateFilters = {
  genre: "",
  priceMin: "",
  priceMax: "",
};

const recordsPerPage = 6;

let totalPages;
let iterator;
let currentPage = 1;

const customSelects = document.querySelectorAll(".shop__custom");
const baseUrl = "https://apimocha.com/api-rpasda/posts";
// const baseUrl = "https://apimocha.com/games-apis/posts";
// const baseUrl = "https://apimocha.com/api-pruebas/posts";
// const baseUrl = "https://apimocha.com/api-prueba/posts";

const calcPrice = (price, offer) => {
  const totalOffer = (price * offer) / 100;
  return price - totalOffer;
};

const removeElements = parentElement => {
  while (parentElement.firstChild) {
    parentElement.removeChild(parentElement.firstChild);
  }
};

const printPaginator = () => {
  iterator = createPaginator(totalPages);

  const li2 = document.createElement("li");
  const button2 = document.createElement("a");
  button2.classList.add("shop__prev");
  button2.href = "#shopItems";
  button2.textContent = "<";
  button2.setAttribute("aria-label", `anterior enlace`);

  button2.onclick = () => {
    currentPage--; // Reduce la página actual
    callApi(baseUrl); // Llama a la función con la página actualizada
  };

  // Verificar si hay una página anterior
  if (currentPage === 1) {
    button2.classList.add("shop__prev--disabled");
  }

  li2.appendChild(button2);
  pagination.appendChild(li2);

  while (true) {
    const { value, done } = iterator.next();
    if (done) {
      const li3 = document.createElement("li");

      const button3 = document.createElement("a");
      button3.href = "#shopItems";
      button3.classList.add("shop__next");
      button3.textContent = ">";
      button3.setAttribute("aria-label", `siguiente enlace`);
      button3.onclick = () => {
        currentPage++; // Aumenta la página actual
        callApi(baseUrl); // Llama a la función con la página actualizada
      };

      // Verificar si hay una página siguiente
      if (currentPage === totalPages) {
        button3.classList.add("shop__next--disabled");
      }

      li3.appendChild(button3);
      pagination.appendChild(li3);

      return;
    }

    const li = document.createElement("li");
    const button = document.createElement("a");

    button.href = "#shopItems";
    button.dataset.page = value;
    button.textContent = value;
    button.setAttribute("aria-label", `enlace de pagina ${value}`);

    button.classList.add("shop__link");
    button.onclick = () => {
      currentPage = value;
      callApi(baseUrl);
    };

    li.appendChild(button);
    pagination.appendChild(li);
  }
};

function* createPaginator(total) {
  for (let i = 1; i <= total; i++) {
    yield i;
  }
}

const calcPages = total => {
  return parseInt(Math.ceil(total / recordsPerPage));
};

const callApi = async url => {
  try {
    const response = await fetch(url);
    const result = await response.json();

    const filterResult = selection(result);

    if (filterResult.length) {
      totalPages = calcPages(filterResult.length);
      const startIndex = (currentPage - 1) * recordsPerPage;
      const endIndex = startIndex + recordsPerPage;
      const gamesToDisplay = filterResult.slice(startIndex, endIndex);

      const shopItems = document.getElementById("shopItems");
      const pagination = document.getElementById("pagination");
      removeElements(shopItems);
      removeElements(pagination);

      showGames(gamesToDisplay);
      printPaginator();
    } else {
      const pagination = document.getElementById("pagination");
      removeElements(pagination);

      noResult();
    }
  } catch (error) {
    console.error("Error al llamar a la API:", error);
  }
};

const selection = result => {
  const filteredGames = result
    .filter(filterGenre)
    .filter(filterPriceMin)
    .filter(filterPriceMax);

  return filteredGames;
};

const noResult = () => {
  const shopItems = document.getElementById("shopItems");
  removeElements(shopItems);

  const div = document.createElement("div");
  div.classList.add("shop__item--empty");
  div.innerHTML = `<p>No hay resultados obtenidos</p>`;
  shopItems.appendChild(div);
};

const filterGenre = games => {
  const { genre } = dateFilters;
  return !genre || games.genre.includes(genre);
};

const filterPriceMin = games => {
  const { priceMin } = dateFilters;
  return !priceMin || calcPrice(games.price, games.offer) >= priceMin;
};

const filterPriceMax = games => {
  const { priceMax } = dateFilters;
  return !priceMax || calcPrice(games.price, games.offer) <= priceMax;
};

const showGames = result => {
  const shopItems = document.getElementById("shopItems");
  const pagination = document.getElementById("pagination");
  removeElements(shopItems);
  removeElements(pagination);

  result.forEach(item => {
    const { img, title, price, offer, genre, id } = item;
    const priceTotal = calcPrice(price, offer);
    const [genre1, genre2, genre3] = genre;

    const a = document.createElement("a");
    a.classList.add("shop__item");
    a.href = "#";
    a.id = id;

    a.innerHTML = `
      <img class="shop__img" src="${img}" loading="lazy" alt="imagen de ${title}">
      <div class="shop__text">
        <h4>${title}</h4>
        <div>
          <p class="shop__total">$${priceTotal} <span class="shop__offer">${offer}% off</span></p>
          <p class="shop__price">$${price}</p>
        </div>
        <div class="shop__categories">
          <p>${genre1}</p>
          <p>${genre2}</p>
          <p>${genre3}</p>
        </div>
      </div>
    `;

    shopItems.appendChild(a);
  });
};

const handleCustomSelect = customSelect => {
  const options = customSelect.querySelector(".options");
  const selectedOption = customSelect.querySelector(".selected-option");
  const optionItems = customSelect.querySelectorAll(".options li");

  const closeOtherCustomSelects = () => {
    customSelects.forEach(otherCustomSelect => {
      if (otherCustomSelect !== customSelect) {
        otherCustomSelect.querySelector(".options").classList.remove("active");
      }
    });
  };

  const removeOptionSelectedClass = () => {
    optionItems.forEach(optionItem => {
      optionItem.classList.remove("option-selected");
    });
  };

  customSelect.addEventListener("click", event => {
    event.stopPropagation();
    closeOtherCustomSelects();
    options.classList.toggle("active");
  });

  document.addEventListener("click", event => {
    if (!customSelect.contains(event.target)) {
      options.classList.remove("active");
    }
  });

  optionItems.forEach(optionItem => {
    optionItem.addEventListener("click", e => {
      const selectedValue = e.target.getAttribute("data-value");
      selectedOption.textContent = e.target.textContent;

      removeOptionSelectedClass();
      e.target.classList.add("option-selected");
      selectedOption.classList.remove("active");

      const optionsId = options.getAttribute("id");
      dateFilters[optionsId] = selectedValue;

      // Llamar a la API y aplicar filtros
      currentPage = 1;
      callApi(baseUrl);
    });
  });

  selectedOption.addEventListener("click", () => {
    selectedOption.classList.add("active");
  });
};

document.addEventListener("DOMContentLoaded", () => {
  customSelects.forEach(handleCustomSelect);
  callApi(baseUrl);
});
