
//module.exports = function(app){
	
	var bodyParser = require('body-parser');
	var user_database = require('./connection.js');
	//var urlencodedParser = bodyParser.urlencoded({ extended: false });
	//app.use(bodyParser.urlencoded());
	var UserRegister = user_database ;
	
	// app.get('/',function(req,res){
	// 	res.render('login',{'message':''});
	// })
	
	// app.post('/login',function(req,res){
	// 	username = req.body.email;
	// 	var password = req.body.pwd;
	// 	UserRegister.find({$and: [{email: username}, {password:password}]}, function (err, docs) {
	// 		console.log(docs);
	// 		if(err){
	// 			console.log(err);
	// 		}
	// 		else if( docs[0] == null ){
	// 			console.log("invalid");
	// 			res.json({message:'InValid Username and Password'});
	// 		}else{
	// 			req.session.username = username;
	// 			res.json({success: "sucess login"});
	// 		}
    //     });
	// })
	
	// app.get('/dashboard',function(req,res){
	// 	if(req.session.username){
	// 		res.render('dashboard');
	// 	}else{
	// 		res.redirect('/');
	// 	}
		
	// })
	
	// app.get('/register',function(req,res){
	// 	res.render('register',{'message':''});
	// })
	
	// app.post('/register',function(req,res){
		// console.log("earewrewerwerwrwe*************************");

// var mongoose = require('mongoose');
// var user = require('./connection.js');
// var UserRegister = user;
exports.insertUser = function(req, res){
		console.log("insert user called");
		console.log(req.body);
		var user_mail = req.body.email;
		UserRegister.find({email:user_mail},function(err,docs){
			console.log(docs);
			if( docs[0] == null ){


				var userDetails = new UserRegister({
		            firstName: req.body.firstname,
		            lastName:req.body.lastname,
		            email:req.body.email,
		            password:req.body.pwd,
		            phone:req.body.mobile,
		            gender:req.body.gender,
					profilePic:"",
                   description:"",
				   dob:"",
					hobbies:""
		        });
				
				userDetails.save(function(err, data){
		            if(err){
		            	console.log("err",err);
						var obj = {
							'message': 'error'
						}
						res.json(err);
					}
					else{
						console.log("success");
						res.json({'firstName':req.body.firstname,
						success:"register success"
					})
						//res.send("hello");
					}
		        });
				//res.render('login');
				

			}else{
				//res.render('register',{'message':'Usermail already exists try with another'});
				res.json({'message':'Usermail already exists try with another'});
		}
		
		 });


}
	
	// app.post("/saveChanges",function(req,res){


	// });
	
	// app.get('*',function(req,res){
	// 	res.redirect('/');
	// });




exports.validateUser = function(req, res){

    // var username = req.body.email;
	// 	var password = req.body.pwd;
	// 	UserRegister.find({$and: [{email: username}, {password:password}]}, function (err, docs) {
	// 		console.log(docs);
	// 		if(err){
	// 			console.log(err);
	// 		}
	// 		if( docs[0] == "" ){
	// 			// res.render('login',{message:'InValid Username and Password'});
	// 			res.json({msg:"wrong credentials"});
	// 		}else{
	// 			req.sessionId = username;
	// 			// res.redirect('/dashboard');
	// 			res.json({msg:"success"});
	// 		}
    //     });

	username = req.body.email;
		var password = req.body.pwd;
		UserRegister.find({$and: [{email: username}, {password:password}]}, function (err, docs) {
			console.log(docs);
			if(err){
				console.log(err);
			}
			else if( docs[0] == null ){
				console.log("invalid");
				res.json({message:'InValid Username and Password'});
			}else{
				req.sessionId = username;
				console.log(req.sessionId);
				res.json({success: "sucess login"});
			}
        });
}


exports.updateUser = function(req,resp){
			var userDetails = new UserRegister({
		            firstName: req.body.firstname,
		            lastName:req.body.lastname,
		            email:req.body.email,
		            password:req.body.pwd,
		            phone:req.body.mobile,
		            gender:req.body.gender,
					profilePic:req.file.filename,
                   description:req.body.description,
				   dob:req.body.dob,
					hobbies:req.body.hobbies
		        });
				
UserRegister.find({email: req.body.email},function(error,data){
	if(error){
		throw error
	}else if(data[0] != null){
		UserRegister.update({email:req.body.email},{$set:userDetails},function(err,data){
			if(err)throw err;
			else
			{
				console.log("saved succesfully");
				res.json(data);
			}
		})
	}
}) ;
}
exports.logOut = function(req,res){
delete req.sessionId;
//   res.redirect('/login');
res.json({message: "logOut"});
}
