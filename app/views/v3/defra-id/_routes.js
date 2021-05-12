const express = require('express')
const router = express.Router()
// Add your routes here - above the module.exports line




// Routing for organisation-type.html
router.post('*/organisation-type-choice', function (req, res) {
    var defraIdType = req.session.data['defraIdType']
    if (defraIdType == "individual"){
        res.redirect('individual')
    }
    else {
        res.redirect('organisation-UK-or-else')
    }
})


// Routing for organisation-UK-or-else.html
router.post('*/organisation-uk-choice', function (req, res) {
    var defraIdUk = req.session.data['defraIdUk']
    if (defraIdUk == "non-uk"){
        res.redirect('non-uk')
    }
    else {
        res.redirect('company-registered-question')
    }
})


// Routing for company-registered-question.html
router.post('*/companieshouse-choice', function (req, res) {
    var defraIdCompaniesHouse = req.session.data['defraIdCompaniesHouse']
    if (defraIdCompaniesHouse == "no"){
        res.redirect('')
    }
    else {
        res.redirect('company-lookup')
    }
})




// Get the data values from session-data-defaults.js to use on any pages that use {{ defaults['VARIABLE_NAME'] }}
router.get('*/check-email', function (request, response) {
    response.locals.defaults = require('../../../data/session-data-defaults.js')
    response.render('v3/defra-id/check-email')
})

router.get('*/company-confirm', function (request, response) {
    response.locals.defaults = require('../../../data/session-data-defaults.js')
    response.render('v3/defra-id/company-confirm')
})

router.get('*/personal-contact', function (request, response) {
    response.locals.defaults = require('../../../data/session-data-defaults.js')
    response.render('v3/defra-id/personal-contact')
})

router.get('*/confirmation', function (request, response) {
    response.locals.defaults = require('../../../data/session-data-defaults.js')
    response.render('v3/defra-id/confirmation')
})

router.get('*/check-your-answers', function (request, response) {
    response.locals.defaults = require('../../../data/session-data-defaults.js')
    response.render('v3/defra-id/check-your-answers')
})





module.exports = router