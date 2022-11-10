const express = require('express')
const router = express.Router()

// Routing for Organisation type
router.post('*/route-organisation-type', function (req, res) {
    var actingAs = req.session.data['organisation-type']
    
    if (actingAs == "Parent company"){
        res.redirect('turnover?acting-as=parent-company')
    }
    else if (actingAs == "Subsidiary"){
        res.redirect('turnover?acting-as=subsidiary')
    }
    else if (actingAs == "Individual company"){
        res.redirect('turnover?acting-as=individual')
    }  
})

// Routing for Turnover
router.post('*/organisation-turnover', function (req, res) {
    var obDrsCheckboxes = req.session.data['turnover']
    
    if (obDrsCheckboxes == "Under £1 million"){
        res.redirect('outcome-not-obligated-below-turnover')
    }
    else if (obDrsCheckboxes == "£1 million to £2 million"){
        res.redirect('activities/brand-owner')
    }
    else if (obDrsCheckboxes == "Over £2 million"){
        res.redirect('activities/brand-owner')
    }
})

// Routing for Activities
router.post('*/activities-calculation', function (req, res) {

    // Make a variable and give it the value
    var brandOwner = req.session.data['brand-owner']
    var packerFiller = req.session.data['packer-filler']
    var importer = req.session.data['importer']
    var onlineMarketPlace = req.session.data['online-marketplace']
    var distributor = req.session.data['distributor']
    var serviceProvider = req.session.data['service-provider']
    var seller = req.session.data['seller']

    // Check whether the variable matches a condition
    if (brandOwner == "yes") {
        // Send user to next page
        res.redirect('../drinks-on-market?handle-supply=yes')
    } else if (packerFiller == "yes") {
        // Send user to next page
        res.redirect('../drinks-on-market?handle-supply=yes') 
    } else if (importer == "yes") {
        // Send user to next page
        res.redirect('../drinks-on-market?handle-supply=yes') 
    } else if (onlineMarketPlace == "yes") {
        // Send user to next page
        res.redirect('../drinks-on-market?handle-supply=yes') 
    } else if (distributor == "yes") {
        // Send user to next page
        res.redirect('../drinks-on-market?handle-supply=yes') 
    } else if (serviceProvider == "yes") {
        // Send user to next page
        res.redirect('../drinks-on-market?handle-supply=yes') 
    } else if (seller == "yes") {
        // Send user to next page
        res.redirect('../drinks-on-market?handle-supply=no') 
    }
    else {
      // Send user to ineligible page
      res.redirect('../outcome-not-obligated-no-activities')
    }
})

// Routing for Interim DRS 1
router.post('*/place-drinks-market-question', function (req, res) {
    
    // Make a variable and give it the value
    var brandOwner = req.session.data['brand-owner']
    var packerFiller = req.session.data['packer-filler']
    var importer = req.session.data['importer']
    var onlineMarketPlace = req.session.data['online-marketplace']
    var distributor = req.session.data['distributor']
    var serviceProvider = req.session.data['service-provider']
    var seller = req.session.data['seller']

    var drinksMarket = req.session.data['place-drinks']
    
    if (drinksMarket == "yes") {
        res.redirect('drinks-container-materials')
    }
    else if ( (drinksMarket == "no") && (brandOwner == "yes") ){
        res.redirect('tonnage?handle-supply=yes&drinks-market-answer=yes')
    }
    else if ( (drinksMarket == "no") && (packerFiller == "yes") ){
        res.redirect('tonnage?handle-supply=yes&drinks-market-answer=yes')
    }
    else if ( (drinksMarket == "no") && (importer == "yes") ){
        res.redirect('tonnage?handle-supply=yes&drinks-market-answer=yes')
    }
    else if ( (drinksMarket == "no") && (onlineMarketPlace == "yes") ){
        res.redirect('tonnage?handle-supply=yes&drinks-market-answer=yes')
    }
    else if ( (drinksMarket == "no") && (distributor == "yes") ){
        res.redirect('tonnage?handle-supply=yes&drinks-market-answer=yes')
    }
    else if ( (drinksMarket == "no") && (serviceProvider == "yes") ){
        res.redirect('tonnage?handle-supply=yes&drinks-market-answer=yes')
    }
    else if ( (drinksMarket == "no") && (seller == "yes") ) {
        res.redirect('nation-tonnage?handle-supply=no&drinks-market-answer=yes')
    }
})

