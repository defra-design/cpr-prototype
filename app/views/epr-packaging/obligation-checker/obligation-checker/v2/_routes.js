const express = require('express')
const router = express.Router()
// Add your routes here - above the module.exports line



// Routing for question-1.html
router.post('*/route-question-1', function (req, res) {
    var obDrsCheckboxes = req.session.data['turnover']
    
    if (obDrsCheckboxes == "no"){
        res.redirect('outcome-not-obligated-below-turnover')
    }
    else if (obDrsCheckboxes == "yes"){
        res.redirect('question-2')
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
        res.redirect('question-3')
    } else if (brandOwner2 == "yes") {
        // Send user to next page
        res.redirect('question-3') 
    } else if (brandOwner3 == "yes") {
        // Send user to next page
        res.redirect('question-3') 
    } else if (importer == "yes") {
        // Send user to next page
        res.redirect('question-3') 
    } else if (onlineMarketPlace == "yes") {
        // Send user to next page
        res.redirect('question-3') 
    } else if (distributor == "yes") {
        // Send user to next page
        res.redirect('question-3') 
    } else if (serviceProvider == "yes") {
        // Send user to next page
        res.redirect('question-3') 
    }
    else {
      // Send user to ineligible page
      res.redirect('outcome-not-obligated-no-activities')
    }
  
  })


// Routing for question-2.html in V1
// router.post('*/route-question-2', function (req, res) {
//     var obCombinedTurnover = req.session.data['activities']
//     if (obCombinedTurnover == "none"){
//         res.redirect('outcome-not-obligated-no-activities')
//     }
//     else {
//         res.redirect('question-3')
//     }
// })



// Routing for question-3.html
router.post('*/route-question-3', function (req, res) {
    var obCombinedEprExport = req.session.data['tonnage']
    if (obCombinedEprExport == "under-25"){
        res.redirect('outcome-not-obligated-below-tonnage')
    }
    else if (obCombinedEprExport == "25-and-over"){
        res.redirect('outcome-obligated')
    }
})



module.exports = router