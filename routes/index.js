import express from 'express'
const router = express.Router()
import { scrapePrice } from '../scraper.js'
import { Dir } from '../config.js'
import { resolve } from 'path'

router.get('/lumber', async (req, res) => {
    // const price = await scrapePrice(decodeURI(req.query.url))
    // res.send(price)
    const clientIp = getClientAddress(req)
    const price = await scrapePrice(decodeURI(req.query.url), clientIp)
    res.send({ price, clientIp, serverIp: '107.170.51.204' })
})

router.get('*', async function(req, res) {
    res.sendFile(resolve(Dir.dist, 'index.html'))
})

const getClientAddress = function (req) {
    return (req.headers['forwarded'] || req.headers['x-forwarded-for'] || '').split(',')[0] || req.connection.remoteAddress
}

module.exports = router
