const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const morgan = require('morgan');
require('dotenv').config()

// Define Routes
const index = require('./routes/index');

const app = express();
const PORT = process.env.PORT || 3000

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Middleware
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));

// Use routes
app.use('/', index);

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

app.listen(PORT, function() {
    console.log(`Listening on port ${PORT}...`);
})
