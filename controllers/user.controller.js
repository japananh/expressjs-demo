// const db = require('../db');
// const shortid = require('shortid');
const User = require('../models/user.model');
/* SoLution 1 - use lowdb
module.exports.index = (req, res) => res.render('users/index', {
	users: db.get('users').value()
});
*/
// Solution 2 - use mongodb
module.exports.index = async (req, res) => {
	let users = await User.find();

	res.render('users/index', {
		users: users
	});
};

module.exports.search = async (req, res) => {
	let q = req.query.q;
	let users = await User.find();
	// Solution 1 - use lowdb
	// let matchedUsers = db.get('users').value().filter(user => user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1);
	// Solution 2 - use mongodb
	let matchedUsers = users.filter(user => {
    return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
  });
	
	res.render('users/index', {
		users: matchedUsers
	});	
};

module.exports.create = (req, res) => {
	res.render('users/create');	
};

module.exports.get = async (req, res) => {
	let id = req.params.id;
	//let user = db.get('users').find({ id: id }).value();
  let ObjectId = require('mongoose').Types.ObjectId; // generate an ObjectId with mongoose
	let user = await User.findById(new ObjectId(id));

	res.render('users/view', {
		user: user
	});
};

module.exports.postCreate = (req, res) => {
	//req.body.id = shortid.generate();
	req.body.avatar = req.file.path;	
	// db.get('users').push(req.body).write();
	let newUser = {
		name: req.body.name,
		email: req.body.email,
		phoneNumber: req.body.phoneNumber,
		password: req.body.password,
		avatar: req.body.avatar
	};

	User.create(newUser, err => {
		if (err) return handleError(err);
	});

	res.redirect('/users');
};