import { toTicketApi } from "./toTicketApi.js";

const cards = document.querySelector("#cards__place");

const template = document.querySelector("#cards__template");
const cardPrice = template.content.querySelector(".cards__price");

// const qwe = document.querySelector(".123");
// const qwe = document.querySelector(".123");
// const qwe = document.querySelector(".123");

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
      const priceArray = a.tickets.map((element) => {
        return element.price + " " + JSON.stringify(element);
      });

      const priseArraySplit = priceArray.sort().map((element) => {
        return element.split(" ").slice(1);
      });

      const firstFive = priseArraySplit.slice(0, 5).forEach((element) => {
        cardPrice.textContent = JSON.parse(element[0]).price;
        const card = template.content.cloneNode(true);
        cards.append(card);

        return console.log(JSON.parse(element[0]).price);
      });
    });
}
