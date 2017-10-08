var express = require ("express");
var app = express();
var port =process.env.PORT || 8000;
var morgan =require('morgan');
var mongoose = require('mongoose');
var bodyParser = require ('body-parser');
var router = express.Router();
var appRoutes = require('./app/routes/api')(router);

app.use(morgan('dev'));
app.use(bodyParser.json());//for parsing application/json
app.use(bodyParser.urlencoded({extended: true}));//for parsing appliction/www-from-urlencoded
app.use('/api',appRoutes);
//http://localhost:8000/api/users
mongoose.connect('mongodb://localhost:27017/tutorial',function(err){
	if(err){
	console.log('Not connected to the database:'+ err);
}else{
	console.log('Successfully connected to MongoDB');
}
});

app.listen(port,function(){
	console.log('Running the server on port' + port);
});