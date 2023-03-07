export const cardRender = function (element, index) {
  const cards = document.querySelector("#cards__place");
  const template = document.querySelector("#cards__template");

  const cardId = template.content.querySelector("#cards__more-info");
  cardId.className = `cards__more-info`;
  cardId.classList.add(`index-is-${index + 1}`);

  const cardPrice = template.content.querySelector(".cards__price");
  const cardLogo = template.content.querySelector(".cards__logo");
  // card data there
  const cardTAero = template.content.querySelector(".cards__there--aeroports");
  const cardTTStart = template.content.querySelector(
    ".cards__there--time-start"
  );
  const cardTTonRoad = template.content.querySelector(
    ".cards__there--time-on-road"
  );
  const cardTCrossT = template.content.querySelector(
    ".cards__there--cross-time"
  );
  const cardTCrossAero = template.content.querySelector(
    ".cards__there--cross-aeroports"
  );
  // card data back
  const cardBAero = template.content.querySelector(".cards__back--aeroports");
  const cardBTStart = template.content.querySelector(
    ".cards__back--time-start"
  );
  const cardBTonRoad = template.content.querySelector(
    ".cards__back--time-on-road"
  );
  const cardBCrossT = template.content.querySelector(
    ".cards__back--cross-time"
  );
  const cardBCrossAero = template.content.querySelector(
    ".cards__back--cross-aeroports"
  );

  // pushing content to card
  cardPrice.textContent = `${element.price} ₽`;
  cardLogo.textContent = element.carrier;
  // there
  cardTAero.textContent = `${element.segments[0].origin} - ${element.segments[0].destination}`;

  const timeThereStars = element.segments[0].date;
  const timeThereFinish =
    Math.floor(Date.now(element.segments[0].date) / 1000) +
    element.segments[0].duration * 60;
  const timeToView = `${new Date(timeThereStars)
    .getUTCHours()
    .toString()
    .padStart(2, 0)}:${new Date(timeThereStars)
    .getUTCMinutes()
    .toString()
    .padStart(2, 0)}`;
  const timeToFinView = `${new Date(timeThereFinish)
    .getUTCHours()
    .toString()
    .padStart(2, 0)}:${new Date(timeThereFinish)
    .getUTCMinutes()
    .toString()
    .padStart(2, 0)}`;
  cardTTStart.textContent = `${timeToView} - ${timeToFinView}`;

  cardTCrossT.textContent = `Пересадок: ${element.segments[0].stops.length}`;
  if (element.segments[0].stops.length == 0) {
    cardTCrossAero.textContent = ``;
  }
  if (element.segments[0].stops.length == 1) {
    cardTCrossAero.textContent = `${element.segments[0].stops[0]}`;
  }
  if (element.segments[0].stops.length == 2) {
    cardTCrossAero.textContent = `${element.segments[0].stops[0]}, ${element.segments[0].stops[1]}`;
  }
  if (element.segments[0].stops.length == 3) {
    cardTCrossAero.textContent = `${element.segments[0].stops[0]}, ${element.segments[0].stops[1]}, ${element.segments[0].stops[2]}`;
  }
  cardTCrossT.textContent = `Пересадок: ${element.segments[0].stops.length}`;

  cardTTonRoad.textContent = `${Math.trunc(
    element.segments[0].duration / 60
  )}ч ${element.segments[0].duration % 60}м`;

  // back
  cardBAero.textContent = `${element.segments[1].origin} - ${element.segments[1].destination}`;

  const timeBackStars = element.segments[1].date;
  const timeBackFinish =
    Math.floor(Date.now(element.segments[1].date) / 1000) +
    element.segments[0].duration * 60;
  const timeBackView = `${new Date(timeBackStars)
    .getHours()
    .toString()
    .padStart(2, 0)}:${new Date(timeBackStars)
    .getMinutes()
    .toString()
    .padStart(2, 0)}`;
  const timeBackFinView = `${new Date(timeBackFinish)
    .getUTCHours()
    .toString()
    .padStart(2, 0)}:${new Date(timeBackFinish)
    .getUTCMinutes()
    .toString()
    .padStart(2, 0)}`;
  cardBTStart.textContent = `${timeBackView} - ${timeBackFinView}`;

  cardBCrossT.textContent = `Пересадок: ${element.segments[1].stops.length}`;
  if (element.segments[1].stops.length == 1) {
    cardBCrossAero.textContent = `${element.segments[1].stops[0]}`;
  }
  if (element.segments[1].stops.length == 2) {
    cardBCrossAero.textContent = `${element.segments[1].stops[0]}, ${element.segments[1].stops[1]}`;
  }
  if (element.segments[1].stops.length == 3) {
    cardBCrossAero.textContent = `${element.segments[1].stops[0]}, ${element.segments[1].stops[1]}, ${element.segments[1].stops[2]}`;
  }
  cardBCrossT.textContent = `Пересадок: ${element.segments[1].stops.length}`;

  cardBTonRoad.textContent = `${Math.trunc(
    element.segments[1].duration / 60
  )}ч ${element.segments[1].duration % 60}м`;

  const card = template.content.cloneNode(true);
  cards.append(card);

  window.newCard = card;
};
