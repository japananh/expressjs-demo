const shortid = require('shortid');
const db = require('../db');
// Check xem cookie co ton tai khong
module.exports = (req, res, next) => {  
  // Create a new cookie if cookie does not exist
  if (!req.signedCookies.sessionId) {   
    let sessionId = shortid.generate();

    res.cookie('sessionId', sessionId, {
      // User cannot modify cookies
      signed: true
    });

    db.get('sessions').push({
      id: sessionId
    }).write();
  }

  next();
}