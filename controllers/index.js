var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Login' });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Homepage' });
});

/* GET planner page. */
router.get('/plan', function(req, res, next) {
  res.render('plan', { title: 'Planner' });
});
module.exports = router;
