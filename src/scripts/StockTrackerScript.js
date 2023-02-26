/* let ws = new WebSocket("wss://stream.binance.com:9443/ws/etheur@trade");
let sotckPriceElement = document.getElementById("APPLE-price");
let lastPrice = null;
ws.onmessage = (event) => {
  let sotckObject = JSON.parse(event.data);
  let price = parseFloat(sotckObject.p).toFixed(2);
  sotckPriceElement.innerText = price;
  sotckPriceElement.style.color =
    !lastPrice || lastPrice === price
      ? "black"
      : price > lastPrice
      ? "green"
      : "red";
  lastPrice = price;
};
 */
