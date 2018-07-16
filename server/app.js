var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);


var appData = require('./mock/db.json');
var getNewsList = appData.getNewsList;
var login = appData.login;
var getPrice = appData.getPrice;
var createOrder = appData.createOrder;
var getOrderList = appData.getOrderList;
var apiRoutes = express.Router();

apiRoutes.get('/getNewsList', (req, res) => {
  res.json({
    errno: 0,
    data: getNewsList
  });
});

apiRoutes.get('/login', (req, res) => {
  res.json({
    errno: 0,
    data: login
  });
});

apiRoutes.post('/getPrice', (req, res) => {
  res.json({
    errno: 0,
    data: getPrice
  });
});

apiRoutes.post('/createOrder', (req, res) => {
  res.json({
    errno: 0,
    data: createOrder
  });
});

apiRoutes.post('/getOrderList', (req, res) => {
  res.json({
    errno: 0,
    data: getOrderList
  });
});

app.use('/api', apiRoutes);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

app.disable('etag');
module.exports = app;
