const express = require('express')
const router = express.Router()
// Add your routes here - above the module.exports line

// Routing for self-declare-2-status.html
router.get('self-declare-2-status', function (req, res) {
    res.render('self-declare-2-status', {})
})

router.post('self-declare-2-status', function (req, res) {
    // Retrieve the value of sizeorganisation from session data
    var sizeorganisation = req.session.data['sizeorganisation']

    // Check the value and redirect accordingly
    if (sizeorganisation === 'largeproducer' || sizeorganisation === 'smallproducer') {
        res.redirect('self-declare-3-warning')
    } else {
        res.post('self-declare-4-obligation-checker')
    }
})


module.exports = router
