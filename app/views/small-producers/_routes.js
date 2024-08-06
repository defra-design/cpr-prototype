const express = require('express')
const router = express.Router()


// Routing for Page /small-producers/self-declare-2-status
router.post('*/selfdeclare', function (req, res) {
    var sizeorganisation = req.session.data['sizeorganisation'];  
    if (sizeorganisation === "smallproducer") {
        // Handle smallproducer case
        res.redirect('./task-list-2');
    } else if (sizeorganisation === "largeproducer") {
        // Handle largeproducer case
        res.redirect('./task-list-2');
    }
});




// Routing for Page /small-producers/self-declare-3-warning-2
router.post('*/selfdeclarenext', function (req, res) {
    var declarationanswer = req.session.data['declarationanswer'];  
    if (declarationanswer === "yes") {
        // Handle case where the answer is "yes"
        res.redirect('./self-declare-5-success');
    } else if (declarationanswer === "no") {
        // Handle case where the answer is "no"
        res.redirect('./no-page');
    }
});


// Routing for Page /small-producers/fees-confirmation-question
router.post('*/feesnext', function (req, res) {
    var declarationanswer = req.session.data['declarationanswer'];  
    if (declarationanswer === "yes") {
        // Handle case where the answer is "yes"
        res.redirect('./fees-task-list-1');
    } else if (declarationanswer === "no") {
        // Handle case where the answer is "no"
        res.redirect('./no-page');
    }
});




module.exports = router;

