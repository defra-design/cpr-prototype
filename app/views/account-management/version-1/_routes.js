const express = require('express')
const router = express.Router()

// Routing for account management


    
router.post('*/what-is-the-name-of-team-member', function (req, res) {
    
    var What= req.session.data['what']
    
    if (complianceScheme == "yes"){
        res.redirect('Add-team-member-email')
    }
    else if (complianceScheme == "no") {
        res.redirect('Add-team-member-email')
    }
})
module.exports = router