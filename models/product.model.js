const mongoose = require('mongoose');

let productSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String,
  price: String
});

let Product = mongoose.model('Product', productSchema, 'products');

module.exports = Product;