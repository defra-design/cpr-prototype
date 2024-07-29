const express = require('express')
const router = express.Router()
// Add your routes here - above the module.exports line



// Routing for producer status -----> https://defra-cpr-prototype.herokuapp.com/small-producers/self-declare-2-status <------
router.post('*/self-declare-2-status', function (req, res) {
    var userGroup = req.session.data['status']
    
    if (actingAs == "small-producer"){
        res.redirect('self-declare-3-warning')
    }
    else if (actingAs == "large-producer"){
        res.redirect('self-declare-3-warning')
    }
    else if (actingAs == "na"){
        res.redirect('self-declare-4-obligation-checker')
    }  
})














module.exports = router