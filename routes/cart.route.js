const express = require('express');

const controller = require('../controllers/cart.controller');

const router = express.Router(); // a function to return router object

router.get('/add/:productId', controller.addToCart);

module.exports = router;