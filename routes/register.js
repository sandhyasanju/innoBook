var express = require('express');
var router = express.Router();
var controller = require('../controllers/controller');

/* GET home page. */
router.get('/', function(req, res) {
    res.render('register', {'message':''});
});

router.post('/',function(req,res){
    if (!req.body) return res.sendStatus(400);
    controller.insertUser(req,res)
});

module.exports = router;
// router.post('/register',function(req,res){
// 		// console.log("earewrewerwerwrwe*************************");

// 		console.log(req.body);
// 		var user_mail = req.body.email;
// 		UserRegister.find({'usermail':user_mail},function(err,docs){
// 			console.log(docs);
// 			if( docs != [] ){
// 				var userDetails = new UserRegister({
// 		            firstName: req.body.firstname,
// 		            lastName:req.body.lastname,
// 		            email:req.body.email,
// 		            password:req.body.password,
// 		            phone:req.body.mobile,
// 		            gender:req.body.gender
// 		        });
				
// 				userDetails.save(function(err, data){
// 		            if(err){
// 		            	console.log("err",err);
// 						var obj = {
// 							'message': 'error'
// 						}
// 						res.json(err);
// 					}
// 					else{
// 						console.log("success");
// 						res.json({'firstName':req.body.firstname})
// 					}
// 		        });
// 				//res.render('login');
				

// 			}else{
// 				//res.render('register',{'message':'Usermail already exists try with another'});
// 				res.json({'message':'Usermail already exists try with another'});
// 		}
		
// 		})
// 	})

