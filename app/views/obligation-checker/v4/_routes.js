const express = require('express')
const router = express.Router()
// Add your routes here - above the module.exports line


// Routing for Organisation type
router.post('*/route-organisation-type', function (req, res) {
    var actingAs = req.session.data['organisation-type']
    
    if (actingAs == "Parent company"){
        res.redirect('turnover?acting-as=holding-parent')
    }
    else if (actingAs == "Subsidiary"){
        res.redirect('turnover?acting-as=subsidiary-group')
    }
    else if (actingAs == "Individual company"){
        res.redirect('turnover?acting-as=individual')
    }  
})

// Routing for Organisation type change
router.post('*/route-organisation-type-change', function (req, res) {
    var actingAs = req.session.data['organisation-type']
    
    if (actingAs == "Parent company"){
        res.redirect('outcome-obligated?acting-as=holding-parent')
    }
    else if (actingAs == "Subsidiary"){
        res.redirect('outcome-obligated?acting-as=subsidiary-group')
    } 
    else if (actingAs == "Individual company"){
        res.redirect('outcome-obligated?acting-as=individual')
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
    var importer = req.session.data['importer']
    var onlineMarketPlace = req.session.data['online-market-place']
    var distributor = req.session.data['distributor']
    var serviceProvider = req.session.data['service-provider']
    var seller = req.session.data['seller']


    // Check whether the variable matches a condition
    if (brandOwner1 == "yes") {
        // Send user to next page
        res.redirect('tonnage')
    } else if (brandOwner2 == "yes") {
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
    } else if (seller == "yes") {
        // Send user to next page
        res.redirect('nation-tonnage') 
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
    } else if (seller == "yes") {
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
    else if ( (obCombinedEprExport == "25 tonnes to 50 tonnes") && (obDrsCheckboxes == "£1 million to £2 million") ){
        res.redirect('nation-card?small-producer=yes')
    }
    else if ( (obCombinedEprExport == "50 tonnes or more") && (obDrsCheckboxes == "£1 million to £2 million") ){
        res.redirect('nation-card?small-producer=yes')
    }
    else if ( (obCombinedEprExport == "25 tonnes to 50 tonnes") && (obDrsCheckboxes == "Over £2 million") ){
        res.redirect('nation-card?small-producer=yes')
    }
    else if ( (obCombinedEprExport == "50 tonnes or more") && (obDrsCheckboxes == "Over £2 million") ){
        res.redirect('nation-card?small-producer=no')
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
    else if ( (obCombinedEprExport == "25 tonnes to 50 tonnes") && (obDrsCheckboxes == "Over £2 million") ){
        res.redirect('outcome-obligated?small-producer=yes')
    }
    else if ( (obCombinedEprExport == "50 tonnes or more") && (obDrsCheckboxes == "Over £2 million") ){
        res.redirect('outcome-obligated?small-producer=no')
    }
})


// Routing for Nation Tonnage
router.post('*/packaging-nation-tonnage', function (req, res) {
    var obCombinedEprExport = req.session.data['packaging-tonnage']
    var obDrsCheckboxes = req.session.data['turnover']
    var nationTonnageData = req.session.data['nation-tonnage']

    if (nationTonnageData == "Under 25 tonnes") {
        res.redirect('outcome-obligated?nation-data=no')
    }
    else if (nationTonnageData == "25 tonnes or more")  {
        res.redirect('outcome-obligated?nation-data=yes')
    }
})

// Routing for Nation Tonnage
router.post('*/packaging-nation-tonnage-change', function (req, res) {
    var obCombinedEprExport = req.session.data['packaging-tonnage']
    var obDrsCheckboxes = req.session.data['turnover']
    var nationTonnageData = req.session.data['nation-tonnage']

    if (nationTonnageData == "Under 25 tonnes") {
        res.redirect('outcome-obligated?nation-data=no')
    }
    else if (nationTonnageData == "25 tonnes or more")  {
        res.redirect('outcome-obligated?nation-data=yes')
    }
})













module.exports = router