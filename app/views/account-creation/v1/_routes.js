const express = require('express')
const router = express.Router()

// Routing for Page
router.post('*/route', function (req, res) {
    var actingAs = req.session.data['data-type']
    
    if (actingAs == "answer"){
        res.redirect('go-to-this-page')
    }
    else if (actingAs == "answer"){
        res.redirect('go-to-this-page')
    }
    else if (actingAs == "answer"){
        res.redirect('go-to-this-page')
    }  
})





module.exports = router