const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
  name: String,
  email: String,
  phoneNumber: String,
  password: String,
  avatar: String
});

let User = mongoose.model('User', userSchema, 'users');

module.exports = User;