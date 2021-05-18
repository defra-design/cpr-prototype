const express = require('express')
const router = express.Router()
// Add your routes here - above the module.exports line





// Routing for registration-choice.html
router.post('*/registration-choice-choice', function (req, res) {
    var regChoice = req.session.data['regChoice']
    if (regChoice == "yes"){
        res.redirect('home?obligated=yes&registered=no&paid=no')
    }
    if (regChoice == "no"){
        res.redirect('registration-choice-no')
    }
    else {
        res.redirect('registration-choice-guidance')
    }
})




// Routing for service-start-defra.html
router.post('*/route-check-defra', function (req, res) {
    var daChoice = req.session.data['daChoice']
    if (daChoice == "yes"){
        res.redirect('/v3/defra-id/login')
    }
    else {
        res.redirect('service-start-defra-check')
    }
})




// Routing for service-start-defra-check.html
router.post('*/route-check-defra-company', function (req, res) {
    var defraCheckCompanyNumber = req.session.data['defraCheckCompanyNumber']
    if (defraCheckCompanyNumber == "(001234) Burns Industries"){
        res.redirect('service-start-defra-check-yes')
    }
    else {
        res.redirect('service-start-gg')
    }
})




// Routing for service-start-gg.html
router.post('*/route-check-gg', function (req, res) {
    var ggChoice = req.session.data['ggChoice']
    if (ggChoice == "yes"){
        res.redirect('service-start-defra-create')
    }
    else {
        res.redirect('service-start-gg-create')
    }
})





// Routing for registration-check-org-correspondence.html
router.post('*/route-check-org-correspondence', function (req, res) {
    var correspondenceChoice = req.session.data['correspondenceChoice']
    if (correspondenceChoice == "yes"){
        res.redirect('registration-org-correspondence-address')
    }
    else {
        res.redirect('registration-subsidiaries')
    }
})





// Routing for registration-subsidiaries.html
router.post('*/route-subsidiaries-choice', function (req, res) {
    var subChoice = req.session.data['subChoice']
    if (subChoice == "yes"){
        res.redirect('registration-subsidiaries-add-companies-house-search?subNumber=1')
    }
    else {
        res.redirect('registration-org-turnover')
    }
})


// Routing for registration-subsidiaries-add-companies-house.html
router.post('*/route-subsidiaries-companies-house', function (req, res) {
    var subChoice = req.session.data['subChoice']
    if (subChoice == "no"){
        res.redirect('registration-subsidiaries-add-name')
    }
    else {
        res.redirect('registration-subsidiaries-add-companies-house-lookup')
    }
})


// Routing for registration-subsidiaries-add-check.html
router.post('*/route-subsidiaries-add-check', function (req, res) {
    var subChoice = req.session.data['subChoice']
    if (subChoice == "no"){
        res.redirect('registration-subsidiaries-add-companies-house-search?subNumber=2')
    }
    else {
        res.redirect('registration-org-turnover')
    }
})



// Routing for registration-subsidiaries-add-remove.html
router.post('*/route-subsidiaries-add-remove-1', function (req, res) {
    var subRemoveChoice = req.session.data['subRemoveChoice']
    var subNumber = req.session.data['subNumber']
    if (subRemoveChoice == "no"){
        res.redirect('registration-subsidiaries-add')
    }
    else {
        res.redirect('registration-subsidiaries-add?sub1=null')
    }
})

router.post('*/route-subsidiaries-add-remove-2', function (req, res) {
    var subRemoveChoice = req.session.data['subRemoveChoice']
    var subNumber = req.session.data['subNumber']
    if (subRemoveChoice == "no"){
        res.redirect('registration-subsidiaries-add')
    }
    else {
        res.redirect('registration-subsidiaries-add?sub2=null')
    }
})





// Routing for payment-information.html
router.post('*/route-payment', function (req, res) {
    var paymentChoice = req.session.data['paymentChoice']
    if (paymentChoice == "no"){
        res.redirect('payment-incomplete')
    }
    else {
        res.redirect('payment-complete?paid=yes')
    }
})


// Routing for report-method.html
router.post('*/route-report-method', function (req, res) {
    var reportMethodChoice = req.session.data['reportMethodChoice']
    if (reportMethodChoice == "spreadsheet"){
        res.redirect('report-spreadsheet')
    }
    else {
        res.redirect('report-brandowner-start')
    }
})



