import { mainScript } from "./mainScript.js";
import { fastScript } from "./buttons/fastScript.js";
import { chepScript } from "./buttons/chepScript.js";
import { optimalScript } from "./buttons/optimalScript.js";
import { showMoreScript } from "./buttons/showMoreScript.js";
import { moreInfo } from "./buttons/moreInfo.js";
import { cardLayout } from "./functions/cardLayout.js";
import { checkboxes } from "./buttons/checkboxes.js";
import { checkUncheck } from "./buttons/checkUncheck.js";
cardLayout();

const chepBtn = document.querySelector("#cards__chep");
const fastBtn = document.querySelector("#cards__fast");
const optimalBtn = document.querySelector("#cards__optimal");
const showMoreBtn = document.querySelector(".cards__also-show");

const checkboxPlate = document.querySelector(`.transfers`);
const checkboxBtn = document.querySelector(`#transfers__button`);

const template = document.querySelector("#cards__layout");

document.addEventListener("DOMContentLoaded", mainScript);

chepBtn.addEventListener("click", chepScript);
fastBtn.addEventListener("click", fastScript);
optimalBtn.addEventListener("click", optimalScript);

template.addEventListener("click", moreInfo);

showMoreBtn.addEventListener("click", showMoreScript);

checkboxBtn.addEventListener("click", checkboxes);

checkboxPlate.addEventListener("click", checkUncheck);
