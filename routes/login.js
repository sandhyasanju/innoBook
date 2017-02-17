var express = require('express');
var router = express.Router();
var controller = require('../controllers/controller')

/* GET home page. */
router.get('/', function(req, res) {
    res.render('login',{'message':''});
});


router.post('/login', function(req, res) {
  if (!req.body) return res.sendStatus(400);
  controller.validateUser(req,res);
});

router.get('/logOut',function(req,res){
    console.log("logOut");
    controller.logOut(req,res);
})

// router.post('/login',function(req,res){
// 		var username = req.body.email;
// 		var password = req.body.password;
// 		UserRegister.find({$and: [{'email': username}, {'password':password}]}, function (err, docs) {
// 			if(err){
// 				console.log(err);
// 			}
// 			if( docs == [] ){
// 				res.render('login',{message:'InValid Username and Password'});
// 			}else{
// 				req.session.username = username;
// 				res.redirect('/dashboard');
// 			}
//         });
// })

module.exports = router;
