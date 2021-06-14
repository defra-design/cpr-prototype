const express = require('express')
const router = express.Router()
// Add your routes here - above the module.exports line




// Routing for question-2.html
router.post('*/route-question-2', function (req, res) {
    var obCombinedTurnover = req.session.data['obCombinedTurnover']
    if (obCombinedTurnover == "yes"){
        res.redirect('question-3')
    }
    else if (obCombinedTurnover == "no"){
        res.redirect('results')
    }
})



// Routing for question-3.html
router.post('*/route-question-3', function (req, res) {
    var obCombinedEprExport = req.session.data['obCombinedEprExport']
    if (obCombinedEprExport == "yes"){
        res.redirect('question-4')
    }
    else if (obCombinedEprExport == "no"){
        res.redirect('results')
    }
})



module.exports = router