const express = require('express')
const router = express.Router()



// Routing for Page
router.post('*/classification', function (req, res) {
    var calculation = req.session.data['calcRun']
    
    if (calculation == "outputDelete"){
        res.redirect('output-4')
    }
    else if (calculation == "outputPlay"){
        res.redirect('output-2')
    }
    else if (calculation == "outputClassify"){
        res.redirect('output-8')
    }
    else if (calculation == "outputInitialRun"){
        res.redirect('output-3')
    }
    else if (calculation == "outputInterimRecalculationRun"){
        res.redirect('output-5')
    }
    else if (calculation == "outputFinalRecalculationRun"){
        res.redirect('output-6')
    }
    else if (calculation == "outputFinalRun"){
        res.redirect('output-7')
    }
    
})


module.exports = router