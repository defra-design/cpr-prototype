const express = require('express')
const router = express.Router()
// Add your routes here - above the module.exports line


// Routing for self-declare-2-status.html
router.get('self-declare-2-status', function (req, res) {
    res.render('self-declare-2-status', {});
})

router.post('self-declare-3-warning', function (req, res) {
    var sizeorganisation = req.body.sizeorganisation;
    req.session.data = req.session.data || {};
    req.session.data['sizeorganisation'] = sizeorganisation;

    if (sizeorganisation === "largeproducer" || sizeorganisation === "smallproducer") {
        // Block of code to be executed if the condition is true
        res.redirect('self-declare-3-warning');
    } else {
        // Block of code to be executed if the condition is false
        res.redirect('self-declare-4-obligation-checker');
    }
})

module.exports = router
