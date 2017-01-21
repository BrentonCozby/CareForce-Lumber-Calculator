(function main(mainFunction) {

    mainFunction(window.jQuery, window, document);

}(function mainFunction($, window, document) {
    "use strict";

    const g = require('./controllers/_globals');
    const lumber = require('./models/_lumber');
    const schematics = require('./models/_schematics');
    const decimalRound = require('./controllers/_decimalRound');
    const optimize = require('./controllers/_optimize');
    const form = require('./controllers/_form');
    const menu = require('./controllers/_menu');

    var setup = {
        init: function() {
            form.init();
            menu.init();
            setup.overlay.init();
            return false;
        },
        overlay: {
            init: function() {
                g.$overlay.click(function() {
                    $(this).fadeOut(200);
                    g.$prevImage.removeClass('lightbox');
                    g.$menuItemsDiv.removeClass('open');
                });
            }
        }
    };

    $(document).ready(setup.init);

    return false;
}));
