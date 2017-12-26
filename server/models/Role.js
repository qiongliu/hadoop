const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let roleSchema = new Schema({
	name: String,
	permission: {
		type: Schema.Types.ObjectId,
		ref: 'Permission'
	}
});

let Role = mongoose.model("Role",roleSchema);
