const express = require('express')
const router = express.Router()
// Add your routes here - above the module.exports line



// GENERIC NEXT PAGE ELEMENT
router.post('*', function (req, res, next) {
  console.log(req.body);

  if (req.body['next-page']) {
    res.redirect(req.body['next-page']);
  } else {
    next();
  }
});

// search
router.post('/search', function(req, res) {
  if (req.session.data['postcode'] == '') {
      res.redirect('search?error=true');
  } else {
      // Let's regex the entered postcode by makinng it uppercase and sorting out the (possible) lack of a space
      //req.session.data["postcode"] = req.session.data["postcode"].toUpperCase();
      //req.session.data["postcode"] = req.session.data["postcode"].replace(/[^0-9a-z]/gi, '');
      //var parts = req.session.data["postcode"].match(/^([A-Z]{1,2}\d{1,2}[A-Z]?)\s*(\d[A-Z]{2})$/);
      //parts.shift();
      //req.session.data["postcode"] = parts.join(' ');
      // For the moment set the entered (unvalidated) postcode to uppercase
      req.session.data["postcode"] = req.session.data["postcode"].toUpperCase();
      // Reset error code to false
      res.redirect('search-results?error=false');
  }
})

router.post('/site-location-2', function(req, res) {
  if (req.session.data['whereDoYouLive'] == 'england'){
      res.redirect('/exemption-reference');
  } else {
      res.redirect('/other');
  }
})

//regulator send legal documents to
router.post('/send-legal-document', function(req, res) {
  if (req.session.data['documents'] == 'registered'){
      res.redirect('/check-answer');
  } else {
      res.redirect('/search');
  }
})

module.exports = router
