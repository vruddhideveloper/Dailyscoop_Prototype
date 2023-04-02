const axios = require('axios');
require('dotenv').config();

const sportsController = (req, res) => {
    const data = [{
        _id: 1,
        img: "https://static.toiimg.com/thumb/msid-99181846,imgsize-71624,width-400,resizemode-4/99181846.jpg",
        headline: "SRH vs RR IPL 2023: New-look Sunrisers Hyderabad seek sound start against Rajasthan Royals"
    },
    {
        _id: 2,
        img: "https://static.toiimg.com/thumb/msid-99181846,imgsize-71624,width-400,resizemode-4/99181846.jpg",
        headline: "SRH vs RR IPL 2023: New-look Sunrisers Hyderabad seek sound start against Rajasthan Royals"
    },
    {
        _id: 3,
        img: "https://static.toiimg.com/thumb/msid-99181846,imgsize-71624,width-400,resizemode-4/99181846.jpg",
        headline: "SRH vs RR IPL 2023: New-look Sunrisers Hyderabad seek sound start against Rajasthan Royals"
    },
    {
        _id: 4,
        img: "https://static.toiimg.com/thumb/msid-99181846,imgsize-71624,width-400,resizemode-4/99181846.jpg",
        headline: "SRH vs RR IPL 2023: New-look Sunrisers Hyderabad seek sound start against Rajasthan Royals"
    }]
    res.json(data);

}
module.exports = sportsController;