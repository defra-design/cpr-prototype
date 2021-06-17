const express = require('express')
const router = express.Router()
// Add your routes here - above the module.exports line



// Routing for question-1.html
router.post('*/route-question-1', function (req, res) {
    var obDrsCheckboxes = req.session.data['obDrsCheckboxes']
    if (obDrsCheckboxes == "no"){
        res.redirect('question-2')
    }
    else if (obDrsCheckboxes == "yes"){
        res.redirect('question-2b')
    }
})


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
        res.redirect('question-4b')
    }
})



module.exports = router