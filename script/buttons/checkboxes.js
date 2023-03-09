import { cardLayout } from "../functions/cardLayout.js";
import { cardRender } from "../functions/cardRender.js";
import { cardRm } from "../functions/cardRm.js";

let checkboxArray;
let checkboxArray0123;

function a() {
  const checkboxAll = document.querySelector(`#transfers__all`);
  const checkbox = document.querySelectorAll(`input[type="checkbox"]:checked`);
  checkboxArray = [...checkbox];

  if (checkboxArray.length == 0) {
    document.removeEventListener("click", checkboxes);
  }
  if (checkboxArray[0] == checkboxAll) {
    checkboxArray = checkboxArray.slice(0, 1);
  }
  checkboxArray = checkboxArray.map((element) => element.id);
  // console.log(checkboxArray);
  // console.log(window.currentTickets)
}
function b() {
  if (checkboxArray[0] == "transfers__all") {
    window.currentTickets.slice(0, 5).forEach((element, index) => {
      cardRender(element[1], element[0]);
    });
  } else {
    //циклом можно в четыре раза сократить кол-во строк
    checkboxArray0123 = [];
    checkboxArray.forEach((element) => {
      if (element == "transfers__no") {
        checkboxArray0123.push(
          ...window.currentTickets.filter(
            (item) => item[1].segments[0].stops.length == 0
          )
        );
      }
      if (element == "transfers__1") {
        checkboxArray0123.push(
          ...window.currentTickets.filter(
            (item) => item[1].segments[0].stops.length == 1
          )
        );
      }
      if (element == "transfers__2") {
        checkboxArray0123.push(
          ...window.currentTickets.filter(
            (item) => item[1].segments[0].stops.length == 2
          )
        );
      }
      if (element == "transfers__3") {
        checkboxArray0123.push(
          ...window.currentTickets.filter(
            (item) => item[1].segments[0].stops.length == 3
          )
        );
      }
    });
  }
}
function c() {
  checkboxArray0123 = checkboxArray0123.map(function callback(element, index) {
    return [index + 1, element];
  });
}
function d() {
  checkboxArray0123.slice(0, 5).forEach((element) => {
    cardRender(element[1][1], element[0][1]);
  });
}

function checkboxes() {
  //хуяк-хуяк-хуяк-хуяк-хуяк-хуяк
  //нам нужно столько разных функций учитывая что они все выполняются последовательно?
  a();
  cardRm();
  cardLayout();
  b();
  c();
  d();
}
export { checkboxes };
