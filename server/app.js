// *** main dependencies *** //
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
// var swig = require('swig');
var passport = require('passport');
var localStrategy = require('passport-local').Strategy;
var session = require('express-session');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/storyBoardApp');


// *** routes *** //
var routes = require('./routes/index.js');

// user schema.model//
var User = require('./models/user.js');
var Storyboard = require('./models/storyboard.js');



// *** express instance *** //
var app = express();


// *** view engine *** //
// var swig = new swig.Swig();
// app.engine('html', swig.renderFile);
// app.set('view engine', 'html');


// *** static directory *** //
// app.set('views', path.join(__dirname, 'views'));


// *** config middleware *** //
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, '../client')));

// ** configure passport **//
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



// *** main routes *** //
app.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../client/', 'index.html'));
});
app.use('/', routes);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// *** error handlers *** //

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500).json({status: "Error!"});
  });
}

// production error handler
// no stacktraces leaked to user
// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500).json({status: 'Error!'});
});




module.exports = app;
