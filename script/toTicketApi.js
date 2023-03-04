export const toTicketApi = async function toTicketApi(searchId) {
  const getTickets = await fetch(
    `https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`
  )
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      const headerParrent = document.querySelector("header");
      const header = document.querySelector(".header-logo");
      const pleasReload = document.createElement("span");
      header.classList.remove("js-loading");
      pleasReload.innerHTML =
        '<h1 style="margin-top:50px; font-weight: 700;color:red;">База не отвечает. Пожалуйста, обновите страницу</h1>';
      headerParrent.insertBefore(pleasReload, header);

      return console.log("Error >>>>> ", err);
    });

  window.getTickets = getTickets;
  return getTickets;
};
