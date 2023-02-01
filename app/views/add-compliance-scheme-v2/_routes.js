const express = require('express')
const router = express.Router()

// Routing for compliance scheme-v2
router.post('*/compliance-scheme-or-not', function (req, res) {
    
    var complianceScheme = req.session.data['compliance-scheme']
    
    if (complianceScheme == "yes"){
        res.redirect('selected-yes')
    }
    else if (complianceScheme == "no") {
        res.redirect('selected-no')
    }
})
router.post('*/confirmcs', function (req, res) {
    
    var cconfirmCs = req.session.data['compliance-scheme-operator']
    
    if (cconfirmCs == "operatorname-biffpack1"){
        res.redirect('Biffa1')
    }
    if (cconfirmCs == "operatorname-biffpack2") {
        res.redirect('Biffa2confirm')
    }
    if (cconfirmCs == "operatorname-Co2") {
        res.redirect('Co21confirm')
    }
    if (cconfirmCs == "operatorname-Co22") {
        res.redirect('Co22confirm')
    }
    if (cconfirmCs == "operatorname-compliancelink") {
        res.redirect('Wastepack1confirm')
    }
    if (cconfirmCs == "operatorname-Comply") {
        res.redirect('Comply1confirm')
    }
    if (cconfirmCs == "operatorname-Comply2") {
        res.redirect('Comply2confirm')
    }
    if (cconfirmCs == "operatorname-Clarity") {
        res.redirect('Clarity1confirm')
    }if (cconfirmCs == "operatorname-Clarity2") {
        res.redirect('Clarity2confirm')
    }
    if (cconfirmCs == "operatorname-Complypak") {
        res.redirect('Complypak1confirm')
    }
    if (cconfirmCs == "operatorname-Complypak2") {
        res.redirect('Complypak2confirm')
    }
    if (cconfirmCs == "operatorname-Ecosurety") {
        res.redirect('Ecosurety1confirm')
    }
    if (cconfirmCs == "operatorname-Ecosurety2") {
        res.redirect('Ecosurety2confirm')
    }
    if (cconfirmCs == "operatorname-Ecosurety3") {
        res.redirect('ECOSURETYSCOTLANDconfirm')
    }
    if (cconfirmCs == "operatorname-WAYSTREME") {
        res.redirect('WASTESTREMEconfirm')
    }
    if (cconfirmCs == "operatorname-EPRUK") {
        res.redirect('Epr1confirm')
    }
    if (cconfirmCs == "operatorname-EPRUK2") {
        res.redirect('Epr2confirm')
    }
    if (cconfirmCs == "operatorname-ethical") {
        res.redirect('Tgbn1confirm')
    }
    if (cconfirmCs == "operatorname-KITE") {
        res.redirect('Kite1confirm')
    }
    if (cconfirmCs == "operatorname-KITE2") {
        res.redirect('Kite2confirm')
    }
    if (cconfirmCs == "operatorname-NIPAK") {
        res.redirect('NIPAKconfirm')
    }
    if (cconfirmCs == "operatorname-WASTECARE") {
        res.redirect('WASTECAREconfirm')
    }
    if (cconfirmCs == "operatorname-PAPERPAK") {
        res.redirect('Paperpak1confirm')
    }
    if (cconfirmCs == "operatorname-PAPERPAK2") {
        res.redirect('Paperpak2confirm')
    }
    if (cconfirmCs == "operatorname-TGBN") {
        res.redirect('Tgbn2confirm')
    }
    if (cconfirmCs == "operatorname-TGBN2") {
        res.redirect('Tgbn3confirm')
    }
    if (cconfirmCs == "operatorname-RECYCLE-PAK") {
        res.redirect('Recyclepak1confirm')
    }
    if (cconfirmCs == "operatorname-RECYCLE-PAK2") {
        res.redirect('Recyclepak2confirm')
    }
    if (cconfirmCs == "operatorname-RECYCLE-WALES") {
        res.redirect('RECYCLEWALESconfirm')
    }
    if (cconfirmCs == "operatorname-RECYCLING-LIVES") {
        res.redirect('RECYLIVESconfirm')
    }
    if (cconfirmCs == "operatorname-RESC") {
        res.redirect('Resc1confirm')
    }
    if (cconfirmCs == "operatorname-RESC2") {
        res.redirect('Resc2confirm')
    }
    if (cconfirmCs == "operatorname-scotpak") {
        res.redirect('NIPAKscotlandconfirm')
    }
    if (cconfirmCs == "operatorname-SMART") {
        res.redirect('Smart1confirm')
    }
    if (cconfirmCs == "operatorname-SMART2") {
        res.redirect('Smart2confirm')
    }
    if (cconfirmCs == "operatorname-sustain") {
        res.redirect('BBPAconfirm')
    }
    if (cconfirmCs == "operatorname-sws") {
        res.redirect('Wastepack2confirm')
    } if (cconfirmCs == "operatorname-SYNERGY") {
        res.redirect('Synergy1confirm')
    }
    if (cconfirmCs == "operatorname-SYNERGY2") {
        res.redirect('Synergy2confirm')
    }
    if (cconfirmCs == "operatorname-VALPAK") {
        res.redirect('Valpak1confirm')
    }
    if (cconfirmCs == "operatorname-VALPAK2") {
        res.redirect('Valpak2confirm')
    }
    if (cconfirmCs == "operatorname-VALPAK3") {
        res.redirect('VALPAKSCOTLANDconfirm')
    }
    if (cconfirmCs == "operatorname-PROPERPAK") {
        res.redirect('PROPERPAKconfirm')
    }
    if (cconfirmCs == "operatorname-PROPERPAK2") {
        res.redirect('PROPERPAKSCOTLANDconfirm')
    }
    if (cconfirmCs == "operatorname-WASTEPACK") {
        res.redirect('Thewastepack1confirm')
    }
    if (cconfirmCs == "operatorname-WASTEPACK2") {
        res.redirect('Wastepack3confirm')
    }
    if (cconfirmCs == "operatorname-WASTEPACK3") {
        res.redirect('Thewastepack2confirm')
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



module.exports = router