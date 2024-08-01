const express = require('express')
const router = express.Router()
// Add your routes here - above the module.exports line

// Routing for self-declare-2-status.html
router.post('*/self-declare-2-status', function (req, res) {
    var regChoice = req.session.data['sizeorganisation']
    if (regChoice == "sizeorganisation"){
        res.redirect('self-declare-3-warning')
    }
    if (regChoice == "sizeorganisation-2"){
        res.redirect('self-declare-3-warning')
    }
    else {
        res.redirect('self-declare-4-obligation-checker')
    }
})




module.exports = router