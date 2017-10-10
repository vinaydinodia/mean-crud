var express = require ("express");
var app = express();
var port =process.env.PORT || 8100;
var morgan =require('morgan');
var mongoose = require('mongoose');
var bodyParser = require ('body-parser');
var router = express.Router();
var appRoutes = require('./app/routes/api')(router);
var path = require('path');

app.use(morgan('dev'));
app.use(bodyParser.json());//for parsing application/json
app.use(bodyParser.urlencoded({extended: true}));//for parsing appliction/www-from-urlencoded
app.use(express.static(__dirname +'/public'));
app.use('/api',appRoutes);
//http://localhost:8000/api/users
mongoose.connect('mongodb://localhost:27017/tutorial',function(err){
	if(err){
	console.log('Not connected to the database:'+ err);
}else{
	console.log('SuccessFully connected to MongoDB');
}
});
app.get('*',function(req,res){
	res.sendFile(path.join(__dirname + '/public/app/view/index.html'));
});

app.listen(port,function(){
	console.log('Running the server on port' + port);
});
