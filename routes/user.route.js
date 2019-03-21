const express = require('express');

const controller = require('../controllers/user.controller.js');
const router = express.Router(); // a function to return router object

router.get('/', controller.index);

router.get('/search', controller.search);

router.get('/create', controller.create);

router.get('/:id', controller.get);

router.post('/create', controller.postCreate);

module.exports = router;