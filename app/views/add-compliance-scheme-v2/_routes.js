const express = require('express')
const router = express.Router()

// Routing for compliance scheme
router.post('*/compliance-scheme-or-not', function (req, res) {
    
    var complianceScheme = req.session.data['compliance-scheme']
    
    if (complianceScheme == "yes"){
        res.redirect('selected-yes')
    }
    else if (complianceScheme == "no") {
        res.redirect('selected-no')
    }
})
router.post('*/choice-of-compliance-scheme-operator', function (req, res) {
    
    var complianceSchemeOperator = req.session.data['compliance-scheme-operator']
    
    if ( complianceSchemeOperator== "operatorname-BBPA"){
        res.redirect('clarify-compliance-scheme-nameBiffa')
    }
   
    if (complianceSchemeOperator == "operatorname-Clarity"){
        res.redirect('clarify-compliance-scheme-nameClarityEnvironmental')
    }
    if (complianceSchemeOperator == "operatorname-Co2"){
        res.redirect('clarify-compliance-scheme-nameCo2')
    }
    if (complianceSchemeOperator == "operatorname-Comply"){
        res.redirect('clarify-compliance-scheme-nameComply')
    }
    if (complianceSchemeOperator == "operatorname-Complypak"){
        res.redirect('clarify-compliance-scheme-nameComplypak')
    }
    if (complianceSchemeOperator == "operatorname-Ecosurety"){
        res.redirect('clarify-compliance-scheme-nameEcosurety')
    }
    if (complianceSchemeOperator == "operatorname-EcosuretyScotland"){
        res.redirect('ECOSURETYSCOTLANDconfirm')
    }
    if (complianceSchemeOperator == "operatorname-EPRUK"){
        res.redirect('clarify-compliance-scheme-nameEPRUK')
    }
    if (complianceSchemeOperator == "operatorname-KITE"){
        res.redirect('clarify-compliance-scheme-nameKITE')
    }
    if (complianceSchemeOperator == "operatorname-NIPAK"){
        res.redirect('NIPAKconfirm')
    }
    if (complianceSchemeOperator == "operatorname-NIPAK-SCOTLAND"){
        res.redirect('NIPAKscotlandconfirm')
    }
    if (complianceSchemeOperator == "operatorname-PAPERPAK"){
        res.redirect('clarify-compliance-scheme-namePAPERPAK')
    }
    if (complianceSchemeOperator == "operatorname-PROPERPAK"){
        res.redirect('clarify-compliance-scheme-namePROPERPAK')
    }
    if (complianceSchemeOperator == "operatorname-PROPERPAK-SCOTLAND"){
        res.redirect('PROPERPAKSCOTLANDconfirm')
    }
    if (complianceSchemeOperator == "operatorname-RECYCLE-PAK"){
        res.redirect('clarify-compliance-scheme-nameRECYCLE-PAK')
    }
    if (complianceSchemeOperator == "operatorname-RECYCLE-WALES"){
        res.redirect('RECYCLEWALESconfirm')
    }
    if (complianceSchemeOperator == "operatorname-RECYCLING-LIVES"){
        res.redirect('RECYLIVESconfirm')
    }
    if (complianceSchemeOperator == "operatorname-RESC"){
        res.redirect('clarify-compliance-scheme-nameRESC')
    }
    if (complianceSchemeOperator == "operatorname-SMART"){
        res.redirect('clarify-compliance-scheme-nameSMART')
    }
    if (complianceSchemeOperator == "operatorname-SYNERGY"){
        res.redirect('clarify-compliance-scheme-nameSYNERGY')
    }
    if (complianceSchemeOperator == "operatorname-TGBN"){
        res.redirect('clarify-compliance-scheme-nameTGBN')
    }
    if (complianceSchemeOperator == "operatorname-THEWASTEPACK"){
        res.redirect('clarify-compliance-scheme-nameTHEWASTEPACK')
    }
    if (complianceSchemeOperator == "operatorname-VALPAK"){
        res.redirect('clarify-compliance-scheme-nameVALPAK')
    }
    if (complianceSchemeOperator == "operatorname-VALPAKSCOTLAND"){
        res.redirect('VALPAKSCOTLANDconfirm')
    }
    if (complianceSchemeOperator == "operatorname-WASTECARE"){
        res.redirect('WASTECAREconfirm')
    }
    if (complianceSchemeOperator == "operatorname-VEOLIA"){
        res.redirect('VEOLIAconfirm')
    }
    if (complianceSchemeOperator == "operatorname-WASTEPACK"){
        res.redirect('clarify-compliance-scheme-nameWASTEPACK')
    }
    if (complianceSchemeOperator == "operatorname-WAYSTREME"){
        res.redirect('WASTESTREMEconfirm')
    }
    if (complianceSchemeOperator == "operatorname-VALPAKSCOTLAND"){
        res.redirect('clarify-compliance-scheme-nameVALPAKSCOTLAND')
    }
    if (complianceSchemeOperator == "operatorname-compliancelink"){
        res.redirect('Wastepack1confirm')
    }
    if (complianceSchemeOperator == "operatorname-ethical"){
        res.redirect('Tgbn1confirm')
    }
    if (complianceSchemeOperator == "operatorname-scotpak"){
        res.redirect('NIPAKscotlandconfirm')
    }
    if (complianceSchemeOperator == "operatorname-sustain"){
        res.redirect('BBPAconfirm')
    }
   
})
router.post('*/compliance-scheme-choose-new-or-remove', function (req, res) {
    
    var complianceSchemeAdd = req.session.data['compliance-scheme-add']
    
    if (complianceSchemeAdd == "yes"){
        res.redirect('selected-yes')
    }
    else if (complianceSchemeAdd == "no") {
        res.redirect('manage-compliance-scheme-confirm-removal')
    }
})
router.post('*/clarify-compliance-scheme', function (req, res) {
    
    var clarifyBiffa = req.session.data['clarify-biffa']
    
    if (clarifyBiffa == "clarify-cs1"){
        res.redirect('Biffa1confirm')
    }
    else if (clarifyBiffa == "clarify-cs2") {
        res.redirect('Biffa2confirm')
    }
})
router.post('*/clarify-compliance-schemeclarity', function (req, res) {
    
    var clarifyClarity = req.session.data['clarify-clarity']
    
    if (clarifyClarity == "clarify-cs1"){
        res.redirect('Clarity1confirm')
    }
    else if (clarifyClarity == "clarify-cs2") {
        res.redirect('Clarity2confirm')
    }
})
router.post('*/clarify-compliance-schemeco2', function (req, res) {
    
    var clarifyCo2 = req.session.data['clarify-co2']
    
    if (clarifyCo2 == "clarify-cs1"){
        res.redirect('Co21confirm')
    }
    else if (clarifyCo2 == "clarify-cs2") {
        res.redirect('Co22confirm')
    }
})
router.post('*/clarify-compliance-schemecomply', function (req, res) {
    
    var clarifyComply = req.session.data['clarify-comply']
    
    if (clarifyComply == "clarify-cs1"){
        res.redirect('Comply1confirm')
    }
    else if (clarifyComply == "clarify-cs2") {
        res.redirect('Comply2confirm')
    }
})
router.post('*/clarify-compliance-schemecomplypak', function (req, res) {
    
    var clarifyComplypak = req.session.data['clarify-complypak']
    
    if (clarifyComplypak == "clarify-cs1"){
        res.redirect('Complypak1confirm')
    }
    else if (clarifyComplypak == "clarify-cs2") {
        res.redirect('Complypak2confirm')
    }
})
router.post('*/clarify-compliance-schemeecosurety', function (req, res) {
    
    var clarifyEcosurety = req.session.data['clarify-ecosurety']
    
    if (clarifyEcosurety == "clarify-cs1"){
        res.redirect('Ecosurety1confirm')
    }
    else if (clarifyEcosurety == "clarify-cs2") {
        res.redirect('Ecosurety2confirm')
    }
})
router.post('*/clarify-compliance-schemeepr', function (req, res) {
    
    var clarifyEpr = req.session.data['clarify-epr']
    
    if (clarifyEpr == "clarify-cs1"){
        res.redirect('Epr1confirm')
    }
    else if (clarifyEpr == "clarify-cs2") {
        res.redirect('Epr2confirm')
    }
})
router.post('*/clarify-compliance-schemekite', function (req, res) {
    
    var clarifyKite = req.session.data['clarify-kite']
    
    if (clarifyKite == "clarify-cs1"){
        res.redirect('Kite1confirm')
    }
    else if (clarifyKite == "clarify-cs2") {
        res.redirect('Kite2confirm')
    }
})
router.post('*/clarify-compliance-schemepaperpak', function (req, res) {
    
    var clarifyPaperpak = req.session.data['clarify-paperpak']
    
    if (clarifyPaperpak == "clarify-cs1"){
        res.redirect('Paperpak1confirm')
    }
    else if (clarifyPaperpak == "clarify-cs2") {
        res.redirect('Paperpak2confirm')
    }
})
router.post('*/clarify-compliance-schemerecyclepak', function (req, res) {
    
    var clarifyRecyclepak = req.session.data['clarify-recyclepak']
    
    if (clarifyRecyclepak == "clarify-cs1"){
        res.redirect('Recyclepak1confirm')
    }
    if (clarifyRecyclepak == "clarify-cs2") {
        res.redirect('Recyclepak2confirm')
    }
})
router.post('*/clarify-compliance-schemeresc', function (req, res) {
    
    var clarifyResc = req.session.data['clarify-resc']
    
    if (clarifyResc == "clarify-cs1"){
        res.redirect('Resc1confirm')
    }
    else if (clarifyResc == "clarify-cs2") {
        res.redirect('Resc2confirm')
    }
})
router.post('*/clarify-compliance-schemesmart', function (req, res) {
    
    var clarifySmart = req.session.data['clarify-smart']
    
    if (clarifySmart == "clarify-cs1"){
        res.redirect('Smart1confirm')
    }
    else if (clarifySmart == "clarify-cs2") {
        res.redirect('Smart2confirm')
    }
})
router.post('*/clarify-compliance-schemesynergy', function (req, res) {
    
    var clarifySynergy = req.session.data['clarify-synergy']
    
    if (clarifySynergy == "clarify-cs1"){
        res.redirect('Synergy1confirm')
    }
    else if (clarifySynergy == "clarify-cs2") {
        res.redirect('Synergy2confirm')
    }
})
router.post('*/clarify-compliance-schemetgbn', function (req, res) {
    
    var clarifyTgbn = req.session.data['clarify-tgbn']
    
    if (clarifyTgbn == "clarify-cs1"){
        res.redirect('Tgbn1confirm')
    }
    if (clarifyTgbn == "clarify-cs2") {
        res.redirect('Tgbn2confirm')
    }
    if (clarifyTgbn == "clarify-cs3") {
        res.redirect('Tgbn3confirm')
    }
})
router.post('*/clarify-compliance-schemethewastepack', function (req, res) {
    
    var clarifyThewastepack = req.session.data['clarify-thewastepack']
    
    if (clarifyThewastepack == "clarify-cs1"){
        res.redirect('Thewastepack1confirm')
    }
    else if (clarifySynergy == "clarify-cs2") {
        res.redirect('Thewastepack2confirm')
    }
})


