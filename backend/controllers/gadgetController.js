const axios = require('axios');
const gadgetController = (req, res) => {
    const data = [{
        _id: 1,
        img: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/51SSRdsR-DL._SX679_.jpg",
        name: "Google Pixel 4",
        price: "20000"
    },
    {
        _id: 2,
        img: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/51SSRdsR-DL._SX679_.jpg",
        name: "Google Pixel 4",
        price: "20000"
    },
    {
        _id: 3,
        img: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/51SSRdsR-DL._SX679_.jpg",
        name: "Google Pixel 4",
        price: "20000"
    },
    {
        _id: 4,
        img: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/51SSRdsR-DL._SX679_.jpg",
        name: "Google Pixel 4",
        price: "20000"
    }
    ]

    res.json(data);

}
module.exports = gadgetController;