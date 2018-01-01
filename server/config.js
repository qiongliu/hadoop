exports.mongoose = {
	host: 'localhost',
	port: '27017',
	db: 'hancheng',
	cookieSecret: 'hancheng'
};

exports.code = {
	ok: 0,
	err: 1
};

exports.passwordSalt = () => {
	return 'hancheng';
};
exports.uploadTemp = '/upload/temp';
exports.uploadImgPath = '/upload/images';