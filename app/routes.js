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
router.use('/v3/epr-obligation-checker', require('./views/v3/epr-obligation-checker/_routes'));

router.use('/v4/epr', require('./views/v4/epr/_routes'));
router.use('/v4/defra-id', require('./views/v4/defra-id/_routes'));
router.use('/v4/defra-id-manage', require('./views/v4/defra-id-manage/_routes'));
router.use('/v4/epr-obligation-checker', require('./views/v4/epr-obligation-checker/_routes'));

router.use('/v5/epr', require('./views/v5/epr/_routes'));
router.use('/v5/defra-id', require('./views/v5/defra-id/_routes'));
router.use('/v5/defra-id-manage', require('./views/v5/defra-id-manage/_routes'));
router.use('/v5/epr-obligation-checker', require('./views/v5/epr-obligation-checker/_routes'));

router.use('/v6/epr', require('./views/v6/epr/_routes'));
router.use('/v6/defra-id', require('./views/v6/defra-id/_routes'));
router.use('/v6/defra-id-manage', require('./views/v6/defra-id-manage/_routes'));
router.use('/v6/epr-obligation-checker', require('./views/v6/epr-obligation-checker/_routes'));

router.use('/drs/defra-id', require('./views/drs/defra-id/_routes'));
router.use('/drs/defra-id-manage', require('./views/drs/defra-id-manage/_routes'));
router.use('/drs/drs-obligation-checker_v1', require('./views/drs/drs-obligation-checker_v1/_routes'));
router.use('/drs/drs-registration_v1', require('./views/drs/drs-registration_v1/_routes'));
router.use('/drs/drs-reporting_v1', require('./views/drs/drs-reporting_v1/_routes'));

router.use('/combined/combined-basic-obligation-checker_v1', require('./views/combined/combined-basic-obligation-checker_v1/_routes'));

router.use('/e2e/reporting-method', require('./views/e2e/reporting-method/_routes'));

// Clear all session data
router.get('/clear', (req, res) => {
	req.session.data = {}
	res.redirect('/index')
})

module.exports = router