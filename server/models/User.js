const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
	username: String,
	realname: String,
	password: String,
	gender: String,
	birthDate: Date,
	role: {
		type: Number,
		default: 0
	},
	isAutoLogin: {
		type: Boolean,
		default: false
	},
	date: {
		type: Date,
		default: Date.now()
	}
});
module.exports = mongoose.model('User',userSchema);
