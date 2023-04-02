const axios = require('axios');
require('dotenv').config();

const entertainmentController = (req, res) => {
    data = [{
        _id: 1,
        img: "https://images.mid-day.com/images/images/2023/mar/ajay-bhola-release_d.jpg",
        title: "Fans frame a childhood photo of Ajay Devgn and a Shiva portrait as they gather outside the 'Bholaa' star’s residence on his birthday",
        date: "2 Apr 2023",
        description: "Bollywood’s ‘Bholaa’ star Ajay Devgn is celebrating his 54th birthday today. While the actor has been receiving wishes from his friends and colleagues on social media, some of his fans gathered outside his residence on his special day."
    }, {
        _id: 2,
        img: "https://images.mid-day.com/images/images/2023/mar/ajay-bhola-release_d.jpg",
        title: "Fans frame a childhood photo of Ajay Devgn and a Shiva portrait as they gather outside the 'Bholaa' star’s residence on his birthday",
        date: "2 Apr 2023",
        description: "Bollywood’s ‘Bholaa’ star Ajay Devgn is celebrating his 54th birthday today. While the actor has been receiving wishes from his friends and colleagues on social media, some of his fans gathered outside his residence on his special day."
    }, {
        _id: 3,
        img: "https://images.mid-day.com/images/images/2023/mar/ajay-bhola-release_d.jpg",
        title: "Fans frame a childhood photo of Ajay Devgn and a Shiva portrait as they gather outside the 'Bholaa' star’s residence on his birthday",
        date: "2 Apr 2023",
        description: "Bollywood’s ‘Bholaa’ star Ajay Devgn is celebrating his 54th birthday today. While the actor has been receiving wishes from his friends and colleagues on social media, some of his fans gathered outside his residence on his special day."
    }, {
        _id: 4,
        img: "https://images.mid-day.com/images/images/2023/mar/ajay-bhola-release_d.jpg",
        title: "Fans frame a childhood photo of Ajay Devgn and a Shiva portrait as they gather outside the 'Bholaa' star’s residence on his birthday",
        date: "2 Apr 2023",
        description: "Bollywood’s ‘Bholaa’ star Ajay Devgn is celebrating his 54th birthday today. While the actor has been receiving wishes from his friends and colleagues on social media, some of his fans gathered outside his residence on his special day."
    }];

    res.json(data);
}

module.exports = entertainmentController;