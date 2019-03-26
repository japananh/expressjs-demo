const shortid = require('shortid');
// Check xem cookie co ton tai khong
module.exports = (req, res, next) => {
  // Create a new cookie if cookie does not exist
  if (!req.signedCookies.sessionId) {
    res.cookie('sessionId', shortid.generate(), {
      // User cannot modify cookies
      signed: true
    });
  }

  next();
}