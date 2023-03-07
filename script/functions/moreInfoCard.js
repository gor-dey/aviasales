export const moreInfoCard = function () {
  document.querySelector(".js-more-inf-parent").innerHTML;
  document.querySelector(".js-more-inf-parent").innerHTML = `
      </div class="cards__more-info-card">
        <h1 class="cards__placeholder-1">Доп информация</h1>
        <p class="cards__placeholder-2">Здесь какая-то дополнительная информация, которую предоставил авиаперевозчик. Типа лорем испум доллар, мягкие французские булки и так далее. Короче, много текста.</p>
        <div class="placeholder-3">Еще немного информации</div>
        <button id="cards__more-info">Назад</button>
      </div>
  `;
};
