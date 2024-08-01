const express = require('express')
const router = express.Router()
// Add your routes here - above the module.exports line

// Routing for self-declare-2-status.html
router.post('/self-declare-2-status', function(request, response) {
    var sizeorganisation = request.session.data['sizeorganisation']
    
    if (sizeorganisation === "largeproducers"){
        response.redirect("self-declare-3-warning")
    } else if (sizeorganisation === "smallproducers"){
        response.redirect("self-declare-3-warning")
    } else {
        response.redirect("self-declare-4-obligation-checker")
    }
})

module.exports = router
