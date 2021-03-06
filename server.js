/* eslint-disable no-console */

const express = require('express')
require('dotenv').config()
const config = require('./config.js')

// Define Routes
const index = require('./routes/index')

const app = express()
const PORT = process.env.PORT || 3000

// Middleware
app.use(express.static(config.Dir.dist))

// Use routes
app.use('/', index)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found')
    err.status = 404
    next(err)
})

// error handler
app.use(function(err, req, res) {
    // set locals, only providing error in development
    res.locals.message = err.message
    res.locals.error = req.app.get('env') === 'development' ? err : {}

    // render the error page
    res.status(err.status || 500)
    res.render('error')
})

app.listen(PORT, function() {
    console.log(`Listening on port ${PORT}...`)
})
