const express = require('express');
const multer = require('multer'); // read request duoi dang form-data

const controller = require('../controllers/user.controller');
const validation = require('../validation/user.validation');
const authMiddleware = require('../middlewares/auth.middleware');
// create path to store users' avatars
const upload = multer({ dest: './public/uploads/' }); 

const router = express.Router(); // a function to return router object

router.get('/', controller.index);
// demo how to use cookie
router.get('/cookie', (req, res, next) => {
  res.send('Hello');
});

router.get('/search', controller.search);

router.get('/create', controller.create);

router.get('/:id', controller.get);
// Add middleware upload.single('avatar') 
// to upload a single file sent by a client
router.post('/create', 
  upload.single('avatar'), 
  validation.postCreate, 
  controller.postCreate
);

module.exports = router;