const mongoose = require('mongoose');

let transferSchema = new mongoose.Schema({
  amount: Number,
  accountId: String,
  userId: String,
});

let Transfer = mongoose.model('Transfer', transferSchema, 'transfers');

module.exports = Transfer;