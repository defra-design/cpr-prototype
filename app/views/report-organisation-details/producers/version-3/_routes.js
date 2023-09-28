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

// Routing for Page
router.post('*/ready-or-not', function (req, res) {
    var readyOrNot = req.session.data['files-ready'];
    
    if (readyOrNot === "yes") {
        res.redirect('./org-details/upload-file');
    } else {
        res.redirect('./before-you-start');
    }
});

// ?brand-detail-complete=yes
// ?brand-detail-complete=no&brand-details-errors=yes
// ?brand-detail-complete=no&brand-details-errors=no

module.exports = router;