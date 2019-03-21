// Require modules ben ngoai
const express = require('express');
const bodyParser = require('body-parser');
const userRoute = require('./routes/user.route.js');
// when you start a server, you're required to set up ports to access your applications.
const port = 3000;
// express() is a funtion which returns a new app.
const app = express(); 
// Pug is a template engine
app.set('views', './views');
app.set('view engine', 'pug');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(express.static('public'));
// (req, res) => res.send('Hello World!') is an arrow funtion fallback
// main methods are GET POST PUT DELETE PATH
// Get: take data to display it on browser
// req - users send data, res - servers return data
app.get('/', (req, res) => res.render('index'));

app.use('/users', userRoute);

app.listen(port, () => console.log('Server listening on port ' + port));