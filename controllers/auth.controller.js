const md5 = require('md5');

const db = require('../db'); // ky hieu ../ la ra ngoai folder

module.exports.login = (req, res) => res.render('auth/login');

module.exports.postLogin = (req, res) => {
  let email = req.body.email;
  let password = req.body.password;

  let user = db.get('users').find({ email: email }).value();

  if (!user) {
    res.render('auth/login', {
      errors: [
        'User does not exist.'
      ],
      values: req.body
    });
    return;
  }

  // Hash password user gui len. Moi lan hash ham md5 returns 1 value khong doi
  // E.g. md5('123456') = e10adc3949ba59abbe56e057f20f883e
  let hashedPassword = md5(password);

  if (user.password !== hashedPassword) {
    res.render('auth/login', {
      errors: [
        'Wrong password.'
      ],
      values: req.body
    });
    return;
  }

  res.cookie('userId', user.id, {
    signed: true
  });
  
  res.redirect('/users');
};