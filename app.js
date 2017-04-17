var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');

var routes = require('./routes/');

var app = express();

// This 'if' statement prevents application log messages from
// displaying in the stdout when the tests are run
if (process.env.NODE_ENV !== 'test') {
  app.use(logger('dev'));
}
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// allows you to maintain v1 add another app.use to let clients get v2+
app.use('/api/v1/', routes)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// only sends error stack when in test or dev
if(app.get('env') === 'development' || app.get('env') === 'test') {
  app.use((err, req, res, next) => {
    console.log('error!', err)
    res.status(err.status || 500)
    res.json({
      message: err.message,
      error: err
    })
  })
}

// sends error message but not whole stack
app.use((err, req, res, next) => {
  console.log('error!', err)
  res.status(err.status || 500)
  res.json({
    message: err.message,
    error: {}
  })
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port} in this super keen env: ${process.env.NODE_ENV}`);
});

// export app so we can pull in this instance of express into test suite
module.exports = app;
