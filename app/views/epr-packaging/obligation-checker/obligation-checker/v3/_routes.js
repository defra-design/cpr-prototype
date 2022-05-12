const express = require('express')
const router = express.Router()
// Add your routes here - above the module.exports line

// Routing for route-group-1
router.post('*/route-group-1', function (req, res) {
    var groupYesNo = req.session.data['group-1']
    
    if (groupYesNo == "Yes"){
        res.redirect('group-2')
    }
    else if (groupYesNo == "No"){
        res.redirect('turnover?acting-as=independent')
    } 
})


// Routing for route-group-2
router.post('*/route-group-2', function (req, res) {
    var actingAs = req.session.data['group-2']
    
    if (actingAs == "Parent company"){
        res.redirect('turnover?acting-as=holding-parent')
    }
    else if (actingAs == "Subsidiary"){
        res.redirect('turnover?acting-as=subsidiary-group')
    } 
})

// Routing for question-1.html
router.post('*/organisation-turnover', function (req, res) {
    var obDrsCheckboxes = req.session.data['turnover']
    
    if (obDrsCheckboxes == "Under £25 million"){
        res.redirect('outcome-not-obligated-below-turnover')
    }
    else if (obDrsCheckboxes == "£25 million to £50 million"){
        res.redirect('activities')
    }
    else if (obDrsCheckboxes == "Over £50 million"){
        res.redirect('activities')
    }
})

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



// router.post('*/route-question-2', function (req, res) {
//     var obCombinedTurnover = req.session.data['activities']
//     var obDrsCheckboxes = req.session.data['turnover']
    
//     if (obCombinedTurnover == "none"){
//         res.redirect('outcome-not-obligated-no-activities')
//     }
//     else {
//         res.redirect('question-3')
//     }
// })



// Routing for question-3.html
router.post('*/route-tonnage', function (req, res) {
    var obCombinedEprExport = req.session.data['packaging-tonnage']

    if (obCombinedEprExport == "Under 25 tonnes"){
        res.redirect('outcome-obligated')
    }
    else if (obCombinedEprExport == "25 tonnes to 50 tonnes"){
        res.redirect('outcome-obligated')
    }
    else if (obCombinedEprExport == "50 tonnes or more"){
        res.redirect('outcome-obligated')
    }
})



module.exports = router