const mongoose = require("mongoose");
const stockSchema = new mongoose.Schema({
    id: {
        type: String,
        unique: true,
    },
    name: {
        type: String,
    },
    symbol: {
        type: String,
    },
    market_cap: {
        type: String,
    },
    price: {
        type: String,
    }
});

const Stocks = mongoose.model("Stocks", stockSchema);
module.exports = Stocks;