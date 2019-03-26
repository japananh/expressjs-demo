const express = require('express');

const controller = require('../controllers/product.controller');

const router = express.Router(); // a function to return router object

router.get('/', controller.index);

router.get('/search', controller.search);

// router.get('/:id', controller.get);

module.exports = router;