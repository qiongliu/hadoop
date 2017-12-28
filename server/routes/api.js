const crypto = require('crypto');
const express = require('express');
const router = express.Router();
let User = require('../models/User');
let Role = require('../models/Role');
let code = require('../config').code;
let passwordSalt = require('../config').passwordSalt;

let resData = {};

router.use((res,req,next) => {
	resData = {
		code: 0,
		message: ''
	};
	next();
});

router.get('/autoLogin',(req,res) => {
	let roleType = req.userInfo.roleType;
	if (roleType >= 0) {
		resData.message = '用户已登录';
		resData.roleType = roleType;
	} else {
		resData.code = 1;
		resData.message = '用户未登录';
	}
	res.json(resData);
});

router.get('/user/check',(req,res) => {
	let username = req.query.username;
	User.findOne({username:username}).then((result) => {
		if (result) {
			resData.code = code.err;
			resData.message = '用户名已经被注册！';
		} 
		res.json(resData);
	});
});

router.post('/user/signUp',(req,res,next) => {	
	let signUpInfo = req.body.signUpInfo;
	let md5 = crypto.createHash('md5');
	signUpInfo.password = md5.update(signUpInfo.password + passwordSalt).digest('hex');
	Role.findOne({name: '群众'}).then((roleInfo) => {
		signUpInfo.role = roleInfo._id;
		let user = new User(signUpInfo);
		return user.save();
	}).then((userInfo) => {
		req.cookies.set('HP_USERINFO',JSON.stringify({
			id: userInfo._id
		}),{maxAge: 1000 * 60 * 60 * 24 * 30});
		resData.code = code.ok;
		resData.message = "注册成功！";
		res.json(resData);
	})
	.catch((err) => {
		console.log(err)
	});
});

router.post('/user/signIn',(req,res) => {
	let signInInfo = req.body.signInInfo;
	let md5 = crypto.createHash('md5');
	signInInfo.password = md5.update(signInInfo.password + passwordSalt).digest('hex');
	User.findOne({
		username: signInInfo.username,
		password: signInInfo.password
	}).then((result) => {
		if (result) {
			req.cookies.set('HP_USERINFO',JSON.stringify({
				id: result._id
			}));
			resData.message = '登录成功！';
		} else {
			resData.code = code.err,
			resData.message = '用户名或密码错误！';
		}
		res.json(resData);
	});
});

module.exports = router;