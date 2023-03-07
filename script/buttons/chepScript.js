import { cardLayout } from "../functions/cardLayout.js";
import { cardRender } from "../functions/cardRender.js";
import { cardRm } from "../functions/cardRm.js";
import { uncheck } from "./checkUncheck.js";

export function chepScript() {
  uncheck();
  const data = window.getTickets;

  // const chipArraySort = data.tickets.sort((a, b) => a.argument - b.argument);
  const chipArraySort = data.tickets.sort((a, b) => a.price - b.price);

  const currentTickets = chipArraySort.map(function callback(element, index) {
    return [index + 1, element];
  });
  window.currentTickets = currentTickets;

  const cardLayouQueue = async function cardLayouQueue() {
    await cardRm();
    await cardLayout();
    await data.tickets.slice(0, 5).forEach((element, index) => {
      cardRender(element, index);
      document.querySelector(".header-logo").classList.remove("js-loading");
      return;
    });
  };
  cardLayouQueue();
}
