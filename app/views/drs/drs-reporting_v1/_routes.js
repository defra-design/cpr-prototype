const express = require('express')
const { orgDescription } = require('../../../data/session-data-defaults')
const router = express.Router()
// Add your routes here - above the module.exports line



// Producer reporting routes


router.post('*/route-reporting-producer', function (req, res) {
    var reportProducer = req.session.data['reportProducer']
    if (reportProducer.includes('plastic')){
        res.redirect('report-producer-plastic')
    }
    else if (reportProducer.includes('glass')){
        res.redirect('report-producer-glass')
    }
    else if (reportProducer.includes('aluminium')){
        res.redirect('report-producer-aluminium')
    }
    else {
        res.redirect('report-retailer-start')
    }
})


router.post('*/route-reporting-producer-plastic', function (req, res) {
    var reportProducer = req.session.data['reportProducer']
    if (reportProducer.includes('glass')){
        res.redirect('report-producer-glass')
    }
    else if (reportProducer.includes('aluminium')){
        res.redirect('report-producer-aluminium')
    }
    else if (orgDescription.includes('retailer')){
        res.redirect('report-retailer-start')
    }
    else {
        res.redirect('report-check-details')
    }
})


router.post('*/route-reporting-producer-glass', function (req, res) {
    var reportProducer = req.session.data['reportProducer']
    if (reportProducer.includes('aluminium')){
        res.redirect('report-producer-aluminium')
    }
    else if (orgDescription.includes('retailer')){
        res.redirect('report-retailer-start')
    }
    else {
        res.redirect('report-check-details')
    }
})


router.post('*/route-reporting-producer-aluminium', function (req, res) {
    var reportProducer = req.session.data['reportProducer']
    if (orgDescription.includes('retailer')){
        res.redirect('report-retailer-start')
    }
    else {
        res.redirect('report-check-details')
    }
})


// Retailer reporting routes

router.post('*/route-reporting-retailer', function (req, res) {
    var reportRetailer = req.session.data['reportRetailer']
    if (reportRetailer.includes('plastic')){
        res.redirect('report-retailer-plastic')
    }
    else if (reportRetailer.includes('glass')){
        res.redirect('report-retailer-glass')
    }
    else if (reportRetailer.includes('aluminium')){
        res.redirect('report-retailer-aluminium')
    }
    else {
        res.redirect('report-check-details')
    }
})

router.post('*/route-reporting-retailer-plastic', function (req, res) {
    var reportRetailer = req.session.data['reportRetailer']
    if (reportRetailer.includes('glass')){
        res.redirect('report-retailer-glass')
    }
    else if (reportRetailer.includes('aluminium')){
        res.redirect('report-retailer-aluminium')
    }
    else {
        res.redirect('report-check-details')
    }
})

router.post('*/route-reporting-retailer-glass', function (req, res) {
    var reportRetailer = req.session.data['reportRetailer']
    if (reportRetailer.includes('aluminium')){
        res.redirect('report-retailer-aluminium')
    }
    else {
        res.redirect('report-check-details')
    }
})

router.post('*/route-reporting-retailer-aluminium', function (req, res) {
    var reportRetailer = req.session.data['reportRetailer']
    res.redirect('report-check-details')
})


module.exports = router