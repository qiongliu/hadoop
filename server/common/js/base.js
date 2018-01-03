const dateformat = require('dateformat');
exports.formatDate = (date) => {
	return dateformat(date,'yyyy-mm-dd');
}