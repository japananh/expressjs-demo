const db = require('../db');

module.exports.addToCart = (req, res, next) => {
  let productId = req.params.productId;
  let sessionId = req.signedCookies.sessionId;

  if (!sessionId) {
    res.redirect('/products');
    return;
  }

  let userSession = db
    .get('sessions')
    .find({ id: sessionId });
  
  let count = userSession
    .get('cart.' + productId, 0)
    .value();

  userSession.set('cart.' + productId, count + 1)
    .write();

  let userCart = userSession
    .value()['cart'];

  let quantity = 0;
  
  for (key in userCart) {
    quantity += userCart[key];
  }
  
  userSession.set('quantity', quantity)
    .write();

  res.redirect('/products');
};