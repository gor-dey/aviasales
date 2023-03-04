export function moreInfo() {
  const moreInfoBtn = document.querySelectorAll(".cards__more-info");

  let targetButton;
  moreInfoBtn.forEach((element) => {
    if (element == event.target) {
      return (targetButton = element);
    }
  });

  if (event.target === targetButton) {
    event.target.parentNode.classList.toggle("js-more-inf-parent");
    targetButton.classList.toggle("js-more-inf-btn");
    document.querySelector("body").classList.toggle("js-more-inf-body");
  }
}
