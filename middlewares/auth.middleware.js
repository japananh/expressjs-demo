const db = require('../db');

// check xem cookie co duoc gui len hay khong
module.exports.requireAuth = (req, res, next) => {
  // console.log(req.cookies, req.signedCookies);
  if (!req.signedCookies.userId) {
    res.redirect('/auth/login');
    return;
  }

  let user = db.get('users').find({ 
    id: req.signedCookies.userId 
  }).value();

  if (!user) {
    res.redirect('/auth/login');
    return;
  }

  next();
};