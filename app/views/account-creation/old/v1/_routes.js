const express = require('express')
const router = express.Router()
// Add your routes here - above the module.exports line



// Routing for Start Page
router.post('*/start-page', function (req, res) {
    res.redirect('govt-gateway/login')
})






module.exports = router