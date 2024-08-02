const express = require('express')
const router = express.Router()





// Route for handling GET requests to self-declare-2-status page
router.get('self-declare-2-status', function (req, res) {
        res.render('self-declare-2-status', { noSessionData: true })
})


// Route for handling form submission from self-declare-2-status page
router.post('self-declare-2-status', function (req, res) {
    // Ensure session data is available
    if (req.session && req.session.data) {
        var sizeorganisation = req.session.data['sizeorganisation']

        // Check the value and redirect accordingly
        if (sizeorganisation === 'largeproducer' || sizeorganisation === 'smallproducer') {
            res.redirect('self-declare-3-warning')
        } else if (sizeorganisation === 'dontknow') {
            res.redirect('https://defra-cpr-prototype.herokuapp.com/obligation-checker/v5/start-page')
        } else {
            // Handle other cases if necessary
            res.redirect('https://defra-cpr-prototype.herokuapp.com/obligation-checker/v5/start-page')
        }
    } else {
        // Handle the case where session data is not available
        res.redirect('https://defra-cpr-prototype.herokuapp.com/obligation-checker/v5/start-page')
    }
})







module.exports = router
