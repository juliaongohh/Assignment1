var express = require('express');
var router = express.Router();

/* GET users listing. */
/* Julia Ong Oh 301185511 October 16, 2022 */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
