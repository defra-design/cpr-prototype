const express = require('express')
const router = express.Router()

// Routing for Page
router.post('*/upload-new-file', function (req, res) {
    var uploadNew = req.session.data['upload-new']
    
    if (uploadNew == "Yes"){
        res.redirect('upload-file.html')
    }
    else if (uploadNew == "No"){
        res.redirect('file-uploaded')
    }
})


module.exports = router