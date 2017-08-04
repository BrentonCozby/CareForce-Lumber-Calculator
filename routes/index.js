import express from 'express'
const router = express.Router()
import { PUBLIC_PATH } from '../config.js'
import { scrapePrice } from '../scraper.js'
import { lumber } from '../lumber.js'

/* GET home page. */
router.get('/', async function(req, res) {
    res.render('index', {
        title: 'Care Force Lumber Calculator',
        description: 'Optimizes lumber orders and provides cut lists for various City Year Care Force schematics.',
        PUBLIC_PATH
    })
})

router.get('/lumber', async (req, res) => {
    const price = await scrapePrice(decodeURI(req.query.url))
    res.send(price)
})

module.exports = router
