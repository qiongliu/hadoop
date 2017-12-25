const express = require('express');
const router = express.Router();

router.post('/signUp',(req,res,next) => {
	res.json({
		code: 0
	});
});

module.exports = router;