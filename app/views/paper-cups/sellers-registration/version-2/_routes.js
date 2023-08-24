const express = require('express');
const router = express.Router();

// Routing for Page
router.post('*/contact-address-question', function (req, res) {
    var addressOther = req.session.data['address-type'];
    
    if (addressOther === "other") {
        res.redirect('./address-lookup/postcode');
    } else {
        req.session.data['cups-registration-main-address'] = "9 Grange Road\nCambridge\nEngland\nCB2 0AA";
        res.redirect('./contact-person');
    }
});

router.post('*/contact-person-question', function (req, res) {
    var contactOther = req.session.data['contact-name'];

    if (contactOther === "Someone else") {
        res.redirect('./contact-full-name');
    } else {
        req.session.data['contact-full-name'] = contactOther;
        res.redirect('./contact-telephone?other-contact=no');
    }
});

// From old design

// router.post('*/partners-option-question', function (req, res) {
//     var partnerOption = req.session.data['enter-partners'];

//     if (partnerOption === "directly") {
//         res.redirect('./partners-add-person');
//     } else {
//         res.redirect('./partners-upload-file');
//     }
// });

router.post('*/premises-option-question', function (req, res) {
    var premiseOption = req.session.data['enter-premises'];

    if (premiseOption === "directly") {
        res.redirect('./premises-add-address/postcode');
    } else {
        res.redirect('./premises-upload-file');
    }
});

router.post('*/select-address-question', function (req, res) {
    var option = req.session.data['address-lookup-selection'];

    if (option === "option-1") {
        req.session.data['cups-registration-main-address'] = `${req.session.data['address-lookup-building-number']} Willow Road\nLeeds\nEngland\n${req.session.data['address-lookup-postcode']}`;
    } else {
        req.session.data['cups-registration-main-address'] = `${req.session.data['address-lookup-building-number']}a Willow Road\nLeeds\nEngland\n${req.session.data['address-lookup-postcode']}`;
    }

    res.redirect('../contact-person');
});

router.post('*/address-manual-question', function (req, res) {
    req.session.data['cups-registration-main-address'] =
        `${req.session.data['manual-address-line-1']}\n${req.session.data['manual-address-line-2']}\n${req.session.data['manual-address-town']}\n${req.session.data['manual-address-county']}\n${req.session.data['manual-address-country']}\n${req.session.data['manual-address-postcode']}`;

    res.redirect('../contact-person');
});

router.post('*/payment-made-question', function (req, res) {
    if (req.session.data['payment-made-england'] === "yes") {
        res.redirect('./payment-confirmation-england');
    } else {
        res.redirect('../../registration-task-list');
    }
});

router.post('*/payment-made-question-wales', function (req, res) {
    if (req.session.data['payment-made-wales'] === "yes") {
        res.redirect('./payment-confirmation-wales');
    } else {
        res.redirect('../../registration-task-list');
    }
});

router.post('*/check-premises-question', function (req, res) {
    var checkPremises = req.session.data['add-premises-file'];

    if (checkPremises === "change-file") {
        res.redirect('./premises-upload-file');
    } else {
        res.redirect('./premises-check-your-answers');
    }
});

module.exports = router;