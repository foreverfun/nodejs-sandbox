// node copy.js input.txt output.txt


var getInputFile = './'+process.argv[2];
//console.log(getInputFile);

var getOutputFile = './'+process.argv[3];
//console.log(getOutputFile);

var fs = require('fs');


var loremText = fs.readFileSync(getInputFile,'utf-8');

fs.writeFileSync(getOutputFile, loremText);

