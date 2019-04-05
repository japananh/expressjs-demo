/* Solution 1 - use lowdb
const db = require('../db');
*/
const Product = require('../models/product.model');

module.exports.index = async (req, res) => {
  /* Soluction 1 - use lowdb
  let page = parseInt(req.query.page) || 1;
  let perPage = 8;

  let start = (page - 1) * perPage;
  let end = page * perPage;
  
  res.render('products/index', {
    products: db.get('products').value().slice(start,end)
  });
  */
  // Solution 2 - use mongodb
  let products = await Product.find();

  res.render('products/index', {
    products: products
  });
};

module.exports.search = async (req, res) => {
  let q = req.query.q;
  let products = await Product.find();
  //let matchedProducts = db.get('products').value().filter(product => product.name.toLowerCase().indexOf(q.toLowerCase()) !== -1);
  let matchedProducts = products.filter(product => product.name.toLowerCase().indexOf(q.toLowerCase()) !== -1);

  res.render('products/index', {
    products: matchedProducts
  }); 
};