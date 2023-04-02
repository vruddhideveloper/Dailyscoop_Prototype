const axios = require('axios');
require('dotenv').config();

const newsController = (req, res) => {
    const data = [{
        _id: 1,
        img: "https://static.toiimg.com/thumb/msid-99185749,imgsize-1109106,width-400,resizemode-4/99185749.jpg",
        headline: "F1 2023: Verstappen takes action-packed Australian GP victory after multiple crashes & 3 race starts!"
    },
    {
        _id: 2,
        img: "https://static.toiimg.com/thumb/msid-99185749,imgsize-1109106,width-400,resizemode-4/99185749.jpg",
        headline: "F1 2023: Verstappen takes action-packed Australian GP victory after multiple crashes & 3 race starts!"
    }, {
        _id: 3,
        img: "https://static.toiimg.com/thumb/msid-99185749,imgsize-1109106,width-400,resizemode-4/99185749.jpg",
        headline: "F1 2023: Verstappen takes action-packed Australian GP victory after multiple crashes & 3 race starts!"
    }
        , {
        _id: 4,
        img: "https://static.toiimg.com/thumb/msid-99185749,imgsize-1109106,width-400,resizemode-4/99185749.jpg",
        headline: "F1 2023: Verstappen takes action-packed Australian GP victory after multiple crashes & 3 race starts!"
    }, {
        _id: 5,
        img: "https://static.toiimg.com/thumb/msid-99185749,imgsize-1109106,width-400,resizemode-4/99185749.jpg",
        headline: "F1 2023: Verstappen takes action-packed Australian GP victory after multiple crashes & 3 race starts!"
    }]
    res.json(data);
}

module.exports = newsController;