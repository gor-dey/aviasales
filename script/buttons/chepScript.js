import { cardLayout } from "../functions/cardLayout.js";
import { cardRender } from "../functions/cardRender.js";
import { cardRm } from "../functions/cardRm.js";

export function chepScript() {
  const data = window.getTickets;

  async function cardLayoutRm() {
    await cardRm()
    return;
  }
  async function cardLayoutFn() {
    await cardLayout();
    return;
  }
  async function fastArraySort1() {
    const priceArraySort = data.tickets.sort((a, b) => a.price - b.price);
    priceArraySort.slice(0, 5).forEach((element, index) => {
      cardRender(element);
      document.querySelector(".header-logo").classList.remove("js-loading");
    });
  }

  async function cardLayouQueue() {
    const a = await cardLayoutRm();
    const b = await cardLayoutFn();
    const c = await fastArraySort1();
  }
  cardLayouQueue();
}
