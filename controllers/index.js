var express = require('express');
var router = express.Router();

var db = require('../db');
var ObjectId = require('../db').ObjectId;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Login' });
});

/* GET home page. */
router.post('/home', function(req, res, next) {
  console.log(req.body.emailSign);
  res.render('home', { title: 'Homepage' });
});

/* GET planner page. */
router.get('/plan', function(req, res, next) {
  res.render('plan', { title: 'Planner' });
});



db.connect('mongodb://localhost:27017/test', function(err, db2) {
	db.get().collection('info').find().toArray(function(err,res){
		console.log(res[0].email);   // PRINT LINE HERE (1)
	});

	var insertInfo = function(db, infoArr, callback){
		db.get().collection('info').insertOne({
			"email" : 'cheese',
			"password" : 'pass2'
		}, function(err, result){
			console.log('Success! Inserted doc');
			callback(result);
		});
	};

	insertInfo(db,{},function(){
		console.log('Quiet');
	});

});

module.exports = router;
