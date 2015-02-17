var fs = require('fs');

// //using node.js w/o express
// //Server a Static File 
// //read data.txt file
// var fileContents = fs.readFileSync('data.txt','utf8');

// var http = require('http');

// http.createServer(function(request, response) {
//   //add the HTTP response header
//   //response.writeHead(200, {'Content-Type':'text/html'});
//   response.header('Content-Type','text/html');
//   // send data.txt file back to user
//   response.send(fileContents);
// }).listen(6843);

// //using node.js w/ express framework
var express = require('express');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

//app.use(express.static(__dirname + '/public'));

// //readFileSync => Synchronous - blocking
// app.get('/', function(req, res){
//   var fileContents = fs.readFileSync('data.txt','utf8');
//   res.header('Content-Type','text/html');
//   res.send(fileContents);
// });

// //readFile => Asynchronous - no blocking
app.get('/', function(req, res) {
  fs.readFile('data1.txt', function(err, data){
    res.header('Content-Type','text/html');
    res.send(data);
  });
});

//app.get('/:filename', function(req, res) {
 // access value of :filename with req.params.filename
 // read the file with the specified filename
 // send the contents of the file to the user
//});

var server = app.listen(6843, function() {
	console.log('Express server listening on port ' 
    + server.address().port);
});

