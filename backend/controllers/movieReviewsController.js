const axios = require('axios');
require('dotenv').config();

const movieReviewsController = (req, res) => {
    const data = [{
        _id: 1,
        img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRI_Owr6ghUx2TRlF-if7hc9usc-59VppAk2HoY7nIyzPhBCpPj",
        title: "Bholaa",
        date: "2023",
        ratings: 3.5
    },
    {
        _id: 2,
        img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRI_Owr6ghUx2TRlF-if7hc9usc-59VppAk2HoY7nIyzPhBCpPj",
        title: "Bholaa",
        date: "2023",
        ratings: 3.5
    }, {
        _id: 3,
        img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRI_Owr6ghUx2TRlF-if7hc9usc-59VppAk2HoY7nIyzPhBCpPj",
        title: "Bholaa",
        date: "2023",
        ratings: 3.5
    }, {
        _id: 4,
        img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRI_Owr6ghUx2TRlF-if7hc9usc-59VppAk2HoY7nIyzPhBCpPj",
        title: "Bholaa",
        date: "2023",
        ratings: 3.5
    }];

    res.json(data);
}
module.exports = movieReviewsController;