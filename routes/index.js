var express = require('express');
var router = express.Router();


/* Julia Ong Oh 301185511 October 16, 2022 */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' },
  
  
  );
});

router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

router.get('/Products', function(req, res, next) {
  res.render('Products', { title: 'Products' });
});

router.get('/Services', function(req, res, next) {
  res.render('Services', { title: 'Services' });
});

router.get('/Contact', function(req, res, next) {
  res.render('Contact', { title: 'Contact' });
});
module.exports = router;
