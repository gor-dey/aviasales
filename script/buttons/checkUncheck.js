const checkboxAll = document.querySelector(`#transfers__all`);
const checkboxNo = document.querySelector(`#transfers__no`);
const checkbox1 = document.querySelector(`#transfers__1`);
const checkbox2 = document.querySelector(`#transfers__2`);
const checkbox3 = document.querySelector(`#transfers__3`);
//делаем функцию checkUncheck(check/uncheck, target) и циклом решаем чекать-анчекать. Не страшно тут, но создаёшь кучу сущностей
function checkUncheck() {
  if (event.target == checkboxAll && checkboxAll.checked == true) {
    
    checkboxNo.checked = false;
    checkbox1.checked = false;
    checkbox2.checked = false;
    checkbox3.checked = false;
  }
  if (
    (event.target == checkboxNo ||
      event.target == checkbox1 ||
      event.target == checkbox2 ||
      event.target == checkbox3) &&
    event.target.checked == true
  ) {
    checkboxAll.checked = false;
  }
}

function uncheck() {
  if (
    checkboxAll.checked == true ||
    checkboxNo.checked == true ||
    checkbox1.checked == true ||
    checkbox2.checked == true ||
    checkbox3.checked == true
  ) {
    checkboxAll.checked = false;
    checkboxNo.checked = false;
    checkbox1.checked = false;
    checkbox2.checked = false;
    checkbox3.checked = false;

    const aside = document.querySelector("aside");
    const button = document.querySelector("#transfers__button");
    const filtresUnchecked = document.createElement("span");
    filtresUnchecked.innerHTML =
      '<h1 style="z-index=999; transform: translateY(65px); margin-top:-19px; margin-left:5px; font-weight: 500;color:#666;heigth:0; text-shadow: 0px 0px 2px #979797;">фильтры были удалены</h1>';
    aside.insertBefore(filtresUnchecked, button);
    setTimeout(() => {
      filtresUnchecked.remove()
    }, 1500);
  }
}

export { checkUncheck, uncheck };
