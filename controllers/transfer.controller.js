const shortid = require('shortid');
const db = require('../db');

module.exports.create = function(req, res, next) {
  res.render('transfer/create');
};

module.exports.postCreate = function(req, res, next) {
  let data = {
    id: shortid.generate(),
    amount: parseInt(req.body.amount),
    accountId: req.body.accountId,
    userId:req.signedCookies.userId
  };

  db.get('transfers').push(data).write();

  res.redirect('/transfer/create');
};