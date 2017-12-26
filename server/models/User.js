const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
	username: String,
	realname: String,
	password: String,
	gender: String,
	birthDate: Date,
	role: Number,
	date: {
		type: Date,
		default: Date.now()
	}
});
module.exports = mongoose.model('User',userSchema);
