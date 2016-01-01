var express = require('express');
var router = express.Router();

var db = require('../db');
//var ObjectId = require('../db').ObjectId;

/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Scheduler' });
});*/
router.get('/', function(req,res,next){ 
	if(req.user){
    // already logged in
    res.redirect('/plan');
  } else {
    res.render('index', { title: 'Schedule Thingy' });
  }
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
	console.log(req.body); 	// PRINT LINE HERE (1)

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
				console.log('Calling insertInfo()');
			});
		}
	});
});

module.exports = router;
