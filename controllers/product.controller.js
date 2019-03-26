const db = require('../db');

module.exports.index = (req, res) => {
  let page = parseInt(req.query.page) || 1;
  let perPage = 8;

  let start = (page - 1) * perPage;
  let end = page * perPage;
  console.log(res.body);

  res.render('products/index', {
    products: db.get('products').value().slice(start,end)
  });
};

module.exports.search = (req, res) => {
  let q = req.query.q;
  let matchedProducts = db.get('products').value().filter(product => product.name.toLowerCase().indexOf(q.toLowerCase()) !== -1);
  
  res.render('products/index', {
    products: matchedProducts
  }); 
};

// module.exports.get = (req, res) => {
//   let id = req.params.id;  
//   let product = db.get('products').find({ id: id }).value();
  
//   res.render('products/view', {
//     product: product
//   });
// };