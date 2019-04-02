const express = require('express');

const controller = require('../controllers/transfer.controller');

const router = express.Router(); // a function to return router object

router.get('/create', controller.create);

router.post('/create', controller.postCreate);

module.exports = router;