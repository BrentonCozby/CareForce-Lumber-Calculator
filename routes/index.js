import express from 'express'
const router = express.Router()
const { ROOT_PATH } = require('../config.js')
import { scrapePrice } from '../scraper.js'
var geoip = require('geoip-lite')
var ip = require('ip')

console.log('YOUR IP: ', geoip.lookup(ip.address()));

/* GET home page. */
router.get('/', async function(req, res) {
    res.render('index', {
        title: 'Care Force Lumber Calculator',
        description: 'Optimizes lumber orders and provides cut lists for various City Year Care Force schematics.',
        ROOT_PATH
    })
})

router.get('/lumber', async (req, res) => {
    const price = await scrapePrice(decodeURI(req.query.url))
    res.send(price)
})

module.exports = router
