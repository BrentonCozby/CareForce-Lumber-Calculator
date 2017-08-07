import http from 'http'
import url from 'url'
import rp from 'request-promise'
import cheerio from 'cheerio'
import { SITE_URL } from './config.js'

// export function scrapePrice(url) {
//     if(!url) return false
//
//     const options = {
//         url,
//         transform: function(body) {
//             return cheerio.load(body);
//         }
//     }
//
//     return new Promise((resolve, reject) => {
//         rp(options).then(($) => {
//             const price = $('#ajaxPrice').attr('content') || null
//             resolve(price)
//         }).catch((err) => {
//             resolve(null)
//             console.log(err);
//         });
//     })
// }

export async function scrapePrice(homeDepotUrl, clientIp) {
    if(!homeDepotUrl || !clientIp) return false

    homeDepotUrl = url.parse(homeDepotUrl)

    const options = {
        hostname: homeDepotUrl.hostname,
        path: homeDepotUrl.path,
        method: 'GET',
        headers: {
            'Fowarded': `for="[${clientIp}]"`
        }
    }

    const html = new Promise((resolve, reject) => {
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
            console.error('Request error: ', err.message);
        })

        req.end()
    })

    const $ = await html
    const price = $('#ajaxPrice').attr('content') || null

    return price
}
