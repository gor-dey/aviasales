import { cardRm } from "../functions/cardRm.js";
import { uncheck } from "./checkUncheck.js";
const header = document.querySelector(".header-logo");

export async function optimalScript() {
  async function cardLayoutRm() {
    await cardRm;
    return;
  }
  async function renderStub() {
    uncheck();
    header.classList.add("js-loading");
    return;
  }
  async function renderResult() {
    setTimeout(() => {
      document.querySelector("#cards__layout").innerHTML;
      header.classList.remove("js-loading");
      document.querySelector("#cards__layout").innerHTML = `
      <h1
      style="
        color:#bbb;
        font-size: 2rem;
        font-weight: 700;
      ">
      Мне было просто лень придумывать "оптимальную" формулу, поэтому Вы только что бесцельно потратили пять секунд жизни
      <h1>
      <br>
      <p 
        style="
          color:#bbb;
          font-size: 1rem;
          font-weight: 500;">
      Извините =)
      <p>
      `;
    }, 5000);
    return;
  }
  async function notOptimalHahaha() {
    const a = await cardLayoutRm();
    const b = await renderStub();
    const c = await renderResult();
  }
  notOptimalHahaha();
}
