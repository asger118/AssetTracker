import { useEffect, useState } from 'react';
import protobuf from 'protobufjs';
import { Tickers } from "./Stock";
import "../styles/Dashboard.css";
/* import Webscraper from "../scripts/Webscraper.js" */
const { Buffer } = require('buffer/');

const emojis = {
  '': '',
  'up': '🚀',
  'down': '💩',
}

function formatPrice(price) {
  return `$${price.toFixed(2)}`;
}

export default function Dashboard() {
  const [stockInfo, setStockInfo] = useState([]);

  useEffect(() => {
    const ws = new WebSocket('wss://streamer.finance.yahoo.com');
    protobuf.load('./YPricingData.proto', (error, root) => {
      if (error) {
        return console.log(error);
      }
      const Yaticker = root.lookupType('yaticker');

/*       const params = new URLSearchParams(window.location.search); */

      ws.onopen = function open() {
        ws.send(
          JSON.stringify({
            subscribe: (/* params.get('symbols') */ Tickers || 'MSFT')
              /* .split(',')
              .map((symbol) => symbol.toUpperCase()), */
          })
        );
      };
      ws.onclose = function close() {
      };
      ws.onmessage = function incoming(message) {
        const next = Yaticker.decode(new Buffer(message.data, 'base64'));
        setStockInfo((current) => {
          let stonk = current.find((stonk) => stonk.id === next.id);
          if (stonk) {
            return current.map((stonk) => {
              if (stonk.id === next.id) {
                return {
                  ...next,
                  direction:
                    stonk.price < next.price
                      ? 'up'
                      : stonk.price > next.price
                        ? 'down'
                        : stonk.direction,
                };
              }
              return stonk;
            });
          } else {
            return [
              ...current,
              {
                ...next,
                direction: '',
              },
            ];
          }
        });
      };
    });
  }, []);


  return (
    <div className='page'>
      <h4>Dashboard</h4>

      <><section className="watchlist">
        {stockInfo.map((stonk) => (
          <div className="stock-item" key={stonk.Ticker}>
            <svg fill="currentColor" width="800px" height="800px" viewBox="0 0 32 32"><path d="M11.919 24.94c-2.548 0-4.921-.747-6.919-2.032a9.049 9.049 0 0 0 6.681-1.867 4.512 4.512 0 0 1-4.215-3.137c.276.054.559.082.848.082.412 0 .812-.056 1.193-.156a4.519 4.519 0 0 1-3.622-4.425v-.059a4.478 4.478 0 0 0 2.042.564 4.507 4.507 0 0 1-2.008-3.758c0-.824.225-1.602.612-2.268a12.811 12.811 0 0 0 9.303 4.715 4.517 4.517 0 0 1 7.692-4.115 9.107 9.107 0 0 0 2.866-1.094 4.542 4.542 0 0 1-1.983 2.498 9.08 9.08 0 0 0 2.592-.71 9.283 9.283 0 0 1-2.252 2.337c.008.193.014.388.014.583-.001 5.962-4.542 12.843-12.844 12.842" /></svg>
            <div className="stock-item-text" >
              <h2>{stonk.id} {}</h2>
              <p className={stonk.direction}>{formatPrice(stonk.price)} {emojis[stonk.direction]}</p>
            </div>
          </div>))}
      </section></>

    </div>
  );
}