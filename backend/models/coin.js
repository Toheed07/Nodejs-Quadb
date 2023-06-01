const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CoinsSchema = new Schema({
  name: {
    type: String,
  },
  last: {
    type: Number,
  },
  buy: {
    type: Number,
  },
  sell: {
    type: Number,
  },
  volume: {
    type: Number,
  },
  base_unit: {
    type: String,
  },

});

const Coin = mongoose.model("Coin", CoinsSchema);

module.exports = Coin;
