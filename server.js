var express = require ("express");
var app = express();
var port =process.env.PORT || 3000;
var morgan =require('morgan');
var mongoose = require('mongoose');

app.use(morgan('dev'));
mongoose.connect('mongodb://localhost:27017/tutorial',function(err){
	if(err){
	console.log('Not connected to the database:'+err);
}else{
	console.log('SuccessFully connected to MongoDB');
}
});

app.listen(port,function(){
	console.log('Running the server on port' + port);
});