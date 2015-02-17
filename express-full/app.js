
// server
var express = require('express');
// input from the POST request
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
// public directories
app.use(express.static(__dirname + '/public'));
// handle the POST request
app.use(bodyParser.urlencoded({extended: false}));

// access the index.js file in controllers folder
//app.get('/', indexController.index);

var myCurrentUsername = "Chris";
var myCurrentDescription = "this is cool!";

app.get('/', function(req,res){
  res.render('index',{
    username:myCurrentUsername,
    description:myCurrentDescription
  });
});


app.get('/about',function(req,res){
  res.render('about');
});

var server = app.listen(7351, function() {
	console.log('Express server listening on port ' + server.address().port);
});
