const express = require('express')
const router = express.Router()


router.use('/', (req, res, next) => {
    res.locals.currentURL = req.originalUrl; //current screen
    res.locals.prevURL = req.get('Referrer'); // previous screen
    req.folder = req.originalUrl.split('/')[1]; //folder, e.g. 'current'
    req.subfolder = req.originalUrl.split('/')[2]; //sub-folder e.g. 'service'
    res.locals.folder = req.folder; // what folder the url is
    res.locals.subfolder = req.subfolder; // what subfolder the URL is in
    console.log('folder : ' + res.locals.folder + ', subfolder : ' + res.locals.subfolder  );
    console.log('Previous page: ' + res.locals.prevURL + " Current page: " + res.locals.currentURL );
    next();
});


// Folder specific routes
router.use('/v1/epr', require('./views/v1/epr/_routes'));
router.use('/v1/defra-id', require('./views/v1/defra-id/_routes'));

router.use('/v2/epr', require('./views/v2/epr/_routes'));
router.use('/v2/defra-id', require('./views/v2/defra-id/_routes'));
router.use('/v2/defra-id-manage', require('./views/v2/defra-id-manage/_routes'));
router.use('/v2/epr-obligation-checker', require('./views/v2/epr-obligation-checker/_routes'));

router.use('/v3/epr', require('./views/v3/epr/_routes'));
router.use('/v3/defra-id', require('./views/v3/defra-id/_routes'));
router.use('/v3/defra-id-manage', require('./views/v3/defra-id-manage/_routes'));

router.use('/v4/epr', require('./views/v4/epr/_routes'));
router.use('/v4/defra-id', require('./views/v4/defra-id/_routes'));
router.use('/v4/defra-id-manage', require('./views/v4/defra-id-manage/_routes'));

router.use('/v5/epr', require('./views/v5/epr/_routes'));
router.use('/v5/defra-id', require('./views/v5/defra-id/_routes'));
router.use('/v5/defra-id-manage', require('./views/v5/defra-id-manage/_routes'));

router.use('/account-creation/old/idm1', require('./views/account-creation/old/idm1/_routes'));
router.use('/account-creation/old/v1', require('./views/account-creation/old/v1/_routes'));
router.use('/account-creation/old/v2', require('./views/account-creation/old/v2/_routes'));


router.use('/account-creation/v1', require('./views/account-creation/v1/_routes'));
router.use('/account-creation/v2', require('./views/account-creation/v2/_routes'));
router.use('/account-creation/build', require('./views/account-creation/build/_routes'));

router.use('/delegate-someone', require('./views/delegate-someone/_routes'));

router.use('/add-compliance-scheme', require('./views/add-compliance-scheme/_routes'));
router.use('/add-compliance-scheme-v2', require('./views/add-compliance-scheme-v2/_routes'));
router.use('/account-management/version-1', require('./views/account-management/version-1/_routes'));

router.use('/v6/epr', require('./views/v6/epr/_routes'));
router.use('/v6/defra-id', require('./views/v6/defra-id/_routes'));
router.use('/v6/defra-id-manage', require('./views/v6/defra-id-manage/_routes'));

router.use('/drs/defra-id', require('./views/drs/defra-id/_routes'));
router.use('/drs/defra-id-manage', require('./views/drs/defra-id-manage/_routes'));
router.use('/drs/drs-registration_v1', require('./views/drs/drs-registration_v1/_routes'));
router.use('/drs/drs-reporting_v1', require('./views/drs/drs-reporting_v1/_routes'));

router.use('/combined/combined-basic-obligation-checker_v1', require('./views/combined/combined-basic-obligation-checker_v1/_routes'));