router.post('*/clarify-compliance-valpak', function (req, res) {
    
    var clarifyValpak = req.session.data['clarify-valpak']
    
    if (clarifyValpak == "clarify-cs1"){
        res.redirect('Valpak1confirm')
    }
    if (clarifyValpak == "clarify-cs2") {
        res.redirect('Valpak2confirm')
    }
    if (clarifyValpak == "clarify-cs3") {
        res.redirect('VALPAKSCOTLANDconfirm')
    }
})
router.post('*/clarify-compliance-schemewastepack', function (req, res) {
    
    var clarifyWastepack = req.session.data['clarify-wastepack']
    
    if (clarifyWastepack == "clarify-cs1"){
        res.redirect('Wastepack1confirm')
    }
    if (clarifyWastepack == "clarify-cs2") {
        res.redirect('Wastepack2confirm')
    }
    if (clarifyWastepack == "clarify-cs3") {
        res.redirect('Wastepack3confirm')
    }
})
router.post('*/clarify-compliance-schemeveolia', function (req, res) {
    
    var clarifyVeolia = req.session.data['clarify-veolia']
    
    if (clarifyVeolia== "clarify-cs1"){
        res.redirect('PROPERPAKconfirm')
    }
    if (clarifyVeolia == "clarify-cs2") {
        res.redirect('PROPERPAKSCOTLANDconfirm')
    }
    if (clarifyVeolia == "clarify-cs3") {
        res.redirect('VEOLIAconfirm')
    }
})
module.exports = router