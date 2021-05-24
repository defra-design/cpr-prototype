const express = require('express')
const router = express.Router()
// Add your routes here - above the module.exports line



// Get the data values from session-data-defaults.js to use on any pages that use {{ defaults['VARIABLE_NAME'] }}
router.get('*/manage', function (request, response) {
    response.locals.defaults = require('../../../data/session-data-defaults.js')
    response.render('v4/defra-id-manage/manage')
})

router.get('*/manage-team', function (request, response) {
    response.locals.defaults = require('../../../data/session-data-defaults.js')
    response.render('v4/defra-id-manage/manage-team')
})

router.get('*/manage-org', function (request, response) {
    response.locals.defaults = require('../../../data/session-data-defaults.js')
    response.render('v4/defra-id-manage/manage-org')
})

router.get('*/manage-org-update', function (request, response) {
    response.locals.defaults = require('../../../data/session-data-defaults.js')
    response.render('v4/defra-id-manage/manage-org-update')
})

router.get('*/manage-personal-update', function (request, response) {
    response.locals.defaults = require('../../../data/session-data-defaults.js')
    response.render('v4/defra-id-manage/manage-personal-update')
})

module.exports = router