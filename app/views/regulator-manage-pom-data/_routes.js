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




module.exports = router