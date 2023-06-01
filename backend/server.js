const express = require('express');
const axios = require('axios');
const mongoose = require('mongoose');
const cors = require("cors");

const app = express();
const PORT = 3001;

//middleware
app.use(express.json());
app.use(cors());

const Coin = require("./models/coin");

// Connect to MongoDB
mongoose.connect(
  "mongodb://localhost/hodlinfo-DB",
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
  console.log("connected to DB")
);


const fetchCoins = async () => {
  try {
    const response = await axios.get('https://api.wazirx.com/api/v2/tickers');
    const coins = response.data;

    const coinsData = Object.values(coins)
      .slice(0, 10)
      .map((ticker) => ({
        name: ticker.name,
        last: ticker.last,
        buy: ticker.buy,
        sell: ticker.sell,
        volume: ticker.volume,
        base_unit: ticker.base_unit,
      }));

    await Coin.insertMany(coinsData);
    console.log('coins stored in the database');
  } catch (error) {
    console.error('Error fetching and storing coins:', error.message);
  }
};

// fetchCoins();


app.get('/coins', async (req, res) => {
  try {
    const coins = await Coin.find();
    res.json(coins);
  } catch (error) {
    console.error('Error retrieving coins:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
