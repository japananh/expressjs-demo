const express = require('express');

const controller = require('../controllers/auth.controller.js');

const router = express.Router(); // a function to return router object

router.get('/login', controller.login);

router.post('/login', controller.postLogin);

module.exports = router;