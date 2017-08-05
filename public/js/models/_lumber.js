function LumberMaker(name, thickness, width, length, price, url) {
    return {
        "name": name,
        "thick": thickness,
        "wide": width,
        "long": length,
        "url": url,
        "price": price
    }
}

const lumber = [
    {
        "name": `2" x 4" x 8'`,
        "thick": 2,
        "wide": 4,
        "long": 96,
        "price": 3.27,
        "url": `http://www.homedepot.com/p/2-in-x-4-in-x-8-ft-2-Ground-Contact-Pressure-Treated-Lumber-106147/206970948`
    },
    LumberMaker(`2" x 4" x 10'`, 2, 4, 120, 5.47, `http://www.homedepot.com/p/WeatherShield-2-in-x-4-in-x-10-ft-2-Prime-Ground-Contact-Pressure-Treated-Lumber-253920/206967803`),
    LumberMaker(`2" x 4" x 12'`, 2, 4, 144, 6.87, `http://www.homedepot.com/p/WeatherShield-2-in-x-4-in-x-12-ft-2-Prime-Ground-Contact-Pressure-Treated-Lumber-253920/206967813`),
    LumberMaker(`2" x 6" x 8'`, 2, 6, 96, 6.57, `http://www.homedepot.com/p/WeatherShield-2-in-x-6-in-x-8-ft-2-Prime-Ground-Contact-Pressure-Treated-Lumber-253921/206967808`),
    LumberMaker(`2" x 6" x 10'`, 2, 6, 120, 7.97, `http://www.homedepot.com/p/WeatherShield-2-in-x-6-in-x-10-ft-2-Prime-Ground-Contact-Pressure-Treated-Lumber-253921/206967800`),
    LumberMaker(`2" x 6" x 12'`, 2, 6, 144, 9.37, `http://www.homedepot.com/p/WeatherShield-2-in-x-6-in-x-12-ft-2-Prime-Ground-Contact-Pressure-Treated-Lumber-253921/206967802`),
    LumberMaker(`2" x 8" x 8'`, 2, 8, 96, 8.57, `http://www.homedepot.com/p/2-in-x-8-in-x-8-ft-2-Prime-Ground-Contact-Pressure-Treated-Lumber-107523/206937455`),
    LumberMaker(`2" x 8" x 10'`, 2, 8, 120, 10.27, `http://www.homedepot.com/p/2-in-x-8-in-x-10-ft-2-Prime-Ground-Contact-Pressure-Treated-Lumber-107523/206937440`),
    LumberMaker(`2" x 8" x 12'`, 2, 8, 144, 12.57, `http://www.homedepot.com/p/2-in-x-8-in-x-12-ft-2-Prime-Ground-Contact-Pressure-Treated-Lumber-107523/206937453`),
    LumberMaker(`2" x 12" x 8'`, 2, 12, 96, 17.27, `http://www.homedepot.com/p/2-in-x-12-in-x-8-ft-2-Prime-or-Better-Ground-Contact-Pressure-Treated-Lumber-112851/206964340`),
    LumberMaker(`2" x 12" x 10'`, 2, 12, 120, 20.57, `http://www.homedepot.com/p/2-in-x-12-in-x-10-ft-2-Prime-or-Better-Ground-Contact-Pressure-Treated-Lumber-112851/206964329`),
    LumberMaker(`2" x 12" x 12'`, 2, 12, 144, 24.57, `http://www.homedepot.com/p/2-in-x-12-in-x-12-ft-2-Prime-or-Better-Ground-Contact-Pressure-Treated-Lumber-112851/206964330`),
    LumberMaker(`4" x 4" x 8'`, 4, 4, 96, 6.97, `http://www.homedepot.com/p/Pressure-Treated-Timber-2-Southern-Yellow-Pine-Common-4-in-x-4-in-x-8-ft-Actual-3-56-in-x-3-56-in-x-96-in-194354/205220341`),
    LumberMaker(`4" x 4" x 10'`, 4, 4, 120, 11.87, `http://www.homedepot.com/p/4-in-x-4-in-x-10-ft-2-Pressure-Treated-Timber-4220254/100025396`),
    LumberMaker(`4" x 4" x 12'`, 4, 4, 144, 13.97, `http://www.homedepot.com/p/4-in-x-4-in-x-12-ft-2-Pressure-Treated-Timber-4230254/100073070`),
    LumberMaker(`&frac12;" x 4' x 8'`, 0.5, 48, 96, 25.57, `http://www.homedepot.com/p/1-2-in-x-4-ft-x-8-ft-CDX-Ground-Contact-Pressure-Treated-Plywood-131876/206970940`),
    LumberMaker(`5&frasl;4" x 6" x 6'`, 1.25, 6, 72, 4.47, `http://www.homedepot.com/p/WeatherShield-5-4-in-x-6-in-x-6-ft-Ground-Contact-Pressure-Treated-Premium-Pine-Decking-Board-253944/206967717`),
    LumberMaker(`5&frasl;4" x 6" x 8'`, 1.25, 6, 96, 4.37, `http://www.homedepot.com/p/WeatherShield-5-4-in-x-6-in-x-8-ft-Standard-Ground-Contact-Pressure-Treated-Pine-Decking-Board-253919/206968441`),
    LumberMaker(`5&frasl;4" x 6" x 10'`, 1.25, 6, 120, 6.97, `http://www.homedepot.com/p/WeatherShield-5-4-in-x-6-in-x-10-ft-Standard-Ground-Contact-Pressure-Treated-Pine-Decking-Board-253919/206968438`),
    LumberMaker(`5&frasl;4" x 6" x 12'`, 1.25, 6, 144, 7.97, `http://www.homedepot.com/p/WeatherShield-5-4-in-x-6-in-x-12-ft-Standard-Ground-Contact-Pressure-Treated-Pine-Decking-Board-253919/206968439`),
    LumberMaker(`&frac12;" x 4' x 8'`, 0.5, 48, 96, 25.57, `http://www.homedepot.com/p/1-2-in-x-4-ft-x-8-ft-CDX-Ground-Contact-Pressure-Treated-Plywood-131876/206970940`),
    LumberMaker(`3&frasl;8" x 4' x 8'`, 0.375, 48, 96, 17.53, `http://www.homedepot.com/p/11-32-in-or-3-8-in-x-4-ft-x-8-ft-BC-Sanded-Pine-Plywood-166022/100094072`),
    LumberMaker(`1&frasl;4" x 4' x 8'`, 0.25, 48, 96, 9.99, `http://www.homedepot.com/p/Utility-Panel-Common-1-8-In-x-4-Ft-x-8-Ft-Actual-0-106-in-x-48-in-x-96-in-833096/100535208`),
    LumberMaker(`1" x 12" x 8'`, 1, 12, 96, 16.98, `http://www.homedepot.com/p/1-in-x-12-in-x-8-ft-Premium-Kiln-Dried-Square-Edge-Whitewood-Common-Board-458538/100055946`),
    LumberMaker(`1" x 3" x 8'`, 1, 3, 96, 2.57, `http://www.homedepot.com/p/WeatherShield-1-in-x-3-in-x-8-ft-Pressure-Treated-Board-481861/100057569`),
    LumberMaker(`1" x 4" x 8'`, 1, 4, 96, 3.97, `http://www.homedepot.com/p/WeatherShield-1-in-x-4-in-x-8-ft-Ground-Contact-Pressure-Treated-Board-253915/206973928`),
    LumberMaker(`1" x 4" x 10'`, 1, 4, 120, 4.97, `http://www.homedepot.com/p/WeatherShield-1-in-x-4-in-x-10-ft-Ground-Contact-Pressure-Treated-Board-253915/206971108?keyword=1x4x10+pressure+treated`),
    LumberMaker(`1" x 4" x 12'`, 1, 4, 144, 5.87, `http://www.homedepot.com/p/WeatherShield-1-in-x-4-in-x-12-ft-Ground-Contact-Pressure-Treated-Board-253915/206973905`)
]

function getLocation() {
    ("geolocation" in navigator) && navigator.geolocation.getCurrentPosition(function(position) {
        console.log(position.coords.latitude, position.coords.longitude)
    });
}

function getOnePrice(url) {
    if(!url) return null

    return new Promise((resolve, reject) => {
        $.getJSON({
            url: '/CareForce-Lumber-Calculator/lumber',
            data: {url: encodeURI(url)}
        })
        .done(async data => {
            resolve(data)
        })
        .fail(err => {
            resolve(null)
        })
    })
}

function getPrices() {
    const oldLumber = (localStorage.lumber)
                ? JSON.parse(localStorage.lumber)
                : lumber

    const newLumber = oldLumber.map((item, i) => {
        return getOnePrice(item.url).then(price => {
            const newItem = {...item}
            newItem.price = price || item.price
            return newItem
        })
    })

    return Promise.all(newLumber)
}

export { getPrices }
export { lumber }
