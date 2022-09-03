import g from './controllers/_globals'
import { getPrices } from './models/_lumber'
import form from './controllers/_form'
import menu from './controllers/_menu'


const setup = {
    init: function() {
        getPrices().then(newLumber => {
            localStorage.setItem('lumber', JSON.stringify(newLumber))
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
        },
    },
}

$(document).ready(setup.init)
