const express = require('express')
const router = express.Router()
// Add your routes here - above the module.exports line



// Routing for registration-choice.html
router.post('*/registration-choice-choice', function (req, res) {
    var regChoice = req.session.data['regChoice']
    if (regChoice == "yes"){
        res.redirect('registration-choice-yes')
    }
    if (regChoice == "no"){
        res.redirect('registration-choice-no')
    }
    else {
        res.redirect('registration-choice-guidance')
    }
})


// Routing for registration-check-contact.html
router.post('*/registration-check-contact-choice', function (req, res) {
    var contactChoice = req.session.data['contactChoice']
    if (contactChoice == "some"){
        res.redirect('registration-check-contact-some-wrong')
    }
    if (contactChoice == "all"){
        res.redirect('registration-check-contact-all-wrong')
    }
    else {
        res.redirect('registration-check-org')
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
        res.redirect('registration-subsidiaries')
    }
})


// Routing for registration-subsidiaries.html
router.post('*/registration-subsidiaries-choice', function (req, res) {
    var subChoice = req.session.data['subChoice']
    if (subChoice == "no"){
        res.redirect('')
    }
    if (subChoice == "unsure"){
        res.redirect('registration-subsidiaries-guidance')
    }
    else {
        res.redirect('registration-subsidiaries-add')
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

module.exports = router