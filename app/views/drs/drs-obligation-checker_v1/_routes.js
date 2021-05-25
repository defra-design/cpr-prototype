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
router.post('*/route-question-2', function (req, res) {
    var obProducerBrand = req.session.data['obProducerBrand']
    var obProducerImporter = req.session.data['obProducerImporter']
    if (obProducerBrand == "yes"){
        res.redirect('question-3')
    }
    else if (obProducerImporter == "yes"){
        res.redirect('question-3')
    }
    else {
        res.redirect('question-4')
    }
})



// Routing for question-4.html
router.post('*/route-question-4', function (req, res) {
    var obProducerBrand = req.session.data['obProducerBrand']
    var obProducerImporter = req.session.data['obProducerImporter']
    var obRetailer = req.session.data['obRetailer']
    if (obProducerBrand == "yes"){
        res.redirect('obligated')
    }
    else if (obProducerImporter == "yes"){
        res.redirect('obligated')
    }
    else if (obRetailer == "yes"){
        res.redirect('obligated')
    }
    else {
        res.redirect('not-obligated')
    }
})





module.exports = router