const express = require('express')
const router = express.Router()
// Add your routes here - above the module.exports line

// Routing for Group-1
router.post('*/route-group-1', function (req, res) {
    var groupYesNo = req.session.data['group-1']
    
    if (groupYesNo == "Yes"){
        res.redirect('group-2?group-1-answer=yes')
    }
    else if (groupYesNo == "No"){
        res.redirect('turnover?acting-as=independent')
    } 
})

// Routing for Group-1-change
router.post('*/route-group-1-change', function (req, res) {
    var groupYesNo = req.session.data['group-1']
    
    if (groupYesNo == "Yes"){
        res.redirect('group-2-change')
    }
    else if (groupYesNo == "No"){
        res.redirect('outcome-obligated?acting-as=independent')
    } 
})

// Routing for Group-2
router.post('*/route-group-2', function (req, res) {
    var actingAs = req.session.data['group-2']
    
    if (actingAs == "Parent company"){
        res.redirect('turnover?acting-as=holding-parent')
    }
    else if (actingAs == "Subsidiary"){
        res.redirect('turnover?acting-as=subsidiary-group')
    } 
})

// Routing for Group-2-change
router.post('*/route-group-2-change', function (req, res) {
    var actingAs = req.session.data['group-2']
    
    if (actingAs == "Parent company"){
        res.redirect('outcome-obligated?acting-as=holding-parent')
    }
    else if (actingAs == "Subsidiary"){
        res.redirect('outcome-obligated?acting-as=subsidiary-group')
    } 
})

// Routing for Turnover
router.post('*/organisation-turnover', function (req, res) {
    var obDrsCheckboxes = req.session.data['turnover']
    
    if (obDrsCheckboxes == "Under £1 million"){
        res.redirect('outcome-not-obligated-below-turnover')
    }
    else if (obDrsCheckboxes == "£1 million to £2 million"){
        res.redirect('activities')
    }
    else if (obDrsCheckboxes == "Over £2 million"){
        res.redirect('activities')
    }
})

// Routing for Turnover-change
router.post('*/organisation-turnover-change', function (req, res) {
    var obDrsCheckboxes = req.session.data['turnover']
    var obCombinedEprExport = req.session.data['packaging-tonnage']
    
    if (obDrsCheckboxes == "Under £1 million"){
        res.redirect('outcome-not-obligated-below-turnover')
    }
    else if ( (obCombinedEprExport == "25 tonnes to 50 tonnes") && (obDrsCheckboxes == "£1 million to £2 million") ){
        res.redirect('outcome-obligated?small-producer=yes')
    }
    else if ( (obCombinedEprExport == "50 tonnes or more") && (obDrsCheckboxes == "£1 million to £2 million") ){
        res.redirect('outcome-obligated?small-producer=yes')
    }
    else if ( (obCombinedEprExport == "25 tonnes to 50 tonnes") && (obDrsCheckboxes == "Over £2 million") ){
        res.redirect('outcome-obligated?small-producer=yes')
    }
    else if ( (obCombinedEprExport == "50 tonnes or more") && (obDrsCheckboxes == "Over £2 million") ){
        res.redirect('outcome-obligated?small-producer=no')
    }
})

// Routing for Activities
router.post('*/packaging-activities', function (req, res) {

    // Make a variable and give it the value
    var brandOwner1 = req.session.data['brand-owner-1']
    var brandOwner2 = req.session.data['brand-owner-2']
    var brandOwner3 = req.session.data['brand-owner-3']
    var importer = req.session.data['importer']
    var onlineMarketPlace = req.session.data['online-market-place']
    var distributor = req.session.data['distributor']
    var serviceProvider = req.session.data['service-provider']


    // Check whether the variable matches a condition
    if (brandOwner1 == "yes") {
        // Send user to next page
        res.redirect('tonnage')
    } else if (brandOwner2 == "yes") {
        // Send user to next page
        res.redirect('tonnage') 
    } else if (brandOwner3 == "yes") {
        // Send user to next page
        res.redirect('tonnage') 
    } else if (importer == "yes") {
        // Send user to next page
        res.redirect('tonnage') 
    } else if (onlineMarketPlace == "yes") {
        // Send user to next page
        res.redirect('tonnage') 
    } else if (distributor == "yes") {
        // Send user to next page
        res.redirect('tonnage') 
    } else if (serviceProvider == "yes") {
        // Send user to next page
        res.redirect('tonnage') 
    }
    else {
      // Send user to ineligible page
      res.redirect('outcome-not-obligated-no-activities')
    }
})

