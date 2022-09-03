import g from './_globals'
const schematics = require('../models/_schematics')
const optimize = require('./_optimize')
const table = require('./_table')
const cutList = require('./_cutList')

export const select = {
    init: function() {
        let optionsList = ''
        for(const group in schematics.list) {
            if(schematics.list.hasOwnProperty(group)) {
                optionsList += `<optgroup label="${group}">`
                for(const schem in schematics.list[group]) {
                    if(schematics.list[group].hasOwnProperty(schem)) {
                        optionsList += `<option>${schem}</option>`
                    }
                }
                optionsList += '</optgroup>'
            }
        }
        g.$select.append(optionsList)
        g.$select.on('change', select.onChange)
        return false
    },
    onChange: function() {
        const selected = g.$select.val()
        for(const group in schematics.list) {
            if(schematics.list.hasOwnProperty(group)) {
                for(const schem in schematics.list[group]) {
                    if(schematics.list[group].hasOwnProperty(schem) && selected == schem) {
                        prevImage.update(schematics.list[group][schem])
                        return false
                    }
                }
            }
        }
    },
}

export const prevImage = {
    init: function() {
        g.$prevImage.on('click', () => {
            g.$overlay.fadeToggle(200)
            g.$prevImage.toggleClass('lightbox')
            $('#imagePlaceholder').toggle()
        })
    },
    update: function(schematic) {
        g.$prevImage[0].src = schematic.image
        g.$prevImage.addClass('enlargeImage')
        window.setTimeout(function() {
            g.$prevImage.removeClass('enlargeImage')
        }, 500)
    },
}

export const calcButton = {
    init: function() {
        g.$calcButton.on('click', calcButton.onClick)
        return false
    },
    onClick: function(e) {
        e.preventDefault()
        if(calcButton.validateForm()) return false
        g.$results.slideUp(function() {
            const lumberOrder = optimize.calcLumberOrder(g.$select.val(), g.$quant.val())
            const fullOrder = optimize.calcFullOrder(Array.from(lumberOrder))
            g.$tableDiv.html('')
            g.$cutListDiv.html('')
            table.render(fullOrder)
            cutList.render(lumberOrder)
            g.$results.slideDown()
        })
        return false
    },
    validateForm: function() {
        const $selectVal = $('#selectSchematic').val()
        const $quantVal = $('#inputQuantity').val()
        if( !$selectVal || !$quantVal || $quantVal < 1) {
            if(!$selectVal) {
                g.$select.addClass('validate')
                window.setTimeout(function() {
                    g.$select.removeClass('validate')
                }, 500)
            }
            if(!$quantVal || $quantVal < 1) {
                g.$quant.addClass('validate')
                window.setTimeout(function() {
                    g.$quant.removeClass('validate')
                }, 500)
            }
            return true
        }
        return false
    },
}

function init() {
    select.init()
    prevImage.init()
    calcButton.init()
}

export default {
    select,
    prevImage,
    calcButton,
    init,
}
