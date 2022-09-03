/* eslint-disable no-console */

import http from 'http'
import url from 'url'
import cheerio from 'cheerio'

export async function scrapePrice(homeDepotUrl, clientIp) {
    if(!homeDepotUrl || !clientIp) return false

    homeDepotUrl = url.parse(homeDepotUrl)

    const options = {
        hostname: homeDepotUrl.hostname,
        path: homeDepotUrl.path,
        method: 'GET',
        headers: {
            'Fowarded': `for="[${clientIp}]"`,
        },
    }

    const html = new Promise((resolve) => {
        let body = ''

        const req = http.request(options, res => {
            res.setEncoding('utf8')
            res.on('data', chunk => {
                body += chunk
            })
            res.on('end', () => {
                resolve(cheerio.load(body))
            })
        })

        req.on('error', err => {
            console.error('Request error: ', err.message)
        })

        req.end()
    })

    const $ = await html
    const price = $('#ajaxPrice').attr('content') || null

    return price
}
