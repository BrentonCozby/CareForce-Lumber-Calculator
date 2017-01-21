var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/projects/CareForce-Lumber-Calculator', function(req, res, next) {
    res.render('index', {
        title: 'Care Force Lumber Calculator',
        description: 'Optimizes lumber orders and provides cut lists for various City Year Care Force schematics.'
    });
});

module.exports = router;
