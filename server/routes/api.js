const express = require('express');
const router = express.Router();
let User = require('../models/User');
let code = require('../config').code;

let resData = {};

router.use((res,req,next) => {
	resDate = {
		code: 0,
		message: ''
	};
	next();
});

router.get('/usernamecheck',(req,res) => {
	let username = req.query.username;
	User.find({username:username}).then((result) => {
		if (result) {
			resDate.code = 1;
			resDate.message = '用户名已经被注册！';
		} 
		res.json(resData);
	});
});

router.post('/signUp',(req,res,next) => {
	let signUp = req.body.signUp;
	
	new User(req.body.signUp).save()
		.then((data) => {
			res.json({
				code: code.ok
			});
		});
});

module.exports = router;