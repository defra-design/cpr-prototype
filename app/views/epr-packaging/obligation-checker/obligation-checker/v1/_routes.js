const express = require('express')
const router = express.Router()
// Add your routes here - above the module.exports line



// Routing for question-1.html
router.post('*/route-question-1', function (req, res) {
    var obDrsCheckboxes = req.session.data['obCombinedTurnover']
    if (obDrsCheckboxes == "no"){
        res.redirect('outcome-not-obligated')
    }
    else if (obDrsCheckboxes == "yes"){
        res.redirect('question-2')
    }
})


// Routing for question-2.html
router.post('*/route-question-2', function (req, res) {
    var obCombinedTurnover = req.session.data['activities']
    if (obCombinedTurnover == "none"){
        res.redirect('outcome-not-obligated')
    }
    else {
        res.redirect('question-3')
    }
})



// Routing for question-3.html
router.post('*/route-question-3', function (req, res) {
    var obCombinedEprExport = req.session.data['tonnage']
    if (obCombinedEprExport == "under-25"){
        res.redirect('outcome-not-obligated')
    }
    else if (obCombinedEprExport == "25-and-over"){
        res.redirect('outcome-obligated')
    }
})



module.exports = router