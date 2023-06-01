const express = require('express')
const router = express.Router()


// Routing for Page
router.post('*/remove-member', function (req, res) {
    var accessRole = req.session.data['confirm-removal-from-account']
    
    if (accessRole == "yes"){
        res.redirect('../all-members-updated/all-scheme-members?notification=yes')
    }
    else if (accessRole == "no") {
        res.redirect('./scheme-member')
    }
})





module.exports = router