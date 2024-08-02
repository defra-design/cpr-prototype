const express = require('express')
const router = express.Router()


// Routing for Page
router.post('*/selfdeclare', function (req, res) {
    var sizeorganisation = req.session.data['sizeorganisation'];  
    if (sizeorganisation === "smallproducer") {
        // Handle smallproducer case
        res.redirect('./self-declare-3-warning');
    } else if (sizeorganisation === "largeproducer") {
        // Handle largeproducer case
        res.redirect('./self-declare-3-warning');
    } else {
        var dontknown = req.session.data['dontknow'];
        res.redirect('https://defra-cpr-prototype.herokuapp.com/obligation-checker/v5/start-page');
    }
});

module.exports = router;

