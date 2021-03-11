const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// GET SPRINT NAME - useful for relative templates
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
router.use('/v2/drs', require('./views/v2/drs/_routes'));


// Clear all session data
router.get('/clear', (req, res) => {
	req.session.data = {}
	res.redirect('/index')
})

module.exports = router