import { cardRender } from "../functions/cardRender.js";

export function showMoreScript() {
  function winCurrent() {
    const currentTickets = window.currentTickets;
    const a = currentTickets.slice(5);
    const b = a.map(function callback(element) {
      return [element[0], element[1]];
    });
    window.currentTickets = b;
  }

  async function showMoreQueue() {
    const showMoreArray = await window.currentTickets
      .slice(5, 9)
      .map(function callback(element) {
        return element;
      });
    await showMoreArray.forEach((element) => {
      cardRender(element[1], element[0]);
    });
    await winCurrent();
  }
  showMoreQueue();
}
