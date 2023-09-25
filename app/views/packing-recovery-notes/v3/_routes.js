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





module.exports = router
