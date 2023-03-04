import { cardLayout } from "../functions/cardLayout.js";
import { cardRender } from "../functions/cardRender.js";
import { cardRm } from "../functions/cardRm.js";

export function fastScript() {
  const data = window.getTickets;

  const fastArraySort = data.tickets.sort((a, b) => {
    return a.segments[0].duration - b.segments[0].duration;
  });

  async function cardLayoutRm() {
    await cardRm()
    return;
  }
  async function cardLayoutFn() {
    await cardLayout();
    return;
  }
  async function fastArraySort1() {
    const res = await fastArraySort.slice(0, 5).forEach((element) => {
      cardRender(element);
      document.querySelector(".header-logo").classList.remove("js-loading");
      return;
    });
  }

  async function cardLayouQueue() {
    const a = await cardLayoutRm();
    const b = await cardLayoutFn();
    const c = await fastArraySort1();
  }
  cardLayouQueue();
}
