const express = require('express')
const router = express.Router()

// Routing for Page
router.post('*/registered-trade-in-uk', function (req, res) {
    var registeredUK = req.session.data['registered-in-uk']
    
    if (registeredUK == "yes"){
        res.redirect('type-of-organisation')
    }
    else if (registeredUK == "no"){
        res.redirect('../not-affected/non-uk-organisation')
    }
})

// Routing for Page
router.post('*/organisation-type', function (req, res) {
    var organisationType = req.session.data['form-organisation-type']
    
    if (organisationType == "Limited Company"){
        res.redirect('../limited-company/about-your-organisation/companies-house-number')
    }
    else if (organisationType == "Sole trader"){
        res.redirect('../sole-trader/about-your-business/trading-name')
    }
    else if (organisationType == "Charity"){
        res.redirect('../not-affected/charity')
    }
})

// Routing for Page
router.post('*/authorised-person', function (req, res) {
    var authorisedPerson = req.session.data['form-role-in-organisation']
    
    if (authorisedPerson == "none-of-the-above") {
        res.redirect('../authorised-details-on-behalf/consent-from-authorised-person')
    }
    else {
        res.redirect('full-name')
    }
})

// Routing for end to end testing
router.post('*/complete-account-creation', function (req, res) {
    var userGroup = req.session.data['user-group']
    
    if (userGroup == "compliance-scheme") {
        res.redirect('../../../../landing-page/cs-submit-behalf-lp-england')
    }
    else if (userGroup == "producer") {
        res.redirect('../../../../landing-page/large-producer')
    }
    else {
        res.redirect('../../../../landing-page/large-producer')
    }
})




module.exports = router