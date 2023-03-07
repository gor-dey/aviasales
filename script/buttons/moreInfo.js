const body = document.body;

export function moreInfo() {
  const moreInfoBtn = document.querySelectorAll(".cards__more-info");

  console.log(window.currentTickets);

  let targetButton;
  moreInfoBtn.forEach((element) => {
    if (element == event.target) {
      return (targetButton = element);
    }
  });
  const moreInfoData = targetButton.closest(".cards__card").childNodes;
  const div = document.createElement("div");
  div.className = "js-more-inf-parent";
  body.appendChild(div);

  const moreInfoLayout = `
    <p>Блок дополнительное информации:</p>

    Время в пути до точки назначения на самолете авиакомпании ${moreInfoData[3].outerText} составит ${moreInfoData[11].outerText}.
    <p>Во время полета Вам будут предложены напитки и горячая еда. Авиакомпания должна была по идее предоставить нам еще много рекламного текста, но она этого не сделала, поэтому выкручиваюсь, как могу. Да, писатель из меня так себе.</p>
    
    <p>Вы можете купить билет  на нашем сайте всего за <span>${moreInfoData[1].outerText}</span></p>
    <p>Спасибо, что пользуютесь услугами нашей авиакассы!</p>
    <button id="more-info-btn-js">Назад</button>
      `;
  div.innerHTML = moreInfoLayout;

  body.classList.add("js-more-inf-body");

  const div2 = document.createElement("div");
  body.appendChild(div2);
  div2.setAttribute("id", "js-blur");

  function moreInfoButtonClick() {
    div.classList.add("js-fade-out");
    div2.classList.add("js-fade-out");
    setTimeout(() => {
      body.classList.remove("js-more-inf-body");
      div2.remove("#js-blur");
      div.remove();
    }, 700);
  }

  const moreInfoButton = document.querySelector("#more-info-btn-js");
  moreInfoButton.addEventListener("click", moreInfoButtonClick);
  div2.addEventListener("click", moreInfoButtonClick);
}
