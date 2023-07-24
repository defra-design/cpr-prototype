const express = require('express');
const router = express.Router();

// Routing for Page
router.post('*/contact-address-question', function (req, res) {
    var addressOther = req.session.data['address-type'];
    
    if (addressOther === "other") {
        res.redirect('./postcode-lookup');
    } else {
        res.redirect('./contact-telephone');
    }
});

router.post('*/contact-person-question', function (req, res) {
    var contactOther = req.session.data['contact-name'];

    if (contactOther === "other") {
        res.redirect('./contact-full-name');
    } else {
        req.session.data['contact-full-name'] = contactOther;
        res.redirect('./contact-preference?other-contact=no');
    }
});

router.post('*/partners-option-question', function (req, res) {
    var partnerOption = req.session.data['enter-partners'];

    if (partnerOption === "directly") {
        res.redirect('./partners-add-person');
    } else {
        res.redirect('./partners-upload-file');
    }
});

module.exports = router;