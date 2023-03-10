import { useEffect, useState } from 'react';
import protobuf from 'protobufjs';
const { Buffer } = require('buffer/');

const emojis = {
  '': '',
  'up': '🚀',
  'down': '💩',
}

function formatPrice(price) {
  return `$${price.toFixed(2)}`;
}

const Dashboard = () => {
  const [stonks, setStonks] = useState([]);
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const ws = new WebSocket('wss://streamer.finance.yahoo.com');
    protobuf.load('./YPricingData.proto', (error, root) => {
      if (error) {
        return console.log(error);
      }
      const Yaticker = root.lookupType('yaticker');

      ws.onopen = function open() {
        console.log('connected');
        ws.send(
          JSON.stringify({
            subscribe: (params.get('symbols') || 'GME')
              .split(',')
              .map((symbol) => symbol.toUpperCase()),
          })
        );
      };

      ws.onclose = function close() {
        console.log('disconnected');
      };

      ws.onmessage = function incoming(message) {
        const next = Yaticker.decode(new Buffer(message.data, 'base64'));
        setStonks((current) => {
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
    <main>
      <h4>Dashboard</h4>
      <section className="watchlist">
        <div className="stock-item">
          <svg width="800px" height="800px" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.52 12.46C16.508 11.8438 16.6682 11.2365 16.9827 10.7065C17.2972 10.1765 17.7534 9.74476 18.3 9.46C17.9558 8.98143 17.5063 8.5883 16.9862 8.31089C16.466 8.03349 15.8892 7.87923 15.3 7.86C14.03 7.76 12.65 8.6 12.14 8.6C11.63 8.6 10.37 7.9 9.40999 7.9C7.40999 7.9 5.29999 9.49 5.29999 12.66C5.30963 13.6481 5.48194 14.6279 5.80999 15.56C6.24999 16.84 7.89999 20.05 9.61999 20C10.52 20 11.16 19.36 12.33 19.36C13.5 19.36 14.05 20 15.06 20C16.79 20 18.29 17.05 18.72 15.74C18.0689 15.4737 17.5119 15.0195 17.1201 14.4353C16.7282 13.8511 16.5193 13.1634 16.52 12.46ZM14.52 6.59C14.8307 6.23965 15.065 5.82839 15.2079 5.38245C15.3508 4.93651 15.3992 4.46569 15.35 4C14.4163 4.10239 13.5539 4.54785 12.93 5.25C12.6074 5.58991 12.3583 5.99266 12.1983 6.43312C12.0383 6.87358 11.9708 7.34229 12 7.81C12.4842 7.82361 12.9646 7.71974 13.3999 7.50728C13.8353 7.29482 14.2127 6.98009 14.5 6.59H14.52Z" fill="currentColor" />
          </svg>
          <div className="stock-item-text">
            <h2>APPL</h2>
            <p>$152.66</p>
          </div>
        </div>
        <div className="stock-item">
          <svg fill="currentColor" id="Layer_1" viewBox="0 0 320 320" width="800px" height="800px">
            <path d="M160,318l44.4-249.7c42.3,0,55.7,4.7,57.6,23.6c0,0,28.4-10.6,42.7-32.1c-55.9-25.9-112-27.1-112-27.1l-32.8,39.9h0.1l-32.8-39.9c0,0-56.1,1.2-112,27.1c14.3,21.5,42.7,32.1,42.7,32.1c2-18.9,15.3-23.6,57.3-23.6L160,318z"/>
            <path d="M160,21.2c45.2-0.4,96.8,7,149.8,30.1c7.1-12.7,8.9-18.4,8.9-18.4C268.2,12.8,214.4,2.3,160,2C105.6,2.3,51.8,12.8,1.3,32.9c2.6,6.3,5.5,12.4,8.9,18.4C63.1,28.2,114.8,20.9,160,21.2L160,21.2"/>
          </svg>
          <div className="stock-item-text">
            <h2>TSLA</h2>
            <p>$199.75</p>
          </div>
        </div>
        <div className="stock-item">
        <svg fill="currentColor" width="800px" height="800px" viewBox="0 0 32 32" ><path d="M11.919 24.94c-2.548 0-4.921-.747-6.919-2.032a9.049 9.049 0 0 0 6.681-1.867 4.512 4.512 0 0 1-4.215-3.137c.276.054.559.082.848.082.412 0 .812-.056 1.193-.156a4.519 4.519 0 0 1-3.622-4.425v-.059a4.478 4.478 0 0 0 2.042.564 4.507 4.507 0 0 1-2.008-3.758c0-.824.225-1.602.612-2.268a12.811 12.811 0 0 0 9.303 4.715 4.517 4.517 0 0 1 7.692-4.115 9.107 9.107 0 0 0 2.866-1.094 4.542 4.542 0 0 1-1.983 2.498 9.08 9.08 0 0 0 2.592-.71 9.283 9.283 0 0 1-2.252 2.337c.008.193.014.388.014.583-.001 5.962-4.542 12.843-12.844 12.842"/></svg>
          <div className="stock-item-text">
            <h2>TWTR</h2>
            <p>$249.22</p>
          </div>
        </div>
      </section>


      {stonks.map((stonk) => (
        <div className="stonk" key={stonk.id}>
          <h2 className={stonk.direction}>
            {stonk.id} {formatPrice(stonk.price)} {emojis[stonk.direction]}
          </h2>
        </div>
      ))}
    </main>
  );
};
export default Dashboard;