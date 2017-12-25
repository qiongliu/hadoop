const mongoose = require('./db');

let userSchema = mongoose.Schema({
	username: String
	// realname: String,
	// password: String,
	// gender: String,
	// birthDate: Date,
	// date: {
	// 	type: Date,
	// 	default: new Date()
	// }
});
module.exports = mongoose.model('User',userSchema);
