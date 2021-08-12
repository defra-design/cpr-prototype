const express = require('express')
const router = express.Router()
// Add your routes here - above the module.exports line





// Routing for question-1.html
router.post('*/route-q1', function (req, res) {
    var obCheckTurnover = req.session.data['obCheckTurnover']
    if (obCheckTurnover == "yes"){
        res.redirect('question-2')
    }
    else {
        res.redirect('step-4')
    }
})


// Routing for question-2.html
router.post('*/route-q2', function (req, res) {
    var obCheckExport = req.session.data['obCheckExport']
    if (obCheckExport == "yes"){
        res.redirect('question-3a')
    }
    else {
        res.redirect('question-3b')
    }
})


// Routing for question-3a.html
router.post('*/route-q3a', function (req, res) {
    var obCheckPOM = req.session.data['obCheckPOM']
    if (obCheckPOM == "less25"){
        res.redirect('step-4')
    }
    else {
        res.redirect('step-5')
    }
})


// Routing for question-3b.html
router.post('*/route-q3b', function (req, res) {
    var obCheckProduce = req.session.data['obCheckProduce']
    if (obCheckProduce == "less25"){
        res.redirect('step-4')
    }
    else {
        res.redirect('step-5')
    }
})



module.exports = router