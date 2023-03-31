const express = require('express')
const router = express.Router()


// Routing for Page
router.post('*/access-role', function (req, res) {
    var accessRole = req.session.data['their-account-access']
    
    if (accessRole == "Upload data only"){
        res.redirect('./account-access')
    }
    else if (accessRole == "Manage team and upload data") {
        res.redirect('./account-access')
    }
    else if (accessRole == "Manage team, upload data and submit data") {
        res.redirect('work-for-your-organisation')
    }
})

// Routing for Page
router.post('*/work-with-organisation-routing', function (req, res) {
    var organisationMember = req.session.data['work-with-organisation']
    
    if (organisationMember == "Employee"){
        res.redirect('more-about-them/employee-job-title')
    }
    else if (organisationMember == "Consultant"){
        res.redirect('more-about-them/consultancy-name')
    }
    else if (organisationMember == "Compliance scheme"){
        res.redirect('more-about-them/compliance-scheme-name')
    }
    else if (organisationMember == "Something else"){
        res.redirect('more-about-them/company-name')
    }
})

// Routing for MANAGE
router.post('*/manage-access-role', function (req, res) {
    var accessRole = req.session.data['sally-account-access']
    
    if (accessRole == "Upload data only"){
        res.redirect('./account-access')
    }
    else if (accessRole == "Manage team and upload data") {
        res.redirect('./account-access')
    }
    else if (accessRole == "Manage team, upload data and submit data") {
        res.redirect('../delegate-them/work-for-your-organisation')
    }
})

// Routing for MANAGE
router.post('*/manage-work-with-organisation-routing', function (req, res) {
    var organisationMember = req.session.data['manage-work-with-organisation']
    
    if (organisationMember == "Employee"){
        res.redirect('./more-about-them/employee-job-title')
    }
    else if (organisationMember == "Consultant"){
        res.redirect('./more-about-them/consultancy-name')
    }
    else if (organisationMember == "Compliance scheme"){
        res.redirect('./more-about-them/compliance-scheme-name')
    }
    else if (organisationMember == "Something else"){
        res.redirect('./more-about-them/company-name')
    }
})




module.exports = router