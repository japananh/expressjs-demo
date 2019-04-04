const mongoose = require('mongoose');

let sessionSchema = new mongoose.Schema({
  id: String,
  cart: Object,
  quantity: Number,
});

let Session = mongoose.model('Session', sessionSchema, 'sessions');

module.exports = Session;