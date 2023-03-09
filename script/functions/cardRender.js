export const cardRender = function (element, index) {
  //очень много похожих переменных и глаза периодически разбегаются
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

  // destination 0 если туда 1 если обратно

  const timeConverter = (destination) => {
    const timeThereStars = element.segments[destination].date;
    const timeThereFinish = Math.floor(Date.now(element.segments[destination].date) / 1000) + 
    element.segments[destination].duration * 60;
    const timeStringifying = (time) => `${new Date(time)
        .getUTCHours()
        .toString()
        .padStart(2, 0)}:${new Date(time)
        .getUTCMinutes()
        .toString()
        .padStart(2, 0)}`
    return `${timeStringifying(timeThereStars)} - ${timeStringifying(timeThereFinish)}`
  }

  cardTTStart.textContent = timeConverter(0)

  cardTCrossT.textContent = `Пересадок: ${element.segments[0].stops.length}`;
  cardTCrossAero.textContent = element.segments[0].stops.length ? element.segments[0].stops.join(", ") : ""

  cardTTonRoad.textContent = `${Math.trunc(
    element.segments[0].duration / 60
  )}ч ${element.segments[0].duration % 60}м`;

  // back
  cardBAero.textContent = `${element.segments[1].origin} - ${element.segments[1].destination}`;

  cardBTStart.textContent = timeConverter(1);

  cardBCrossT.textContent = `Пересадок: ${element.segments[1].stops.length}`;
  cardBCrossAero.textContent = element.segments[1].stops.length ? element.segments[1].stops.join(", ") : ""

  cardBTonRoad.textContent = `${Math.trunc(
    element.segments[1].duration / 60
  )}ч ${element.segments[1].duration % 60}м`;

  const card = template.content.cloneNode(true);
  cards.append(card);

  window.newCard = card;
};
