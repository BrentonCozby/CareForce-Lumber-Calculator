import express from 'express'
const router = express.Router()
const { ROOT_PATH } = require('../config.js')
import { scrapePrice } from '../scraper.js'

/* GET home page. */
router.get('/', async function(req, res) {
    res.render('index', {
        title: 'Care Force Lumber Calculator',
        description: 'Optimizes lumber orders and provides cut lists for various City Year Care Force schematics.',
        ROOT_PATH
    })
})

router.get('/lumber', async (req, res) => {
    // const price = await scrapePrice(decodeURI(req.query.url))
    // res.send(price)
    const price = await scrapePrice(decodeURI(req.query.url), req.ip)
    res.send({ price, clientIp: req.ip })
})

module.exports = router
