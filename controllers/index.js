var express = require('express');
var router = express.Router();

var db = require('../db');
var ObjectId = require('../db').ObjectId;

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


db.connect('mongodb://localhost:27017/test', function(err, db2) {
	db.get().collection('info').find().toArray(function(err,res){
		console.log(res[0].email);   // PRINT LINE HERE
});
});

module.exports = router;
