import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import Crypto from './components/Crypto';



function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    try {
      async function fetchData() {
        const response = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false");
        const fetchedData = await response.json();
        setData(fetchedData);
      };
      fetchData();
    }
    catch (e) {
      console.log(e);
    }

  }, []);
  // console.log(data);

  return (
    <div className="App">
      <table>
        <thead>
          <tr id='head'>
            <td>Icon</td>
            <td>Name</td>
            <td>Symbol</td>
            <td>Current Price</td>
            <td>Total Volume</td>
          </tr>
        </thead>
        <tbody>
       {
        data.map((item) => {
          return (
            
            <Crypto key = {item.id} item = {item}/>
            
          )
        })
       }
       </tbody>
       </table>
    </div>
  );
}

export default App;


/*[{"id":"bitcoin","symbol":"btc","name":"Bitcoin","image":"https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579","current_price":26871,"market_cap":520710742659,"market_cap_rank":1,"fully_diluted_valuation":564282777820,"total_volume":3507845678,"high_24h":27049,"low_24h":26773,"price_change_24h":10.86,"price_change_percentage_24h":0.04042,"market_cap_change_24h":530606710,"market_cap_change_percentage_24h":0.102,"circulating_supply":19378450.0,"total_supply":21000000.0,"max_supply":21000000.0,"ath":69045,"ath_change_percentage":-61.08633,"ath_date":"2021-11-10T14:24:11.849Z","atl":67.81,"atl_change_percentage":39522.83871,"atl_date":"2013-07-06T00:00:00.000Z","roi":null,"last_updated":"2023-05-20T05:39:23.412Z"}, */