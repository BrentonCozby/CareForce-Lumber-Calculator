/* eslint-disable no-console */

require('dotenv').config()

import express from 'express'
import * as config from './config'

import router from './routes'

const app = express()
const PORT = process.env.PORT || 3000

// Middleware
app.use(express.static(config.Dir.dist))

// Use routes
app.use(router)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    const err = new Error('Not Found')
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