// Routing for Interim DRS 2
router.post('*/drinks-container-materials', function (req, res) {
    // Make a variable and give it the value
    var brandOwner = req.session.data['brand-owner']
    var packerFiller = req.session.data['packer-filler']
    var importer = req.session.data['importer']
    var onlineMarketPlace = req.session.data['online-marketplace']
    var distributor = req.session.data['distributor']
    var serviceProvider = req.session.data['service-provider']
    var seller = req.session.data['seller']

    var drinkMaterials = req.session.data['drink-materials']
    
    if ( (drinkMaterials == "None") && (brandOwner == "yes") ){
        res.redirect('tonnage?handle-supply=yes&drinks-market=yes&drink-material-answer=yes')
    }
    else if ( (drinkMaterials == "None") && (packerFiller == "yes") ){
        res.redirect('tonnage?handle-supply=yes&drinks-market=yes&drink-material-answer=yes')
    }
    else if ( (drinkMaterials == "None") && (importer == "yes") ){
        res.redirect('tonnage?handle-supply=yes&drinks-market=yes&drink-material-answer=yes')
    }
    else if ( (drinkMaterials == "None") && (onlineMarketPlace == "yes") ){
        res.redirect('tonnage?handle-supply=yes&drinks-market=yes&drink-material-answer=yes')
    }
    else if ( (drinkMaterials == "None") && (distributor == "yes") ){
        res.redirect('tonnage?handle-supply=yes&drinks-market=yes&drink-material-answer=yes')
    }
    else if ( (drinkMaterials == "None") && (serviceProvider == "yes") ){
        res.redirect('tonnage?handle-supply=yes&drinks-market=yes&drink-material-answer=yes')
    }
    else if ( (drinkMaterials == "None") && (seller == "yes") ){
        res.redirect('nation-tonnage?handle-supply=no&drinks-market=yes&drink-material-answer=yes')
    }
    else {
        res.redirect('drinks-container-size?drink-material-answer=yes')
    }
})

// Routing for Interim DRS 3
router.post('*/drinks-container-size', function (req, res) {
    // Make a variable and give it the value
    var brandOwner = req.session.data['brand-owner']
    var packerFiller = req.session.data['packer-filler']
    var importer = req.session.data['importer']
    var onlineMarketPlace = req.session.data['online-marketplace']
    var distributor = req.session.data['distributor']
    var serviceProvider = req.session.data['service-provider']
    var seller = req.session.data['seller']

    var drinkSize = req.session.data['drink-size']
    
    if ((drinkSize == "yes") && (brandOwner == "yes")) {
        res.redirect('tonnage?handle-supply=yes&drinks-market=yes&drink-material=yes&drink-size-answer=yes&interim-drs=yes')
    }
    else if ((drinkSize == "yes") && (packerFiller == "yes")) {
        res.redirect('tonnage?handle-supply=yes&drinks-market=yes&drink-material=yes&drink-size-answer=yes&interim-drs=yes')
    }
    else if ((drinkSize == "yes") && (importer == "yes")) {
        res.redirect('tonnage?handle-supply=yes&drinks-market=yes&drink-material=yes&drink-size-answer=yes&interim-drs=yes')
    }
    else if ((drinkSize == "yes") && (onlineMarketPlace == "yes")) {
        res.redirect('tonnage?handle-supply=yes&drinks-market=yes&drink-material=yes&drink-size-answer=yes&interim-drs=yes')
    }
    else if ((drinkSize == "yes") && (distributor == "yes")) {
        res.redirect('tonnage?handle-supply=yes&drinks-market=yes&drink-material=yes&drink-size-answer=yes&interim-drs=yes')
    }
    else if ((drinkSize == "yes") && (serviceProvider == "yes")) {
        res.redirect('tonnage?handle-supply=yes&drinks-market=yes&drink-material=yes&drink-size-answer=yes&interim-drs=yes')
    }
    else if ((drinkSize == "yes") && (seller == "yes")) {
        res.redirect('nation-tonnage?handle-supply=no&drinks-market=yes&drink-material=yes&drink-size-answer=yes&interim-drs=yes')
    }
    else if ((drinkSize == "no") && (brandOwner == "yes")) {
        res.redirect('tonnage?handle-supply=yes&drinks-market=yes&drink-material=yes&drink-size-answer=yes&interim-drs=no')
    }
    else if ((drinkSize == "no") && (packerFiller == "yes")) {
        res.redirect('tonnage?handle-supply=yes&drinks-market=yes&drink-material=yes&drink-size-answer=yes&interim-drs=no')
    }
    else if ((drinkSize == "no") && (importer == "yes")) {
        res.redirect('tonnage?handle-supply=yes&drinks-market=yes&drink-material=yes&drink-size-answer=yes&interim-drs=no')
    }
    else if ((drinkSize == "no") && (onlineMarketPlace == "yes")) {
        res.redirect('tonnage?handle-supply=yes&drinks-market=yes&drink-material=yes&drink-size-answer=yes&interim-drs=no')
    }
    else if ((drinkSize == "no") && (distributor == "yes")) {
        res.redirect('tonnage?handle-supply=yes&drinks-market=yes&drink-material=yes&drink-size-answer=yes&interim-drs=no')
    }
    else if ((drinkSize == "no") && (serviceProvider == "yes")) {
        res.redirect('tonnage?handle-supply=yes&drinks-market=yes&drink-material=yes&drink-size-answer=yes&interim-drs=no')
    }
    else if ((drinkSize == "no") && (seller == "yes")) {
        res.redirect('nation-tonnage?handle-supply=no&drinks-market=yes&drink-material=yes&drink-size-answer=yes&interim-drs=no')
    }
})

