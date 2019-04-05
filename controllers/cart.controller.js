const db = require('../db');
const Session = require('../models/session.model');

module.exports.addToCart = (req, res, next) => {
  let productId = req.params.productId;
  let sessionId = req.signedCookies.sessionId;

  if (!sessionId) {
    res.redirect('/products');
    return;
  }
  // Solution 1 - use lowdb
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
  
  for (let key in userCart) {
    quantity += userCart[key];
  }
  
  userSession.set('quantity', quantity)
    .write();
  // Solution 2 - use mongoose
  // let userSession = await Session.find({ id: sessionId });

  // if (userSession.length === 0) {
  //   // phan nay ok =))
  //   let newSession = {
  //     id: sessionId,
  //     cart: {
  //       1: {
  //         productId: productId,
  //         quantity: 1
  //       }
  //     },
  //     total: 1
  //   };

  //   Session.create(newSession, err => {
  //     if (err) return handleError(err);
  //   });
  // } else {
  //   // phan nay con bug
  //   let count = 1;//.productId ? userSession.cart.productId : 0;

  //   Session.findOneAndUpdate(
  //     { id: sessionId },
  //     { cart: { 
  //       2: { 
  //         productId: productId, 
  //         quantity: count + 1
  //       } 
  //     }},
  //     { new: true }
  //   );
  
    res.redirect('/products');
};