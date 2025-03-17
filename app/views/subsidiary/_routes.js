const express = require('express')
const router = express.Router()


// Routing for Page CS - all go to the same place atm this is all placeholder if needed
router.post('*/remove-reason', function (req, res) {
    var approvalCode = req.session.data['reason']
    
    if (approvalCode == "Code A: Administration/Receivership"){
        res.redirect('remove-reason-text-i-myc')
    }
    if (approvalCode == "Code B: Liquidation/Dissolution"){
        res.redirect('remove-reason-text-i-myc')
    }
    if (approvalCode == "Code C: Dropped below turnover threshold"){
        res.redirect('remove-reason-text-i-myc')
    }
    if (approvalCode == "Code D:  Dropped below tonnage threshold"){
        res.redirect('remove-reason-text-i-myc')
    }
    if (approvalCode == "Code E:  Resignation"){
        res.redirect('remove-reason-text-i-myc')
    }
    if (approvalCode == "Code F: Scheme has terminated membership"){
        res.redirect('remove-reason-text-i-myc')
    }
    if (approvalCode == "Code G: Business closure"){
        res.redirect('remove-reason-text-i-myc')
    }
    if (approvalCode == "Code H: Bankruptcy"){
        res.redirect('remove-reason-text-i-myc')
    }
    if (approvalCode == "Code I: Merged with another company"){
        res.redirect('remove-reason-text-i-myc')
    }
    if (approvalCode == "Code J: Now a subsidiary of another company"){
        res.redirect('remove-reason-text-i-myc')
    }
    if (approvalCode == "Code K:  Not ready to register by 15th April"){
        res.redirect('remove-reason-text-i-myc')
    }
    if (approvalCode == "Code L: No longer obligated"){
        res.redirect('remove-reason-text-i-myc')
    }
})

// Routing for Page CS - all go to the same place atm this is all placeholder if needed
router.post('*/remove-reason-dr', function (req, res) {
    var approvalCode = req.session.data['reason']
    
    if (approvalCode == "Code A: Administration/Receivership"){
        res.redirect('remove-reason-text-i-myc')
    }
    if (approvalCode == "Code B: Liquidation/Dissolution"){
        res.redirect('remove-reason-text-i-myc')
    }
    if (approvalCode == "Code C: Dropped below turnover threshold"){
        res.redirect('remove-reason-text-i-myc')
    }
    if (approvalCode == "Code D:  Dropped below tonnage threshold"){
        res.redirect('remove-reason-text-i-myc')
    }
    if (approvalCode == "Code E:  Resignation"){
        res.redirect('remove-reason-text-i-myc')
    }
    if (approvalCode == "Code F: Scheme has terminated membership"){
        res.redirect('remove-reason-text-i-myc')
    }
    if (approvalCode == "Code G: Business closure"){
        res.redirect('remove-reason-text-i-myc')
    }
    if (approvalCode == "Code H: Bankruptcy"){
        res.redirect('remove-reason-text-i-myc')
    }
    if (approvalCode == "Code I: Merged with another company"){
        res.redirect('remove-reason-text-i-myc')
    }
    if (approvalCode == "Code J: Now a subsidiary of another company"){
        res.redirect('remove-reason-text-i-myc')
    }
    if (approvalCode == "Code K:  Not ready to register by 15th April"){
        res.redirect('remove-reason-text-i-myc')
    }
    if (approvalCode == "Code L: No longer obligated"){
        res.redirect('remove-reason-text-i-myc')
    }
})

// Routing for Page leave CS - all go to the same place atm this is all placeholder if needed
router.post('*/remove-reason-pcs', function (req, res) {
    var approvalCode = req.session.data['change']
    
    if (approvalCode == "Changed compliance scheme"){
        res.redirect('remove-reason-i-myc-cs')
    }
    if (approvalCode == "No longer using a compliance scheme"){
        res.redirect('confirmation-remove-member-myc')
    }
})



module.exports = router