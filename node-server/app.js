var http = require('http');

http.createServer(function(request, response) {
  console.log('A request came in');

  // Send text data back
  // response.writeHead(200, {'Content-Type':'text/plain'});
  // response.end("Hello World 1");
  
  // Send html data back
  // response.writeHead(200, {'Content-Type':'text/html'});
  // response.end("<h1>Hello World</h1><p>This is a cool paragraph</p>");
   
  var names =['Chris', 'Raphael', 'Max'];
  var nameStr = names.map(function(name){
    return '<li>' + name + '</li>'
  }).join(''); 
  response.writeHead(200, {'Content-Type':'text/html'});
  response.end('<ul>' + nameStr + '</ul>');
  
}).listen(3000);

console.log('Server listening on port 3000');