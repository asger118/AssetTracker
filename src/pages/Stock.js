import { db } from "../config/firebase"
import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore"
import "../styles/StockTable.css"

const Stock = () => {

  const [stockList, setStockList] = useState([]);
  const stockCollectionRef = collection(db, "Stock");

  useEffect(() => {
    const getStockList = async () => {

      try {
        const data = await getDocs(stockCollectionRef);
        const filteredData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id, }));
        setStockList(filteredData);
      } catch (err) { console.log(err) };
    };
    getStockList();
  }, [stockCollectionRef]);



  return (
    
<table className="content-table">
        <thead>
          <tr>
            <th>Company</th>
            <th>Ticker</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
        {stockList.map((stock) => (
          <tr key={stock.id}>
          <td>{stock.id}</td>
          <td>{stock.Ticker}</td>
          <td>{stock.Price}</td>
          </tr>
      ))}
        </tbody>
      </table>
  );
}
export default Stock;