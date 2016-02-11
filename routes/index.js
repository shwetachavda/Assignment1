var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Shweta Chavda-Developer' });
});
/* GET About Page */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me' });
});
/* GET Contact Page */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me' });
});
/* GET Projects Page */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});
/* GET Services Page */
router.get('/service', function(req, res, next) {
  res.render('service', { title: 'Services' });
});
module.exports = router;
