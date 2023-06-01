
const CoinList = ({coins}) => {

 

  return (
    <div>
      <h1>Coins List</h1>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Platform</th>
            <th>Last Traded Price</th>
            <th>Buy / Sell Price</th>
            <th>Volume</th>
            <th>Base Unit</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin, index) => (
            <tr key={coin._id}>
              <td>{index + 1}</td>
              <td>{coin.name}</td>
              <td>₹ {coin.last}</td>
              <td>₹ {coin.buy} / ₹ {coin.sell}</td>
              <td>{coin.volume}%</td>
              <td>{coin.base_unit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoinList;
