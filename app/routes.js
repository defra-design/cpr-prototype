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

// Start folder specific routes
router.use('/defra-id', require('./views/defra-id/_routes'));
router.use('/epr', require('./views/epr/_routes'));

// Clear all session data
router.get('/clear', (req, res) => {
	req.session.data = {}
	res.redirect('/index')
})

module.exports = router