const express = require('express');
const router = express.Router();

// Routing for Page
router.post('*/re-upload-org-details-question', function (req, res) {
    var reSubmitOrgDetails = req.session.data['re-upload-org-details'];
    
    if (reSubmitOrgDetails === "yes") {
        res.redirect('./upload-file?re-upload=yes');
    } else {
        res.redirect('../report-org-details-task-list?brand-detail-complete=no&brand-details-errors=yes');
    }
});

// ?brand-detail-complete=yes
// ?brand-detail-complete=no&brand-details-errors=yes
// ?brand-detail-complete=no&brand-details-errors=no

module.exports = router;