router.use('/obligation-checker/v1', require('./views/obligation-checker/v1/_routes'));
router.use('/obligation-checker/v2', require('./views/obligation-checker/v2/_routes'));
router.use('/obligation-checker/v3', require('./views/obligation-checker/v3/_routes'));
router.use('/obligation-checker/v3-1', require('./views/obligation-checker/v3-1/_routes'));
router.use('/obligation-checker/v4', require('./views/obligation-checker/v4/_routes'));
router.use('/obligation-checker/sandbox', require('./views/obligation-checker/sandbox/_routes'));
router.use('/obligation-checker/v5', require('./views/obligation-checker/v5/_routes'));

router.use('/guidance/v1', require('./views/guidance/v1/_routes'));
router.use('/guidance/v2', require('./views/guidance/v2/_routes'));

router.use('/regulator-manage-pom-data', require('./views/regulator-manage-pom-data/_routes'))




router.use('/e2e/reporting-method', require('./views/e2e/reporting-method/_routes'));
router.use('/view-manage-members', require('./views/view-manage-members/_routes'));


router.use('/report-organisation-details/producers/version-3', require('./views/report-organisation-details/producers/version-3/_routes'));

router.use('/report-packaging-data-soft-validation/compliance-scheme', require('./views/report-packaging-data-soft-validation/compliance-scheme/_routes'));
router.use('/report-packaging-data-soft-validation/compliance-scheme-b', require('./views/report-packaging-data-soft-validation/compliance-scheme-b/_routes'));
router.use('/report-packaging-data-soft-validation/producer', require('./views/report-packaging-data-soft-validation/producer/_routes'));
router.use('/report-packaging-data-soft-validation/producer-b', require('./views/report-packaging-data-soft-validation/producer-b/_routes'));


//PRN
router.use('/packing-recovery-notes/v1', require('./views/packing-recovery-notes/v1/_routes'));
router.use('/packing-recovery-notes/v2', require('./views/packing-recovery-notes/v2/_routes'));
router.use('/packing-recovery-notes/v3', require('./views/packing-recovery-notes/v3/_routes'));
router.use('/packing-recovery-notes/v3-5', require('./views/packing-recovery-notes/v3-5/_routes'));
router.use('/packing-recovery-notes/v4', require('./views/packing-recovery-notes/v4/_routes'));
router.use('/packing-recovery-notes/v5', require('./views/packing-recovery-notes/v5/_routes'));
router.use('/packing-recovery-notes/v6', require('./views/packing-recovery-notes/v6/_routes'));
router.use('/packing-recovery-notes/v6-1', require('./views/packing-recovery-notes/v6/_routes'));
router.use('/packing-recovery-notes/v6-1-1', require('./views/packing-recovery-notes/v6/_routes'));
router.use('/packing-recovery-notes/v6-2', require('./views/packing-recovery-notes/v6/_routes'));
router.use('/packing-recovery-notes/v6-3', require('./views/packing-recovery-notes/v6/_routes'));
router.use('/packing-recovery-notes/v6-4', require('./views/packing-recovery-notes/v6/_routes'));
router.use('/packing-recovery-notes/v6-5', require('./views/packing-recovery-notes/v6/_routes'));
router.use('/packing-recovery-notes/v6-6-rexp', require('./views/packing-recovery-notes/v6/_routes'));
router.use('/packing-recovery-notes/account-creation', require('./views/packing-recovery-notes/account-creation/build/_routes'));


//PayCal
router.use('/paycal/final-march', require('./views/paycal/final-march/_routes'));


//Cups
router.use('/paper-cups/enrol/version-1', require('./views/paper-cups/enrol/version-1/_routes'));


//Small producers
router.use('/small-producers/links-routes', require('./views/small-producers/links-routes/_routes'));


//Enrolment
router.use('/enrolment/account-creation', require('./views/enrolment/account-creation/build/_routes'));

//Mid Year Changes
router.use('/enrolment/compliance-schemes', require('./views/subsidiary/_routes'));
router.use('/subsidiary/producers', require('./views/subsidiary/_routes'));

// Clear all session data
router.get('/clear', (req, res) => {
	req.session.data = {}
	res.redirect('/index')
})
//public register

router.use('/public-register' , require ('./views/public-register/_routes'));
module.exports = router