// Routing for the POM data reporting pages depending on what type(s) of producer have been selected.
router.post('*/route-reporting', function (req, res) {
    var producerType1 = req.session.data['producerType1']
    var producerType2 = req.session.data['producerType2']
    var producerType3 = req.session.data['producerType3']
    var producerType4 = req.session.data['producerType4']
    var producerType5 = req.session.data['producerType5']
    var producerTypeSeller = req.session.data['producerTypeSeller']
    if (producerType1 == "yes"){
        res.redirect('report-brandowner-start')
    }
    else if (producerType2 == "yes"){
        res.redirect('report-importer-start')
    }
    else if (producerType3 == "yes"){
        res.redirect('report-distributor-start')
    }
    else if (producerType4 == "yes"){
        res.redirect('report-onlinemarketplace-start')
    }
    else if (producerType5 == "yes"){
        res.redirect('report-serviceprovider-start')
    }
    else if (producerTypeSeller == "yes"){
        res.redirect('report-seller-start')
    }
    else {
        res.redirect('report-check-details')
    }
})



router.post('*/route-reporting-brandowner', function (req, res) {
    var producerType2 = req.session.data['producerType2']
    var producerType3 = req.session.data['producerType3']
    var producerType4 = req.session.data['producerType4']
    var producerType5 = req.session.data['producerType5']
    var producerTypeSeller = req.session.data['producerTypeSeller']
    if (producerType2 == "yes"){
        res.redirect('report-importer-start')
    }
    else if (producerType3 == "yes"){
        res.redirect('report-distributor-start')
    }
    else if (producerType4 == "yes"){
        res.redirect('report-onlinemarketplace-start')
    }
    else if (producerType5 == "yes"){
        res.redirect('report-serviceprovider-start')
    }
    else if (producerTypeSeller == "yes"){
        res.redirect('report-seller-start')
    }
    else {
        res.redirect('report-check-details')
    }
})



router.post('*/route-reporting-importer', function (req, res) {
    var producerType3 = req.session.data['producerType3']
    var producerType4 = req.session.data['producerType4']
    var producerType5 = req.session.data['producerType5']
    var producerTypeSeller = req.session.data['producerTypeSeller']
    if (producerType3 == "yes"){
        res.redirect('report-distributor-start')
    }
    else if (producerType4 == "yes"){
        res.redirect('report-onlinemarketplace-start')
    }
    else if (producerType5 == "yes"){
        res.redirect('report-serviceprovider-start')
    }
    else if (producerTypeSeller == "yes"){
        res.redirect('report-seller-start')
    }
    else {
        res.redirect('report-check-details')
    }
})



router.post('*/route-reporting-distributor', function (req, res) {
    var producerType4 = req.session.data['producerType4']
    var producerType5 = req.session.data['producerType5']
    var producerTypeSeller = req.session.data['producerTypeSeller']
    if (producerType4 == "yes"){
        res.redirect('report-onlinemarketplace-start')
    }
    else if (producerType5 == "yes"){
        res.redirect('report-serviceprovider-start')
    }
    else if (producerTypeSeller == "yes"){
        res.redirect('report-seller-start')
    }
    else {
        res.redirect('report-check-details')
    }
})



router.post('*/route-reporting-onlinemarketplace', function (req, res) {
    var producerType5 = req.session.data['producerType5']
    var producerTypeSeller = req.session.data['producerTypeSeller']
    if (producerType5 == "yes"){
        res.redirect('report-serviceprovider-start')
    }
    else if (producerTypeSeller == "yes"){
        res.redirect('report-seller-start')
    }
    else {
        res.redirect('report-check-details')
    }
})



router.post('*/route-reporting-serviceprovider', function (req, res) {
    var producerTypeSeller = req.session.data['producerTypeSeller']
    if (producerTypeSeller == "yes"){
        res.redirect('report-seller-start')
    }
    else {
        res.redirect('report-check-details')
    }
})


// Routing for the POM data reporting pages. Only the pages that correspond to the user's selections in the 'orgActivity' variable (/epr/registration-org-type.html) will be shown.
// router.post('*/route-reporting', function (req, res) {
//     var orgActivity = req.session.data['orgActivity']
//     if (orgActivity.includes('brandowner')){
//         res.redirect('report-brandowner-start')
//     }
//     else if (orgActivity.includes('importer')){
//         res.redirect('report-importer-start')
//     }
//     else if (orgActivity.includes('distributor')){
//         res.redirect('report-distributor-start')
//     }
//     else if (orgActivity.includes('onlinemarketplace')){
//         res.redirect('report-onlinemarketplace-start')
//     }
//     else if (orgActivity.includes('serviceprovider')){
//         res.redirect('report-serviceprovider-start')
//     }
//     else if (orgActivity.includes('seller')){
//         res.redirect('report-seller-start')
//     }
//     else {
//         res.redirect('report-check-details')
//     }
// })

