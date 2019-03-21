module.exports.postCreate = function(req, res, next) {
  let errors = [];

  if (!req.body.name) {
    errors.push('Name is required.');
  }

  if (!req.body.email) {
    errors.push('Email is requred.');
  }

  if (!req.body.phoneNumber) {
    errors.push('Phone number is requred.');
  }

  if (errors.length) {
    res.render('users/create', {
      errors: errors,
      values: req.body
    });
    return;
  }
}