const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
	username: String,
	realname: String,
	password: String,
	gender: String,
	birthDate: Date,
	// role: {
	// 	type: Schema.Types.ObjectId,
	// 	ref: 'Role',
	// 	default: 0
	// },
	date: {
		type: Date,
		default: Date.now()
	}
});
module.exports = mongoose.model('User',userSchema);
