(function _form() {
    const g = require('./_globals')
    const schematics = require('../models/_schematics')
    const optimize = require('./_optimize')
    const table = require('./_table')
    const cutList = require('./_cutList')

    var select = {
        init: function() {
            var optionsList = ''
            for(let group in schematics.list) {
                if(schematics.list.hasOwnProperty(group)) {
                    optionsList += `<optgroup label="${group}">`
                    for(let schem in schematics.list[group]) {
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
            var selected = g.$select.val()
            for(let group in schematics.list) {
                if(schematics.list.hasOwnProperty(group)) {
                    for(let schem in schematics.list[group]) {
                        if(schematics.list[group].hasOwnProperty(schem) && selected == schem) {
                            prevImage.update(schematics.list[group][schem])
                            return false
                        }
                    }
                }
            }
        }
    }

    var prevImage = {
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
        }
    }

    var calcButton = {
        init: function() {
            g.$calcButton.on('click', calcButton.onClick)
            return false
        },
        onClick: function(e) {
            e.preventDefault()
            if(calcButton.validateForm()) return false
            g.$results.slideUp(function() {
                var lumberOrder = optimize.calcLumberOrder(g.$select.val(), g.$quant.val())
                var fullOrder = optimize.calcFullOrder(Array.from(lumberOrder))
                g.$tableDiv.html('')
                g.$cutListDiv.html('')
                table.render(fullOrder)
                cutList.render(lumberOrder)
                g.$results.slideDown()
            })
            return false
        },
        validateForm: function() {
            var $selectVal = $('#selectSchematic').val()
            var $quantVal = $('#inputQuantity').val()
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
        }
    }



    module.exports.select = select
    module.exports.prevImage = prevImage
    module.exports.calcButton = calcButton
    module.exports.init = function () {
        select.init()
        prevImage.init()
        calcButton.init()
    }

    return false
})()
