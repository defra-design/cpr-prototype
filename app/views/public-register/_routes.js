const express = require('express')
const router = express.Router()

// Routing for compliance scheme
router.post('*/public-register/search-criteria',function (req,res) {
res.redirect ('/public-register/download')


}  )

module.exports = router