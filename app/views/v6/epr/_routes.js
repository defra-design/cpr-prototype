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
        res.redirect('/v6/defra-id/login')
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




// Routing for registration-check-org-audit.html
router.post('*/route-check-org-audit', function (req, res) {
    var auditChoice = req.session.data['auditChoice']
    if (auditChoice == "no"){
        res.redirect('registration-org-audit-address')
    }
    else {
        res.redirect('registration-check-org-correspondence')
    }
})




// Routing for registration-check-org-correspondence.html
router.post('*/route-check-org-correspondence', function (req, res) {
    var correspondenceChoice = req.session.data['correspondenceChoice']
    if (correspondenceChoice == "no1"){
        res.redirect('registration-org-correspondence-address')
    }
    else if (correspondenceChoice == "no2"){
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



// Routing for activities-primary-intro.html
router.post('*/route-activities-primary-intro', function (req, res) {
    var packagingPrimary = req.session.data['packagingPrimary']
    if (packagingPrimary == "no"){
        res.redirect('home')
    }
    else {
        res.redirect('activities-primary-materials')
    }
})

// Routing for activities-secondary-intro.html
router.post('*/route-activities-secondary-intro', function (req, res) {
    var packagingSecondary = req.session.data['packagingSecondary']
    if (packagingSecondary == "no"){
        res.redirect('home')
    }
    else {
        res.redirect('activities-secondary-materials')
    }
})

// Routing for activities-transit-intro.html
router.post('*/route-activities-transit-intro', function (req, res) {
    var packagingTransit = req.session.data['packagingTransit']
    if (packagingTransit == "no"){
        res.redirect('activities-check-answers')
    }
    else {
        res.redirect('activities-transit-materials')
    }
})


// Routing for activities-seller-07.html
router.post('*/route-activities-seller', function (req, res) {
    var packagingSeller01 = req.session.data['packagingSeller01']
    var packagingSeller02 = req.session.data['packagingSeller02']
    var packagingSeller03 = req.session.data['packagingSeller03']
    var packagingSeller04 = req.session.data['packagingSeller04']
    var packagingSeller05 = req.session.data['packagingSeller05']
    var packagingSeller06 = req.session.data['packagingSeller06']
    var packagingSeller07 = req.session.data['packagingSeller07']
    if (packagingSeller01 == "yes"){
        res.redirect('activities-seller-materials')
    }
    else if (packagingSeller02 == "yes"){
        res.redirect('activities-seller-materials')
    }
    else if (packagingSeller03 == "yes"){
        res.redirect('activities-seller-materials')
    }
    else if (packagingSeller04 == "yes"){
        res.redirect('activities-seller-materials')
    }
    else if (packagingSeller05 == "yes"){
        res.redirect('activities-seller-materials')
    }
    else if (packagingSeller06 == "yes"){
        res.redirect('activities-seller-materials')
    }
    else if (packagingSeller07 == "yes"){
        res.redirect('activities-seller-materials')
    }
    else {
        res.redirect('activities-check-answers')
    }
})



// Routing for the packaging data collection pages depending on what packaging activities have been selected by the user during section 2 of the task list.

// Primary
router.post('*/route-reporting-primary', function (req, res) {
    var activityPrimary01 = req.session.data['activityPrimary01']
    var activityPrimary02 = req.session.data['activityPrimary02']
    var activityPrimary03 = req.session.data['activityPrimary03']
    var activityPrimary04 = req.session.data['activityPrimary04']
    var activityPrimary05 = req.session.data['activityPrimary05']
    if (activityPrimary01 == "yes"){
        res.redirect('report-primary-01')
    }
    else if (activityPrimary02 == "yes"){
        res.redirect('report-primary-02')
    }
    else if (activityPrimary03 == "yes"){
        res.redirect('report-primary-03')
    }
    else if (activityPrimary04 == "yes"){
        res.redirect('report-primary-04')
    }
    else if (activityPrimary05 == "yes"){
        res.redirect('report-primary-05')
    }
    else {
        res.redirect('home')
    }
})


router.post('*/route-reporting-primary-01', function (req, res) {
    var activityPrimary02 = req.session.data['activityPrimary02']
    var activityPrimary03 = req.session.data['activityPrimary03']
    var activityPrimary04 = req.session.data['activityPrimary04']
    var activityPrimary05 = req.session.data['activityPrimary05']
    if (activityPrimary02 == "yes"){
        res.redirect('report-primary-02')
    }
    else if (activityPrimary03 == "yes"){
        res.redirect('report-primary-03')
    }
    else if (activityPrimary04 == "yes"){
        res.redirect('report-primary-04')
    }
    else if (activityPrimary05 == "yes"){
        res.redirect('report-primary-05')
    }
    else {
        res.redirect('home')
    }
})


router.post('*/route-reporting-primary-02', function (req, res) {
    var activityPrimary03 = req.session.data['activityPrimary03']
    var activityPrimary04 = req.session.data['activityPrimary04']
    var activityPrimary05 = req.session.data['activityPrimary05']
    if (activityPrimary03 == "yes"){
        res.redirect('report-primary-03')
    }
    else if (activityPrimary04 == "yes"){
        res.redirect('report-primary-04')
    }
    else if (activityPrimary05 == "yes"){
        res.redirect('report-primary-05')
    }
    else {
        res.redirect('home')
    }
})


router.post('*/route-reporting-primary-03', function (req, res) {
    var activityPrimary04 = req.session.data['activityPrimary04']
    var activityPrimary05 = req.session.data['activityPrimary05']
    if (activityPrimary04 == "yes"){
        res.redirect('report-primary-04')
    }
    else if (activityPrimary05 == "yes"){
        res.redirect('report-primary-05')
    }
    else {
        res.redirect('home')
    }
})


router.post('*/route-reporting-primary-04', function (req, res) {
    var activityPrimary05 = req.session.data['activityPrimary05']
    if (activityPrimary05 == "yes"){
        res.redirect('report-primary-05')
    }
    else {
        res.redirect('home')
    }
})



// Secondary
router.post('*/route-reporting-secondary', function (req, res) {
    var activitySecondary01 = req.session.data['activitySecondary01']
    var activitySecondary02 = req.session.data['activitySecondary02']
    var activitySecondary03 = req.session.data['activitySecondary03']
    var activitySecondary04 = req.session.data['activitySecondary04']
    var activitySecondary05 = req.session.data['activitySecondary05']
    if (activitySecondary01 == "yes"){
        res.redirect('report-secondary-01')
    }
    else if (activitySecondary02 == "yes"){
        res.redirect('report-secondary-02')
    }
    else if (activitySecondary03 == "yes"){
        res.redirect('report-secondary-03')
    }
    else if (activitySecondary04 == "yes"){
        res.redirect('report-secondary-04')
    }
    else if (activitySecondary05 == "yes"){
        res.redirect('report-secondary-05')
    }
    else {
        res.redirect('home')
    }
})


router.post('*/route-reporting-secondary-01', function (req, res) {
    var activitySecondary02 = req.session.data['activitySecondary02']
    var activitySecondary03 = req.session.data['activitySecondary03']
    var activitySecondary04 = req.session.data['activitySecondary04']
    var activitySecondary05 = req.session.data['activitySecondary05']
    if (activitySecondary02 == "yes"){
        res.redirect('report-secondary-02')
    }
    else if (activitySecondary03 == "yes"){
        res.redirect('report-secondary-03')
    }
    else if (activitySecondary04 == "yes"){
        res.redirect('report-secondary-04')
    }
    else if (activitySecondary05 == "yes"){
        res.redirect('report-secondary-05')
    }
    else {
        res.redirect('home')
    }
})


router.post('*/route-reporting-secondary-02', function (req, res) {
    var activitySecondary03 = req.session.data['activitySecondary03']
    var activitySecondary04 = req.session.data['activitySecondary04']
    var activitySecondary05 = req.session.data['activitySecondary05']
    if (activitySecondary03 == "yes"){
        res.redirect('report-secondary-03')
    }
    else if (activitySecondary04 == "yes"){
        res.redirect('report-secondary-04')
    }
    else if (activitySecondary05 == "yes"){
        res.redirect('report-secondary-05')
    }
    else {
        res.redirect('home')
    }
})


router.post('*/route-reporting-secondary-03', function (req, res) {
    var activitySecondary04 = req.session.data['activitySecondary04']
    var activitySecondary05 = req.session.data['activitySecondary05']
    if (activitySecondary04 == "yes"){
        res.redirect('report-secondary-04')
    }
    else if (activitySecondary05 == "yes"){
        res.redirect('report-secondary-05')
    }
    else {
        res.redirect('home')
    }
})


router.post('*/route-reporting-secondary-04', function (req, res) {
    var activitySecondary05 = req.session.data['activitySecondary05']
    if (activitySecondary05 == "yes"){
        res.redirect('report-secondary-05')
    }
    else {
        res.redirect('home')
    }
})



// Transit
router.post('*/route-reporting-transit', function (req, res) {
    var activityTransit01 = req.session.data['activityTransit01']
    var activityTransit02 = req.session.data['activityTransit02']
    var activityTransit03 = req.session.data['activityTransit03']
    var activityTransit04 = req.session.data['activityTransit04']
    var activityTransit05 = req.session.data['activityTransit05']
    if (activityTransit01 == "yes"){
        res.redirect('report-transit-01')
    }
    else if (activityTransit02 == "yes"){
        res.redirect('report-transit-02')
    }
    else if (activityTransit03 == "yes"){
        res.redirect('report-transit-03')
    }
    else if (activityTransit04 == "yes"){
        res.redirect('report-transit-04')
    }
    else if (activityTransit05 == "yes"){
        res.redirect('report-transit-05')
    }
    else {
        res.redirect('activities-check-answers')
    }
})


router.post('*/route-reporting-transit-01', function (req, res) {
    var activityTransit02 = req.session.data['activityTransit02']
    var activityTransit03 = req.session.data['activityTransit03']
    var activityTransit04 = req.session.data['activityTransit04']
    var activityTransit05 = req.session.data['activityTransit05']
    if (activityTransit02 == "yes"){
        res.redirect('report-transit-02')
    }
    else if (activityTransit03 == "yes"){
        res.redirect('report-transit-03')
    }
    else if (activityTransit04 == "yes"){
        res.redirect('report-transit-04')
    }
    else if (activityTransit05 == "yes"){
        res.redirect('report-transit-05')
    }
    else {
        res.redirect('activities-check-answers')
    }
})


router.post('*/route-reporting-transit-02', function (req, res) {
    var activityTransit03 = req.session.data['activityTransit03']
    var activityTransit04 = req.session.data['activityTransit04']
    var activityTransit05 = req.session.data['activityTransit05']
    if (activityTransit03 == "yes"){
        res.redirect('report-transit-03')
    }
    else if (activityTransit04 == "yes"){
        res.redirect('report-transit-04')
    }
    else if (activityTransit05 == "yes"){
        res.redirect('report-transit-05')
    }
    else {
        res.redirect('activities-check-answers')
    }
})


router.post('*/route-reporting-transit-03', function (req, res) {
    var activityTransit04 = req.session.data['activityTransit04']
    var activityTransit05 = req.session.data['activityTransit05']
    if (activityTransit04 == "yes"){
        res.redirect('report-transit-04')
    }
    else if (activityTransit05 == "yes"){
        res.redirect('report-transit-05')
    }
    else {
        res.redirect('activities-check-answers')
    }
})


router.post('*/route-reporting-transit-04', function (req, res) {
    var activityTransit05 = req.session.data['activityTransit05']
    if (activityTransit05 == "yes"){
        res.redirect('report-transit-05')
    }
    else {
        res.redirect('activities-check-answers')
    }
})











// Routing for report-resubmit-remove.html
router.post('*/route-resubmit-remove', function (req, res) {
    var remove = req.session.data['remove'] // Get the producer type data to be removed
    var removeChoice = req.session.data['removeChoice'] // Get whether the user has chosen yes or no
    if (removeChoice == "yes"){
        res.redirect('report-resubmit?' + remove +'=no')
    }
    else {
        res.redirect('report-resubmit-change')
    }
})


// Routing for report-resubmit-remove-material.html
router.post('*/route-resubmit-remove-material', function (req, res) {
    var remove = req.session.data['remove'] // Get the material to be removed
    var removeChoiceMaterial = req.session.data['removeChoiceMaterial'] // Get whether the user has chosen yes or no
    if (removeChoiceMaterial == "yes"){
        res.redirect('report-resubmit-change?' + remove +'=0') // Set the material tonnage to zero because it's too difficult to remove the material name from the array of materials
    }
    else {
        res.redirect('report-resubmit-change')
    }
})



// Routing for data-method-question-01.html
router.post('*/route-method-question-01', function (req, res) {
    var methodBusinessSoftware = req.session.data['methodBusinessSoftware']
    if (methodBusinessSoftware == "yes"){
        res.redirect('data-method-question-02')
    }
    else {
        res.redirect('data-select-alternate-method')
    }
})


// Routing for data-method-question-02.html
router.post('*/route-method-question-02', function (req, res) {
    var methodSoftwareIntegration = req.session.data['methodSoftwareIntegration']
    if (methodSoftwareIntegration == "yes"){
        res.redirect('data-reporting-method-results')
    }
    else {
        res.redirect('data-select-alternate-method')
    }
})


// Routing for report-spreadsheet-check.html
router.post('*/route-report-spreadsheet-check', function (req, res) {
    var spreadsheetChoice = req.session.data['spreadsheetChoice']
    if (spreadsheetChoice == "no"){
        res.redirect('report-spreadsheet')
    }
    else {
        res.redirect('report-spreadsheet-upload')
    }
})





// Get the data values from session-data-defaults.js to use on any pages that use {{ defaults['VARIABLE_NAME'] }}
router.get('*/service-start-defra-check-requested', function (request, response) {
    response.locals.defaults = require('../../../data/session-data-defaults.js')
    response.render('v6/epr/service-start-defra-check-requested')
})

router.get('*/registration-declaration', function (request, response) {
    response.locals.defaults = require('../../../data/session-data-defaults.js')
    response.render('v6/epr/registration-declaration')
})

router.get('*/pending', function (request, response) {
    response.locals.defaults = require('../../../data/session-data-defaults.js')
    response.render('v6/epr/pending')
})

router.get('*/registration-check-contact', function (request, response) {
    response.locals.defaults = require('../../../data/session-data-defaults.js')
    response.render('v6/epr/registration-check-contact')
})

router.get('*/registration-check-details', function (request, response) {
    response.locals.defaults = require('../../../data/session-data-defaults.js')
    response.render('v6/epr/registration-check-details')
})

router.get('*/registration-check-org', function (request, response) {
    response.locals.defaults = require('../../../data/session-data-defaults.js')
    response.render('v6/epr/registration-check-org')
})

router.get('*/registration-check-org-correspondence', function (request, response) {
    response.locals.defaults = require('../../../data/session-data-defaults.js')
    response.render('v6/epr/registration-check-org-correspondence')
})

router.get('*/registration-subsidiaries-add-companies-house-confirm', function (request, response) {
    response.locals.defaults = require('../../../data/session-data-defaults.js')
    response.render('v6/epr/registration-subsidiaries-add-companies-house-confirm')
})

router.get('*/registration-subsidiaries-add', function (request, response) {
    response.locals.defaults = require('../../../data/session-data-defaults.js')
    response.render('v6/epr/registration-subsidiaries-add')
})

router.get('*/registration-check-contact', function (request, response) {
    response.locals.defaults = require('../../../data/session-data-defaults.js')
    response.render('v6/epr/registration-check-contact')
})


module.exports = router