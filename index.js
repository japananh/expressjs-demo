// Require modules ben ngoai
require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const userRoute = require('./routes/user.route');
const authRoute = require('./routes/auth.route');
const productRoute = require('./routes/product.route');

const authMiddleware = require('./middlewares/auth.middleware');
const sessionMiddleware = require('./middlewares/session.middleware');

// when you start a server, you're required to set up ports to access your applications.
const port = 3000;
// express() is a funtion which returns a new app.
const app = express(); 
// Pug is a template engine
app.set('views', './views');
app.set('view engine', 'pug');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
// Use process.env.SESSION_SECRET (duoc khai bao o file .env) de bao mat cookie
app.use(cookieParser('process.env.SESSION_SECRET'));
app.use(sessionMiddleware);
// serve images, CSS files, and JavaScript files in a directory named public:
app.use(express.static('public'));
// (req, res) => res.send('Hello World!') is an arrow funtion fallback
// main methods are GET POST PUT DELETE PATH
// Get: take data to display it on browser
// req - users send data, res - servers return data
app.get('/', (req, res) => res.render('index'));

app.use('/users', authMiddleware.requireAuth, userRoute);
app.use('/auth', authRoute);
app.use('/products', productRoute);

app.listen(port, () => console.log('Server listening on port ' + port));