var express = require('express');

var router = express.Router();

/* GET home page. */
router.get('/', async function (req, res, next) {
  res.render('index', { title: 'RoofApp' });
});

// /* GET registration page */
// router.get('/register', (req,res,next) => {
//   res.render('register');
// });

module.exports = router;
