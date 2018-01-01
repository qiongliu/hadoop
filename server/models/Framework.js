const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let frameworkSchema = new Schema({
	name: String
});

module.exports = mongoose.model('Framework',frameworkSchema);