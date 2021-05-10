const express = require('express')
const router = express.Router()
// Add your routes here - above the module.exports line



// Get the data values from session-data-defaults.js to use on the page
router.get('*/manage', function (request, response) {
    response.locals.defaults = require('../../../data/session-data-defaults.js')
    response.render('v3/defra-id-manage/manage')
})

module.exports = router