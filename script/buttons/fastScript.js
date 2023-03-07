import { cardLayout } from "../functions/cardLayout.js";
import { cardRender } from "../functions/cardRender.js";
import { cardRm } from "../functions/cardRm.js";
import { uncheck } from "./checkUncheck.js";

export function fastScript() {
  uncheck();
  const data = window.getTickets;

  const fastArraySort = data.tickets.sort((a, b) => {
    return a.segments[0].duration - b.segments[0].duration;
  });

  const currentTickets = fastArraySort.map(function callback(element, index) {
    return [index + 1, element];
  });
  window.currentTickets = currentTickets;

  const cardLayouQueue = async function cardLayouQueue() {
    await cardRm();
    await cardLayout();
    await fastArraySort.slice(0, 5).forEach((element, index) => {
      cardRender(element, index);
      document.querySelector(".header-logo").classList.remove("js-loading");
    });
  };
  cardLayouQueue();
}
