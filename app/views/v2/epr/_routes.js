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





// Routing for registration-check-org.html
router.post('*/registration-check-org-choice', function (req, res) {
    var orgChoice = req.session.data['orgChoice']
    if (orgChoice == "some"){
        res.redirect('registration-check-org-some-wrong')
    }
    if (orgChoice == "all"){
        res.redirect('registration-check-org-all-wrong')
    }
    else {
        res.redirect('registration-check-org-correspondence')
    }
})





// Routing for registration-check-org-correspondence.html
router.post('*/registration-check-org-correspondence-choice', function (req, res) {
    var correspondenceChoice = req.session.data['correspondenceChoice']
    if (correspondenceChoice == "yes"){
        res.redirect('registration-org-correspondence-address')
    }
    else {
        res.redirect('registration-check-contact')
    }
})





// Routing for registration-subsidiaries.html
router.post('*/registration-subsidiaries-choice', function (req, res) {
    var subChoice = req.session.data['subChoice']
    if (subChoice == "yes"){
        res.redirect('registration-subsidiaries-add')
    }
    if (subChoice == "unsure"){
        res.redirect('registration-subsidiaries-guidance')
    }
    else {
        res.redirect('registration-check-details')
    }
})


// Routing for registration-subsidiaries-add-companies-house.html
router.post('*/registration-subsidiaries-companies-house-choice', function (req, res) {
    var subChoice = req.session.data['subChoice']
    if (subChoice == "no"){
        res.redirect('')
    }
    else {
        res.redirect('registration-subsidiaries-add-companies-house-lookup')
    }
})


// Routing for registration-subsidiaries-add-check.html
router.post('*/registration-subsidiaries-add-check-choice', function (req, res) {
    var subChoice = req.session.data['subChoice']
    if (subChoice == "no"){
        res.redirect('registration-subsidiaries-add')
    }
    else {
        res.redirect('registration-check-details')
    }
})


// Routing for report-method.html
router.post('*/route-report-method', function (req, res) {
    var reportMethodChoice = req.session.data['reportMethodChoice']
    if (reportMethodChoice == "spreadsheet"){
        res.redirect('report-spreadsheet')
    }
    else {
        res.redirect('report-start')
    }
})



// Routing for the POM data reporting pages. Only the pages that correspond to the user's selections in the 'orgActivity' variable (/epr/registration-org-type.html) will be shown.
router.post('*/route-reporting', function (req, res) {
    var orgActivity = req.session.data['orgActivity']
    if (orgActivity.includes('brandowner')){
        res.redirect('report-brandowner-start')
    }
    else if (orgActivity.includes('importer')){
        res.redirect('report-importer-start')
    }
    else if (orgActivity.includes('distributor')){
        res.redirect('report-distributor-start')
    }
    else if (orgActivity.includes('onlinemarketplace')){
        res.redirect('report-onlinemarketplace-start')
    }
    else if (orgActivity.includes('seller')){
        res.redirect('report-seller-start')
    }
    else if (orgActivity.includes('serviceprovider')){
        res.redirect('report-serviceprovider-start')
    }
    else {
        res.redirect('report-check-details')
    }
})

router.post('*/route-reporting-brandowner', function (req, res) {
    var orgActivity = req.session.data['orgActivity']
    if (orgActivity.includes('importer')){
        res.redirect('report-importer-start')
    }
    else if (orgActivity.includes('distributor')){
        res.redirect('report-distributor-start')
    }
    else if (orgActivity.includes('onlinemarketplace')){
        res.redirect('report-onlinemarketplace-start')
    }
    else if (orgActivity.includes('seller')){
        res.redirect('report-seller-start')
    }
    else if (orgActivity.includes('serviceprovider')){
        res.redirect('report-serviceprovider-start')
    }
    else {
        res.redirect('report-check-details')
    }
})

router.post('*/route-reporting-importer', function (req, res) {
    var orgActivity = req.session.data['orgActivity']
    if (orgActivity.includes('distributor')){
        res.redirect('report-distributor-start')
    }
    else if (orgActivity.includes('onlinemarketplace')){
        res.redirect('report-onlinemarketplace-start')
    }
    else if (orgActivity.includes('seller')){
        res.redirect('report-seller-start')
    }
    else if (orgActivity.includes('serviceprovider')){
        res.redirect('report-serviceprovider-start')
    }
    else {
        res.redirect('report-check-details')
    }
})

router.post('*/route-reporting-distributor', function (req, res) {
    var orgActivity = req.session.data['orgActivity']
    if (orgActivity.includes('onlinemarketplace')){
        res.redirect('report-onlinemarketplace-start')
    }
    else if (orgActivity.includes('seller')){
        res.redirect('report-seller-start')
    }
    else if (orgActivity.includes('serviceprovider')){
        res.redirect('report-serviceprovider-start')
    }
    else {
        res.redirect('report-check-details')
    }
})

router.post('*/route-reporting-onlinemarketplace', function (req, res) {
    var orgActivity = req.session.data['orgActivity']
    if (orgActivity.includes('seller')){
        res.redirect('report-seller-start')
    }
    else if (orgActivity.includes('serviceprovider')){
        res.redirect('report-serviceprovider-start')
    }
    else {
        res.redirect('report-check-details')
    }
})

router.post('*/route-reporting-seller', function (req, res) {
    var orgActivity = req.session.data['orgActivity']
    if (orgActivity.includes('serviceprovider')){
        res.redirect('report-serviceprovider-start')
    }
    else {
        res.redirect('report-check-details')
    }
})
// end of POM data reporting pages


module.exports = router