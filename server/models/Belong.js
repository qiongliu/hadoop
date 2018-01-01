const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let belongSchema = new Schema({
	name: String,
	type: {
		type: Schema.Types.ObjectId,
		ref: 'Framework'
	}
});

module.exports = mongoose.model('Belong',belongSchema);