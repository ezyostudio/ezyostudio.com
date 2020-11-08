var express = require('express');
var compression = require('compression');
var path = require('path');
var fs = require('fs');
// var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

app.use(compression({ filter: (req, res) => {
  if (req.headers['x-no-compression']) {
    // don't compress responses with this request header
    return false
  }

  // fallback to standard filter function
  return compression.filter(req, res)
} }))

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/compiled', express.static(path.join(__dirname, 'dist')));


app.get('/(:page)?', function(req, res, next) {
  let page = req.params.page;
  if (!page) {
    page = 'index';
  }
  if(!fs.existsSync(path.join(app.get('views'), page+'.ejs'))){
    next();
  }else{
    res.render(page, {page:page, env:'dev'});
  }

});

app.use(function(req, res, next) {
  res.render('404');
});

module.exports = app;
