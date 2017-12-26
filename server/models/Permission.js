const mongoose = require('mongoose');
const Schmea = mongoose.Schema;

let permissionSchema = new Schmea({
	name: String
});

module.exports = mongoose.model("Role",permissionSchema);