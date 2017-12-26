const express = require('express');
const router = express.Router();
let User = require('../models/User');

router.post('/signUp',(req,res,next) => {
	new User(req.body.signUp).save()
		.then((data) => {
			res.json({
				code: 0
			});
		});
});

module.exports = router;