// Routing for Tonnage
router.post('*/route-tonnage', function (req, res) {
    
    // Make a variable and give it the value
    var obCombinedEprExport = req.session.data['packaging-tonnage']
    var obDrsCheckboxes = req.session.data['turnover']
    
    var brandOwner = req.session.data['brand-owner']
    var packerFiller = req.session.data['packer-filler']
    var importer = req.session.data['importer']
    var onlineMarketPlace = req.session.data['online-marketplace']
    var distributor = req.session.data['distributor']
    var serviceProvider = req.session.data['service-provider']
    var seller = req.session.data['seller']

    if (obCombinedEprExport == "Under 25 tonnes") {
        res.redirect('outcome-not-obligated-below-tonnage')
    }

    // THRESHOLD - SMALL PRODUCER
    else if ( (obCombinedEprExport == "25 tonnes to 50 tonnes") && (obDrsCheckboxes == "£1 million to £2 million") && (brandOwner == "yes") && (packerFiller == "yes") && (importer == "no") && (onlineMarketPlace == "no") && (distributor == "no") && (serviceProvider == "no") && (seller == "no") ){
        res.redirect('outcome-obligated?small-producer=yes&handle-supply=yes')
    }
    else if ( (obCombinedEprExport == "25 tonnes to 50 tonnes") && (obDrsCheckboxes == "£1 million to £2 million") && (brandOwner == "yes") && (packerFiller == "no") && (importer == "no") && (onlineMarketPlace == "no") && (distributor == "no") && (serviceProvider == "no") && (seller == "no") ){
        res.redirect('outcome-obligated?small-producer=yes&handle-supply=yes')
    }
    else if ( (obCombinedEprExport == "25 tonnes to 50 tonnes") && (obDrsCheckboxes == "£1 million to £2 million") && (brandOwner == "no") && (packerFiller == "yes") && (importer == "no") && (onlineMarketPlace == "no") && (distributor == "no") && (serviceProvider == "no") && (seller == "no") ){
        res.redirect('outcome-obligated?small-producer=yes&handle-supply=yes')
    }
    // IF NOT ANY OF THAT - THEY CONTINUE TO NATION DATA
    else if ( (obCombinedEprExport == "25 tonnes to 50 tonnes") && (obDrsCheckboxes == "£1 million to £2 million") ){
        res.redirect('nation-card?small-producer=yes&handle-supply=yes')
    }

    // NEXT THRESHOLD - SMALL PRODUCER
    else if ( (obCombinedEprExport == "50 tonnes or more") && (obDrsCheckboxes == "£1 million to £2 million") && (brandOwner == "yes") && (packerFiller == "yes") && (importer == "no") && (onlineMarketPlace == "no") && (distributor == "no") && (serviceProvider == "no") && (seller == "no") ){
        res.redirect('outcome-obligated?small-producer=yes&handle-supply=yes')
    }
    else if ( (obCombinedEprExport == "50 tonnes or more") && (obDrsCheckboxes == "£1 million to £2 million") && (brandOwner == "yes") && (packerFiller == "no") && (importer == "no") && (onlineMarketPlace == "no") && (distributor == "no") && (serviceProvider == "no") && (seller == "no") ){
        res.redirect('outcome-obligated?small-producer=yes&handle-supply=yes')
    }
    else if ( (obCombinedEprExport == "50 tonnes or more") && (obDrsCheckboxes == "£1 million to £2 million") && (brandOwner == "no") && (packerFiller == "yes") && (importer == "no") && (onlineMarketPlace == "no") && (distributor == "no") && (serviceProvider == "no") && (seller == "no") ){
        res.redirect('outcome-obligated?small-producer=yes&handle-supply=yes')
    }
    // IF NOT ANY OF THAT - THEY CONTINUE TO NATION DATA
    else if ( (obCombinedEprExport == "50 tonnes or more") && (obDrsCheckboxes == "£1 million to £2 million") ){
        res.redirect('nation-card?small-producer=yes&handle-supply=yes')
    }

    // THRESHOLD - SMALL PRODUCER
    else if ( (obCombinedEprExport == "25 tonnes to 50 tonnes") && (obDrsCheckboxes == "Over £2 million") && (brandOwner == "yes") && (packerFiller == "yes") && (importer == "no") && (onlineMarketPlace == "no") && (distributor == "no") && (serviceProvider == "no") && (seller == "no") ){
        res.redirect('outcome-obligated?small-producer=yes&handle-supply=yes')
    }
    else if ( (obCombinedEprExport == "25 tonnes to 50 tonnes") && (obDrsCheckboxes == "Over £2 million") && (brandOwner == "yes") && (packerFiller == "no") && (importer == "no") && (onlineMarketPlace == "no") && (distributor == "no") && (serviceProvider == "no") && (seller == "no") ){
        res.redirect('outcome-obligated?small-producer=yes&handle-supply=yes')
    }
    else if ( (obCombinedEprExport == "25 tonnes to 50 tonnes") && (obDrsCheckboxes == "Over £2 million") && (brandOwner == "no") && (packerFiller == "yes") && (importer == "no") && (onlineMarketPlace == "no") && (distributor == "no") && (serviceProvider == "no") && (seller == "no") ){
        res.redirect('outcome-obligated?small-producer=yes&handle-supply=yes')
    }
    // IF NOT ANY OF THAT - THEY CONTINUE TO NATION DATA
    else if ( (obCombinedEprExport == "25 tonnes to 50 tonnes") && (obDrsCheckboxes == "Over £2 million") ){
        res.redirect('nation-card?small-producer=yes&handle-supply=yes')
    }

    // NEXT THRESHOLD - LARGE PRODUCER 
    else if ( (obCombinedEprExport == "50 tonnes or more") && (obDrsCheckboxes == "Over £2 million") && (brandOwner == "yes") && (packerFiller == "yes") && (importer == "no") && (onlineMarketPlace == "no") && (distributor == "no") && (serviceProvider == "no") && (seller == "no") ){
        res.redirect('outcome-obligated?small-producer=no&handle-supply=yes')
    }
    else if ( (obCombinedEprExport == "50 tonnes or more") && (obDrsCheckboxes == "Over £2 million") && (brandOwner == "yes") && (packerFiller == "no") && (importer == "no") && (onlineMarketPlace == "no") && (distributor == "no") && (serviceProvider == "no") && (seller == "no") ){
        res.redirect('outcome-obligated?small-producer=no&handle-supply=yes')
    }
    else if ( (obCombinedEprExport == "50 tonnes or more") && (obDrsCheckboxes == "Over £2 million") && (brandOwner == "no") && (packerFiller == "yes") && (importer == "no") && (onlineMarketPlace == "no") && (distributor == "no") && (serviceProvider == "no") && (seller == "no") ){
        res.redirect('outcome-obligated?small-producer=no&handle-supply=yes')
    }
    // IF NOT ANY OF THAT - THEY CONTINUE TO NATION DATA
    else if ( (obCombinedEprExport == "50 tonnes or more") && (obDrsCheckboxes == "Over £2 million") ){
        res.redirect('nation-card?small-producer=no&handle-supply=yes')
    }
})

// Routing for Nation Tonnage
router.post('*/packaging-nation-tonnage', function (req, res) {
    var obCombinedEprExport = req.session.data['packaging-tonnage']
    var obDrsCheckboxes = req.session.data['turnover']
    var nationTonnageData = req.session.data['nation-tonnage']

    if (nationTonnageData == "Under 25 tonnes") {
        res.redirect('outcome-obligated?nation-data=no&sell-tonnage=yes')
    }
    else if (nationTonnageData == "25 tonnes or more")  {
        res.redirect('outcome-obligated?nation-data=yes&sell-tonnage=yes')
    }
})












module.exports = router