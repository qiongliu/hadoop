const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let roleSchema = new Schema({
	name: String,
	type: Number
});

module.exports = mongoose.model('Role',roleSchema);
