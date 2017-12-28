const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const ejs = require('ejs');
const Cookies = require('cookies');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


let index = require('./routes/index');
let users = require('./routes/users');
let api = require('./routes/api');
let config = require('./config');
let User = require('./models/User');

let app = express();

app.set('port', process.env.PORT || 3000)
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html',ejs.renderFile);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req,res,next) => {
  req.cookies = new Cookies(req,res);
  req.userInfo = {};
  let userInfo = req.cookies.get('HP_USERINFO');
  if(userInfo) {
    try {
      req.userInfo = JSON.parse(userInfo);
      User.findById(req.userInfo.id).populate('role').then(function(result){
        req.userInfo.roleType = result.role.type;
        req.userInfo.role = result.role.name;
        next();
      });
    } catch (e){
      next();
    }
  } else {
    next();
  }
});

app.use('/api',api);
app.use('/', index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://' + config.mongoose.host + ':' + config.mongoose.port + '/' + config.mongoose.db,{useMongoClient: true,config:{autoIndex: false}});
let db = mongoose.connection;
db.on('error', () => {
  console.log("数据库连接失败！")
});
db.once('open',() => {
  console.log("数据库连接成功！")
});
app.listen(app.get("port"),function(){
  console.log('app listen...');
});

module.exports = app;
