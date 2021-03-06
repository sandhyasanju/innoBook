var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var dashboard = require('./routes/dashboard');
var login = require('./routes/login');
var register = require('./routes/register');

var app = express();
app.listen(3030,function(){
  console.log('app listnening on port 30');
})
// view engine setup
//app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static('./public'));
app.use(function(req,res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','POST,GET,DELETE');
    res.setHeader('Access-Control-Allow-Headers','X-Requested-With,json/application');
    res.setHeader('Access-Control-Allow-Credentials',true);
    next();
})
app.use('/', login);
app.use('/register', register);
app.use('/dashboard', dashboard);
app.get('*',function(req,res){
		res.redirect('/');
	})
app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 6000 }}));
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
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

module.exports = app;
