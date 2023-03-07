export function cardRm() {
  if (!document.querySelector("#cards__place")) {
    return
  } else {
    document.querySelector("#cards__place").remove();
    return
  }
}
