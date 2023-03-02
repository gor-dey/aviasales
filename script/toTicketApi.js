export const toTicketApi = async function toTicketApi(searchId) {
  const getTickets = await fetch(
    `https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`
  )
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      return console.log("Error on Tickets-Search API >>>>>", err);
    });

  window.getTickets = getTickets;
  return getTickets;
}
