const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let InformationSchema = new Schema({
	title: String,
	date: {
		type: Date,
		default: Date.now()
	},
	department: [String],
	uploadFile: [String],
	content: String,
	author: {
		type: Schema.Types.ObjectId,
		ref: "User"
	}
});

module.exports = mongoose.model('Information', InformationSchema);