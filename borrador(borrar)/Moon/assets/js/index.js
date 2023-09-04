const body = document.querySelector("body");
const baseUrl = "https://apimocha.com/api-rpasda/posts";
// const baseUrl = "https://apimocha.com/api-prueba/posts";
// const baseUrl = "https://apimocha.com/asadsads/posts";
// const baseUrl = "https://apimocha.com/games-api/posts";
// const baseUrl = "https://apimocha.com/sebas-api/posts";

const callApi = async url => {
  try {
    const response = await fetch(url);
    const result = await response.json();

    showCard(result);
  } catch (error) {
    console.error(error);
  }
};

const showCard = cards => {
  //   console.log(cards);

  for (let i = 0; i < cards.length; i++) {
    const {
      title,
      img,
      short_description,
      publisher,
      developer,
      release_date,
      offer,
      price,
      genre,
    } = cards[i];

    const [genre1, genre2, genre3] = genre;

    const total = calcPrice(price, offer);

    const main = document.createElement("div");
    main.classList.add("datails", "container");
    main.innerHTML += `
        <div class="datails__preview">
            <a class="datails__link" href="#" aria-label="enlace de volver">
            <img
                class="datails__img"
                src="./assets/images/icons/arrow-left.svg"
                alt="flecha hacia la izquierda"
            />
            <p>Tienda</p>
            </a>
            <img
            class="datails__img"
            src="./assets/images/icons/arrow-right.svg"
            alt="flecha hacia la derecha"
            />
            <p>${title}</p>
        </div>

        <div class="datails__content">
            <img
            src=${img}
            alt="imagen de ${title}"
            />
            <div class="datails__data">
                <div class="datails__datas">
                    <h2>${title}</h2>
                    <div class="stars">
                        <fieldset class="stars__items">
                            <input type="radio" name="stars" id="st5" />
                            <label aria-label="estrella 5" for="st5">
                                <span class="star__stroke">
                                    <span class="star__fill"></span>
                                </span>
                            </label>
                            <input type="radio" name="stars" id="st4" />
                            <label aria-label="estrella 4" for="st4">
                                <span class="star__stroke">
                                    <span class="star__fill"></span>
                                </span>
                            </label>
                            <input type="radio" name="stars" id="st3" />
                            <label aria-label="estrella 3" for="st3">
                                <span class="star__stroke">
                                    <span class="star__fill"></span>
                                </span>
                            </label>
                            <input type="radio" name="stars" id="st2" />
                            <label aria-label="estrella 2" for="st2">
                                <span class="star__stroke">
                                <span class="star__fill"></span>
                                </span>
                            </label>
                            <input type="radio" name="stars" id="st1" />
                            <label aria-label="estrella 1" for="st1">
                                <span class="star__stroke">
                                    <span class="star__fill"></span>
                                </span>
                            </label>
                        </fieldset>
                    </div>
                    <div class="datails__cost">
                        <p class="datails__price">$${total} <span>${offer}% OFF</span></p>
                        <p class="datails__offer">$${price}</p>
                    </div>

                    <div class="datails__info">
                        <p><span>Desarrollador:</span> ${developer}</p>
                        <p><span>Editor:</span> ${publisher}</p>
                        <p><span>Lanzado:</span> ${release_date}</p>
                    </div>
                </div>
            </div>

            <div class="datails__categories">
                <h3>Categoria</h3>

                <div class="datails__roles">
                    <p>${genre1}</p>
                    <p>${genre2}</p>
                    <p>${genre3}</p>
                </div>
            </div>

            <p class="datails__description">${short_description}</p>
        </div>
        <div class="datails__ctas">
            <a class="cta cta--primary" href="#" aria-label="enlace de comprar"
            >comprar ahora</a
            >
            <a class="cta cta--secondary" href="#" aria-label="enlace de agregar al carrito"
            >agregar al carrito</a
            >
        </div>
    `;

    body.appendChild(main);
  }
};

const calcPrice = (price, offer) => {
  const totalOffer = (price * offer) / 100;
  const total = price - totalOffer;

  return total;
};

callApi(baseUrl);
