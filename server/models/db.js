const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/hancheng',{useMongoClient:true});
let db = mongoose.connection;
db.on('error',() => {
	console.log('db err');
});

db.once('open', () => {
	console.log('db success');
});

module.exports = mongoose;
