const express = require('express')
const router = express.Router()


// Routing for Page CS
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
    if (approvalCode == "Code E:  Resignation (not incapacity related)"){
        res.redirect('remove-reason-text-i-myc')
    }
    if (approvalCode == "Code F: Scheme has terminated membership (not incapacity related)"){
        res.redirect('remove-reason-text-i-myc')
    }
    if (approvalCode == "Code G: Business closure (not incapacity related)"){
        res.redirect('remove-reason-text-i-myc')
    }
    if (approvalCode == "Code H: Bankruptcy"){
        res.redirect('remove-reason-text-i-myc')
    }
    if (approvalCode == "Code I: Merged with another company (not incapacity related)"){
        res.redirect('remove-reason-text-i-myc')
    }
    if (approvalCode == "Code J: Now a subsidiary of another company (not incapacity related)"){
        res.redirect('remove-reason-text-i-myc')
    }
    if (approvalCode == "Code K:  Not ready to register by 15th April"){
        res.redirect('remove-reason-text-i-myc')
    }
    if (approvalCode == "Code L: No longer obligated (Not threshold related)"){
        res.redirect('remove-reason-text-i-myc')
    }
    else if (approvalCode == "Unable to provide a reason code"){
        res.redirect('remove-reason-text-i-myc')
    }
})



module.exports = router