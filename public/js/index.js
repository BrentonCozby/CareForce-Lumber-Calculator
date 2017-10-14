const g = require('./controllers/_globals')
const { getPrices } = require('./models/_lumber')
const form = require('./controllers/_form')
const menu = require('./controllers/_menu')


var setup = {
    init: function() {
        getPrices().then(newLumber => {
            localStorage.lumber = JSON.stringify(newLumber)
        })
        form.init()
        menu.init()
        setup.overlay.init()
        return false
    },
    overlay: {
        init: function() {
            g.$overlay.click(function() {
                $(this).fadeOut(200)
                g.$prevImage.removeClass('lightbox')
                g.$menuItemsDiv.removeClass('open')
            })
        }
    }
}

$(document).ready(setup.init)
