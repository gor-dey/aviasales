export function cardLayout() {
  //innerHTML норм. НО я хочу чтобы ты держал у себя в голове что он может быть небезопасным если мы принимаем user input в нём
document.querySelector("#cards__layout").innerHTML = `
<div id="cards__place">
<template id="cards__template">
  <div class="cards__top-space"></div>
  <div class="cards__card">
    <div class="cards__price">13 400 Р</div>
    <div class="cards__logo">
      <img src="x" alt="logo-s7" />
    </div>
    <div class="cards__there--aeroports">MOW - HTK</div>
    <div class="cards__there--time-start">10:45 - 08:00</div>
    <div class="cards__there--status">В ПУТИ</div>
    <div class="cards__there--time-on-road">21ч 15м</div>
    <div class="cards__there--cross-time">2 пересадки</div>
    <div class="cards__there--cross-aeroports">HG, JNB</div>
    <div class="cards__back--aeroports">MOW - HTK</div>
    <div class="cards__back--time-start">10:45 - 08:00</div>
    <div class="cards__back--status">В ПУТИ</div>
    <div class="cards__back--time-on-road">21ч 15м</div>
    <div class="cards__back--cross-time">2 пересадки</div>
    <div class="cards__back--cross-aeroports">HG, JNB</div>
    <button id="cards__more-info">Подробнее...</button>
  </div>
</template>
</div>
`;
}
