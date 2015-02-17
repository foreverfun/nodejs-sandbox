var express = require('express');

// initialize the express application
var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

// Routing
// '/' => home page
// access the function when home page is requested
app.get('/', function(req, res) {
	res.render('index');
});

app.get('/about', function(req, res) {
  //send() => print on the screen
  //res.send('about'); 
  res.render('about');
});

var server = app.listen(7710, function() {
	console.log('Express server listening on port ' + server.address().port);
});
