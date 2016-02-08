var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* GET About Page */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About Me' });
});
/* GET Contact Page */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me' });
});
module.exports = router;
