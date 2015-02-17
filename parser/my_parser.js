// Load the fs (filesystem) module
var fs = require('fs');

// Read the contents of the file into memory
fs.readFile('example_log.txt', function(err, logData) {
  // if an error occurred, throwing it and kill our app
  if (err) throw err;

  //logData is a buffer, convert to string
  var text = logData.toString();

var results = {};

// Break up the file into lines
var lines = text.split('\n');

lines.forEach(function(line) {
  var parts = line.split(' ');
  var letter = parts[1];
  var count = parseInt(parts[2]);

if (!results[letter]) {
  results[letter] =0;
}

results[letter] += parseInt(count);
});

console.log(results);

});