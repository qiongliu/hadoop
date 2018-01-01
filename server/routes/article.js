var express = require('express');
var router = express.Router();
let code = require('../config').code;
let upload = require('../common/js/upload');

/* GET article listing. */
let resData = {};

router.use((req,res,next) => {
	resData = {
		code: code.ok,
		message: ''
	};
	next();
});

router.post('/uploadImg', function(req, res, next) {
  upload.uploadImg(req,res).then((fileInfo) => {
  	res.json(fileInfo);
  });
});

module.exports = router;
