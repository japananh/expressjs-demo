const express = require('express');

const controller = require('../controllers/user.controller.js');
const validation = require('../validation/user.validation.js');
const authMiddleware = require('../middlewares/auth.middleware');

const router = express.Router(); // a function to return router object

router.get('/', authMiddleware.requireAuth, controller.index);

router.get('/cookie', (req, res, next) => {
  // res.cookie('user-id', 12345);
  res.send('Hello');
});

router.get('/search', controller.search);

router.get('/create', controller.create);

router.get('/:id', controller.get);

router.post('/create', validation.postCreate, controller.postCreate);

module.exports = router;