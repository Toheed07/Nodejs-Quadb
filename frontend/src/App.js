import CoinList from "./components/coin-table/coin-table";
import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar/navbar.jsx"
import './App.css';

function App() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const response = await fetch("http://localhost:3001/coins");
        const data = await response.json();
        setCoins(data);
      } catch (error) {
        console.error("Error fetching coins:", error.message);
      }
    };

    fetchCoins();
  }, []);
  return (
    <>
      <Navbar/>
      <CoinList coins={coins} />
    </>
  );
}

export default App;
