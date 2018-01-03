const crypto = require('crypto');
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Role = require('../models/Role');
const Component = require('../models/Component');
const Framework = require('../models/Framework');
const code = require('../config').code;
const passwordSalt = require('../config').passwordSalt;


let resData = {};

router.use((res,req,next) => {
	resData = {
		code: 0,
		message: ''
	};
	next();
});

router.get('/autoLogin',(req,res) => {
	let role = req.userInfo.role;
	if (role) {
		resData.message = '用户已登录';
		resData.roleType = role.type;
		resData.realname = req.userInfo.realname;
	} else {
		resData.code = code.ok;
		resData.message = '用户未登录';
		resData.roleType = 0;
	}
	res.json(resData);
});

router.get('/user/check',(req,res) => {
	let username = req.query.username;
	User.findOne({username:username}).then((userInfo) => {
		if (userInfo) {
			resData.code = code.err;
			resData.message = '用户名已经被注册！';
		} 
		res.json(resData);
	});
});

router.post('/user/signUp',(req,res,next) => {	
	let signUpInfo = req.body.signUpInfo;
	signUpInfo.belong = signUpInfo.belong[signUpInfo.belong.length - 1];
	let md5 = crypto.createHash('md5');
	signUpInfo.password = md5.update(signUpInfo.password + passwordSalt).digest('hex');
	Role.findOne({type: 1}).then((roleInfo) => {
		signUpInfo.role = roleInfo._id;
		let user = new User(signUpInfo);
		return user.save();
	}).then((userInfo) => {
		req.cookies.set('HP_USERINFO',userInfo._id);
		resData.code = code.ok;
		resData.message = "注册成功！";
		resData.userInfo = userInfo;
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
	}).populate('role').then((userInfo) => {
		if (userInfo) {
			let autoLoginTime = parseInt(signInInfo.autoLogin[0]) * 10;
			req.cookies.set('HP_USERINFO',userInfo._id,{maxAge: 1000 * 60 * 60 * 24 * autoLoginTime});
			resData.message = '登录成功！';
			resData.userInfo = userInfo;
		} else {
			resData.code = code.err,
			resData.message = '用户名或密码错误！';
		}
		res.json(resData);
	});
});

router.get('/user/signOut',(req,res) => {
	let userid = req.cookies.get('HP_USERINFO');
	if (userid) {
		req.cookies.set('HP_USERINFO','');
		resData.message = '退出成功！';
	} else {
		resData.code = code.err;
		resData.message = '退出失败！';
	}
	res.json(resData);
});

router.get('/user/belong',(req,res) => {
	Component.find({}).populate('type').then((belongList) => {
		if (belongList) {
			resData.message = '属于数据请求成功！';
			resData.belongList = belongList;
		} else {
			resData.code = code.err;
			resData.message = '属于数据请求失败！';
		}
		res.json(resData);
	});
});

module.exports = router;