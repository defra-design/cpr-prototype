const express = require('express')
const router = express.Router()
// Add your routes here - above the module.exports line


// Routing for Organisation type
router.post('*/self-declare-2-status', function (req, res) {
    var actingAs = req.session.data['status']
    
    if (actingAs == "small-producer"){
        res.redirect('self-declare-3-warning')
    }
    else if (actingAs == "Slarge-producer"){
        res.redirect('self-declare-3-warning')
    }
    else if (actingAs == "na"){
        res.redirect('self-declare-4-obligation-checker')
    }  
})













module.exports = router