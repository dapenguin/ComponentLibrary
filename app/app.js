var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var hbs = require('express-hbs');
var registerPartials = require('./lib/registerPartials');
var setupRoutes = require('./lib/setupRoutes');

var app = express();

// Get the source folder from the arguments passed to this app.
var srcFolder = (process.argv[2] || 'default');

// view engine setup
app.engine('hbs',hbs.express4({
  defaultLayout: path.join(__dirname, '../views/layouts/layout'),
  partialsDir: path.join(__dirname, '../views/partials'),
  layoutsDir: path.join(__dirname, '../views/layouts'),
  onCompile: function(exhbs, source, filename) {
    var options = {
      preventIndent: true
    };
    
    return exhbs.handlebars.compile(source, options);
  }
}));

// Tell express where to find our views
app.set('views', path.join(__dirname, '../views'));

// Tell express we are using the Handlebars view engine
app.set('view engine', 'hbs');

// Set the default layout for our pages
app.set('view options', {layout:'layouts/layout'});

registerPartials(hbs,path.join(__dirname,'../views/partials'));

require('./helpers/helpers')(hbs);

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

setupRoutes(app, path.join(__dirname,'../routes'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
