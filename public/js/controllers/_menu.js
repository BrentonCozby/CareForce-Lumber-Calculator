import g from './_globals'

export function init() {
    g.$menuButton.click(show)
    g.$menuClose.click(close)
    g.$menuItems.click(function() {
        switchPage.call(this)
    })
}

function show() {
    g.$overlay.fadeIn(200)
    g.$menuItemsDiv.addClass('open')
}

function close() {
    g.$overlay.fadeOut(200)
    g.$menuItemsDiv.removeClass('open')
}

function switchPage() {
    g.$overlay.fadeOut(200)
    g.$menuItemsDiv.removeClass('open')
    var li = this
    g.$wrapper.fadeOut(function() {
        $('#radio-' + li.dataset.page)[0].checked = true
        g.$wrapper.fadeIn()
    })
}
