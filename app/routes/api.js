var User = require ('../models/user');
module.exports =function(router){
//http://localhost:8000/user
	router.post('/user',function(req,res){
		var user = new User();
		user.username = req.body.username;
		user.password = req.body.password;
		user.email    = req.body.email;
		if(req.body.username == null || req.body.username == '' || req.body.password == null || req.body.password =='' || req.body.email== null || req.body.emal==''){
			res.send('Ensure username,email,and password were provided');
		} else{
			user.save(function(err){
				if (err){
					res.send('Username or email already exist!');
				}else{
					res.send('user created!');
				}
			});
		}
	});
	return router;
	}