const express = require('express');
const router = express.Router();

// Routing for Page
router.post('*/contact-address-question', function (req, res) {
    var addressOther = req.session.data['address-type'];
    
    if (addressOther === "other") {
        res.redirect('../postcode-lookup');
    } else {
        res.redirect('./contact-telephone');
    }
});

module.exports = router;