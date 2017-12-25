const express = require('express');
const router = express.Router();
let User = require('../models/User');

router.get('/signUp',(req,res,next) => {
	let user = new User({username: 'liner331'})
	user.save((err,user) => {
		if (err) return console.log(err)

	});
	res.json({
		code: 0
	});
});

module.exports = router;