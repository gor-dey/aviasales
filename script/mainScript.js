import { cardRender } from "./functions/cardRender.js";
import { toTicketApi } from "./toTicketApi.js";

export async function mainScript() {
  const apiReq = await fetch("https://aviasales-test-api.kata.academy/search")
    .catch((err) => {
      console.log("Error on Search-IP >>>>>", err);
    })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const searchId = data.searchId;
      const res = toTicketApi(searchId);
      return res;
    })

    .then((a) => {
      const priceArraySort = a.tickets.sort((a, b) => a.price - b.price);

      priceArraySort.slice(0, 5).forEach((element, index) => {
        cardRender(element, index);
        document.querySelector(".header-logo").classList.remove("js-loading");
      });
    })
    .then((a) => {
      const currentTickets = getTickets.tickets.map(function callback(
        element,
        index
      ) {
        return [index + 1, element];
      });
      window.currentTickets = currentTickets;
    });
}
