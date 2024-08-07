const express = require('express')
const router = express.Router()


router.post('/size-answer', function(request, response) {

    var size = request.session.data['size']
    if (size == "England"){
        response.redirect("/task-list-2-large-producer")
    } else {
        response.redirect("/task-list-2-small-producer")
    }
})



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
        res.redirect('./producer-fees-info');
    } else if (declarationanswer === "no") {
        // Handle case where the answer is "no"
        res.redirect('./no-page');
    }
});




module.exports = router;

