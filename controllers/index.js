var express = require('express');
var router = express.Router();

//var db = require('../db');
//var ObjectId = require('../db').ObjectId;

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

router.post('/addPerson', function(req,res,next){
	console.log(req.body);

	var db = require('../db');
	db.connect('mongodb://localhost:27017/test', function(err, db2) {
	if(req.body.passwordSign != req.body.passwordSign2){
		console.log('Not same password');
		res.render('index' , {title: 'Login'});

	}else{
		var insertInfo = function(db, infoArr, callback){
			db.get().collection('info').insertOne({
				"email" : req.body.emailSign,
				"password" : req.body.passwordSign
			}, function(err, result){
				console.log('Success! Inserted doc');
				res.render('home', {title: 'Homepage'});
				callback(result);
			});
		};

		// This is to actually insert the info into DB
		insertInfo(db,{},function(){
			console.log('Quiet');
		});
	}

});
});

/*db.connect('mongodb://localhost:27017/test', function(err, db2) {
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

});*/

module.exports = router;
