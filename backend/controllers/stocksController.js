const axios = require('axios');
require('dotenv').config();

const stocksController = (req, res) => {
  const data = [
    {
      _id: 1,
      market: 'NIFTY 50',
      stockName: 'ADANI PORT',
      rate: '1400',
    },
    {
      _id: 2,
      market: 'NIFTY 50',
      stockName: 'ADANI PORT',
      rate: '1400',
    },
    {
      _id: 3,
      market: 'NIFTY 50',
      stockName: 'ADANI PORT',
      rate: '1400',
    },
    {
      _id: 4,
      market: 'NIFTY 50',
      stockName: 'ADANI PORT',
      rate: '1400',
    },
    {
      _id: 5,
      market: 'NIFTY 50',
      stockName: 'ADANI PORT',
      rate: '1400',
    },
    {
      _id: 6,
      market: 'NIFTY 50',
      stockName: 'ADANI PORT',
      rate: '1400',
    },
    {
      _id: 7,
      market: 'NIFTY 50',
      stockName: 'ADANI PORT',
      rate: '1400',
    },
    {
      _id: 8,
      market: 'NIFTY 50',
      stockName: 'ADANI PORT',
      rate: '1400',
    },
  ];

  res.json(data);
};
module.exports = stocksController;