// router.post('*/route-reporting-brandowner', function (req, res) {
//     var orgActivity = req.session.data['orgActivity']
//     if (orgActivity.includes('importer')){
//         res.redirect('report-importer-start')
//     }
//     else if (orgActivity.includes('distributor')){
//         res.redirect('report-distributor-start')
//     }
//     else if (orgActivity.includes('onlinemarketplace')){
//         res.redirect('report-onlinemarketplace-start')
//     }
//     else if (orgActivity.includes('serviceprovider')){
//         res.redirect('report-serviceprovider-start')
//     }
//     else if (orgActivity.includes('seller')){
//         res.redirect('report-seller-start')
//     }
//     else {
//         res.redirect('report-check-details')
//     }
// })

// router.post('*/route-reporting-importer', function (req, res) {
//     var orgActivity = req.session.data['orgActivity']
//     if (orgActivity.includes('distributor')){
//         res.redirect('report-distributor-start')
//     }
//     else if (orgActivity.includes('onlinemarketplace')){
//         res.redirect('report-onlinemarketplace-start')
//     }
//     else if (orgActivity.includes('serviceprovider')){
//         res.redirect('report-serviceprovider-start')
//     }
//     else if (orgActivity.includes('seller')){
//         res.redirect('report-seller-start')
//     }
//     else {
//         res.redirect('report-check-details')
//     }
// })

// router.post('*/route-reporting-distributor', function (req, res) {
//     var orgActivity = req.session.data['orgActivity']
//     if (orgActivity.includes('onlinemarketplace')){
//         res.redirect('report-onlinemarketplace-start')
//     }
//     else if (orgActivity.includes('serviceprovider')){
//         res.redirect('report-serviceprovider-start')
//     }
//     else if (orgActivity.includes('seller')){
//         res.redirect('report-seller-start')
//     }
//     else {
//         res.redirect('report-check-details')
//     }
// })

// router.post('*/route-reporting-onlinemarketplace', function (req, res) {
//     var orgActivity = req.session.data['orgActivity']
//     if (orgActivity.includes('serviceprovider')){
//         res.redirect('report-serviceprovider-start')
//     }
//     else if (orgActivity.includes('seller')){
//         res.redirect('report-seller-start')
//     }
//     else {
//         res.redirect('report-check-details')
//     }
// })

// router.post('*/route-reporting-serviceprovider', function (req, res) {
//     var orgActivity = req.session.data['orgActivity']
//     if (orgActivity.includes('seller')){
//         res.redirect('report-seller-start')
//     }
//     else {
//         res.redirect('report-check-details')
//     }
// })
// end of POM data reporting pages




// Get the data values from session-data-defaults.js to use on any pages that use {{ defaults['VARIABLE_NAME'] }}
router.get('*/service-start-defra-check-requested', function (request, response) {
    response.locals.defaults = require('../../../data/session-data-defaults.js')
    response.render('v3/epr/service-start-defra-check-requested')
})

router.get('*/authorised', function (request, response) {
    response.locals.defaults = require('../../../data/session-data-defaults.js')
    response.render('v3/epr/authorised')
})

router.get('*/pending', function (request, response) {
    response.locals.defaults = require('../../../data/session-data-defaults.js')
    response.render('v3/epr/pending')
})

router.get('*/registration-check-contact', function (request, response) {
    response.locals.defaults = require('../../../data/session-data-defaults.js')
    response.render('v3/epr/registration-check-contact')
})

router.get('*/registration-check-details', function (request, response) {
    response.locals.defaults = require('../../../data/session-data-defaults.js')
    response.render('v3/epr/registration-check-details')
})

router.get('*/registration-check-org', function (request, response) {
    response.locals.defaults = require('../../../data/session-data-defaults.js')
    response.render('v3/epr/registration-check-org')
})

router.get('*/registration-check-org-correspondence', function (request, response) {
    response.locals.defaults = require('../../../data/session-data-defaults.js')
    response.render('v3/epr/registration-check-org-correspondence')
})

router.get('*/registration-subsidiaries-add-companies-house-confirm', function (request, response) {
    response.locals.defaults = require('../../../data/session-data-defaults.js')
    response.render('v3/epr/registration-subsidiaries-add-companies-house-confirm')
})

router.get('*/registration-subsidiaries-add', function (request, response) {
    response.locals.defaults = require('../../../data/session-data-defaults.js')
    response.render('v3/epr/registration-subsidiaries-add')
})

router.get('*/registration-check-contact', function (request, response) {
    response.locals.defaults = require('../../../data/session-data-defaults.js')
    response.render('v3/epr/registration-check-contact')
})


module.exports = router