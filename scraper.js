import rp from 'request-promise'
import cheerio from 'cheerio'

export function scrapePrice(url) {
    if(!url) return false

    const options = {
        url,
        transform: function(body) {
            return cheerio.load(body);
        }
    }

    return new Promise((resolve, reject) => {
        rp(options).then(($) => {
            const price = $('#ajaxPrice').attr('content') || null
            resolve(price)
        }).catch((err) => {
            resolve(null)
            console.log(err);
        });
    })
}
