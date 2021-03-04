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
    var choice = req.session.data['choice']
    if (choice == "yes"){
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

module.exports = router