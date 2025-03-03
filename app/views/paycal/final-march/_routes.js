const express = require('express')
const router = express.Router()



// Routing for Page
router.post('*/classification', function (req, res) {
    var calculation = req.session.data['calcRun']
    
    if (calculation == "outputDelete"){
        res.redirect('delete-run')
    }
    else if (calculation == "outputPlay"){
        res.redirect('output-2')
    }
    else if (calculation == "outputClassify"){
        res.redirect('classify-initial-run')
    }
    else if (calculation == "outputInitialRun"){
        res.redirect('classify-initial-complete')
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
    else if (calculation == "outputTestRun"){
        res.redirect('testRun')
    }
    
})


module.exports = router