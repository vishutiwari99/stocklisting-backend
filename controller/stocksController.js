const Stocks = require("../models/Stocks");

const saveStocks = async (req, res) => {
    try {
        const { name, symbol, price, market_cap, id } = req.body;
        console.log(req.body)
        const stock = await Stocks.findOne({
            id,
        });

        if (stock) {
            return res.status(400).json({
                msg: "This stock is already saved"
            });
        }
        const newStocks = new Stocks({
            name,
            id,
            symbol,
            price,
            market_cap
        });
        await newStocks.save();
        res.json({
            msg: `${name} is saved successfully`
        });
    } catch (error) {
        res.status(500).json({
            msg: error.message,
        })
    }
}

const getAllStocks = async (req, res) => {
    try {
        const stocks = await Stocks.find({});
        res.json(stocks);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Server Error",
        });

    }
}

const deleteStock = async (req, res) => {
    console.log(req.params.id)
    try {
        await Stocks.findByIdAndDelete(req.params.id);
        res.json({
            msg: `Stock deleted`
        })
    } catch (err) {
        console.log(err.message)
        return res.status(500).json({
            msg: err.message,
        });
    }
}

module.exports = { saveStocks, getAllStocks, deleteStock };