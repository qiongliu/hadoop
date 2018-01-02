const express = require('express');
const router = express.Router();
const code = require('../config').code;
const upload = require('../common/js/upload');
const Framework = require('../models/Framework');
const Component = require('../models/Component');
const Information = require('../models/Information');
const User = require('../models/User');

/* GET article listing. */
let resData = {};

router.use((req,res,next) => {
	resData = {
		code: code.ok,
		message: ''
	};
	next();
});

router.get('/getDepartment',(req,res) => {
	Framework.findOne({name: '街道'}).then((frameworkInfo) => {
		return Component.find({type: frameworkInfo._id})
	}).then((departmentInfo) => {
		if (departmentInfo.length) {
			resData.message = "科室列表查找成功！";
			res.json(departmentInfo);
		} else {
			resData.code = code.err;
			resData.message = "科室列表查找失败!";
		}
	});
});

router.get('/getSelfInformation',(req,res) => {
	Component.findOne({_id: req.userInfo.belong}).then((belong) => {
		return Information.find({department: {$in:[belong.name]}})
	}).then((information) => {
		if (information.length) {
			resData.message = "信息列表请求成功！";
			resData.information = information;
		} else {
			resData.code = code.err;
		}
		res.json(resData);
	});
});

router.post('/uploadImg', (req,res) => {
  upload.uploadImg(req,res).then((fileInfo) => {
  	res.json(fileInfo);
  });
});

router.post('/addInformation',(req,res) => {
	req.body.information.author = req.userInfo.id;
	let information = new Information(req.body.information);
	information.save().then((information) => {
		if (information) {
			resData.message = '保存成功!';
		} else {
			resData.code = code.err;
			resData.message = '保存失败!';
		}
		res.json(resData);
	}).catch((err) => {
		console.log(err);
	});
});

module.exports = router;
