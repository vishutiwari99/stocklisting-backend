const express = require('express');
const router = express.Router();
const { saveStocks, getAllStocks, deleteStock } = require('../controller/stocksController');
router.post('/save', saveStocks);
router.get('/', getAllStocks)
router.delete('/:id', deleteStock);

module.exports = router;