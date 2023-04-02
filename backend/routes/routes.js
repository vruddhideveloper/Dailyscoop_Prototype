const express = require('express');
const router = express.Router();

// Internal imports
const newsController = require('../controllers/newsController');
const entertainmentController = require('../controllers/entertainmentController');
const sportsController = require('../controllers/sportsController');
const stocksController = require('../controllers/stocksController');
const movieReviewsController = require('../controllers/movieReviewsController');
const gadgetController = require('../controllers/gadgetController');

router.get('/news', newsController);
router.get('/entertainment', entertainmentController);
router.get('/sports/', sportsController);
router.get('/stocks', stocksController);
router.get('/movie-reviews', movieReviewsController);
router.get('/gadget', gadgetController);

module.exports = router;