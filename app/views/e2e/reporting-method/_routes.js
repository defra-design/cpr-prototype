const express = require('express')
const router = express.Router()
// Add your routes here - above the module.exports line




// Routing for method-question-01.html
router.post('*/route-method-question-01', function (req, res) {
    var methodBusinessSoftware = req.session.data['methodBusinessSoftware']
    if (methodBusinessSoftware == "yes"){
        res.redirect('method-question-02')
    }
    else {
        res.redirect('select-alternate-method')
    }
})


// Routing for method-question-02.html
router.post('*/route-method-question-02', function (req, res) {
    var methodSoftwareIntegration = req.session.data['methodSoftwareIntegration']
    if (methodSoftwareIntegration == "yes"){
        res.redirect('reporting-method-results')
    }
    else {
        res.redirect('select-alternate-method')
    }
})



module.exports = router