// Routing for Activities-change
router.post('*/packaging-activities-change', function (req, res) {

    // Make a variable and give it the value
    var brandOwner1 = req.session.data['brand-owner-1']
    var brandOwner2 = req.session.data['brand-owner-2']
    var brandOwner3 = req.session.data['brand-owner-3']
    var importer = req.session.data['importer']
    var onlineMarketPlace = req.session.data['online-market-place']
    var distributor = req.session.data['distributor']
    var serviceProvider = req.session.data['service-provider']


    // Check whether the variable matches a condition
    if (brandOwner1 == "yes") {
        // Send user to next page
        res.redirect('outcome-obligated')
    } else if (brandOwner2 == "yes") {
        // Send user to next page
        res.redirect('outcome-obligated') 
    } else if (brandOwner3 == "yes") {
        // Send user to next page
        res.redirect('outcome-obligated') 
    } else if (importer == "yes") {
        // Send user to next page
        res.redirect('outcome-obligated') 
    } else if (onlineMarketPlace == "yes") {
        // Send user to next page
        res.redirect('outcome-obligated') 
    } else if (distributor == "yes") {
        // Send user to next page
        res.redirect('outcome-obligated') 
    } else if (serviceProvider == "yes") {
        // Send user to next page
        res.redirect('outcome-obligated') 
    }
    else {
      // Send user to ineligible page
      res.redirect('outcome-not-obligated-no-activities')
    }
})

// Routing for Tonnage
router.post('*/route-tonnage', function (req, res) {
    var obCombinedEprExport = req.session.data['packaging-tonnage']
    var obDrsCheckboxes = req.session.data['turnover']

    if (obCombinedEprExport == "Under 25 tonnes") {
        res.redirect('outcome-not-obligated-below-tonnage')
    }
    else if ( (obCombinedEprExport == "25 tonnes to 50 tonnes") && (obDrsCheckboxes == "£25 million to £50 million") ){
        res.redirect('outcome-obligated?small-producer=yes')
    }
    else if ( (obCombinedEprExport == "50 tonnes or more") && (obDrsCheckboxes == "£25 million to £50 million") ){
        res.redirect('outcome-obligated?small-producer=yes')
    }
    else if ( (obCombinedEprExport == "25 tonnes to 50 tonnes") && (obDrsCheckboxes == "Over £2 million") ){
        res.redirect('outcome-obligated?small-producer=yes')
    }
    else if ( (obCombinedEprExport == "50 tonnes or more") && (obDrsCheckboxes == "Over £2 million") ){
        res.redirect('outcome-obligated?small-producer=no')
    }
})

// Routing for Tonnage-change
router.post('*/route-tonnage-change', function (req, res) {
    var obCombinedEprExport = req.session.data['packaging-tonnage']
    var obDrsCheckboxes = req.session.data['turnover']

    if (obCombinedEprExport == "Under 25 tonnes") {
        res.redirect('outcome-not-obligated-below-tonnage')
    }
    else if ( (obCombinedEprExport == "25 tonnes to 50 tonnes") && (obDrsCheckboxes == "£1 million to £2 million") ){
        res.redirect('outcome-obligated?small-producer=yes')
    }
    else if ( (obCombinedEprExport == "50 tonnes or more") && (obDrsCheckboxes == "£1 million to £2 million") ){
        res.redirect('outcome-obligated?small-producer=yes')
    }
    else if ( (obCombinedEprExport == "25 tonnes to 50 tonnes") && (obDrsCheckboxes == "Over £50 million") ){
        res.redirect('outcome-obligated?small-producer=yes')
    }
    else if ( (obCombinedEprExport == "50 tonnes or more") && (obDrsCheckboxes == "Over £50 million") ){
        res.redirect('outcome-obligated?small-producer=no')
    }
})











module.exports = router