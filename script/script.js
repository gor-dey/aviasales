import { mainScript } from "./mainScript.js";
import { fastScript } from "./buttons/fastScript.js";
import { chepScript } from "./buttons/chepScript.js";
import { optimalScript } from "./buttons/optimalScript.js";
import { moreInfo } from "./buttons/moreInfo.js";
import { cardLayout } from "./functions/cardLayout.js";
cardLayout();

const chepBtn = document.querySelector("#cards__chep");
const fastBtn = document.querySelector("#cards__fast");
const optimalBtn = document.querySelector("#cards__optimal");

const template = document.querySelector("#cards__layout");

document.addEventListener("DOMContentLoaded", mainScript);

chepBtn.addEventListener("click", chepScript);
fastBtn.addEventListener("click", fastScript);
optimalBtn.addEventListener("click", optimalScript);

template.addEventListener("click", moreInfo);
