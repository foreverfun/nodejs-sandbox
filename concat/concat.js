// node concat.js output.txt input1.txt input2.txt, input3.txt


var fs = require('fs');

var getOutputFile = process.argv[2];
//.log(getOutputFile);

//get input file names
//var inputFiles = process.argv.slice(3);

// var combined = inputFiles.map(function(filename){
//   return fs.readFileSync(filename, 'utf-8');
// }).join('\n');

//console.log(combined);
//fs.writeFileSync(getOutputFile, combined);

var loremText = "";
var getInputFile="";

for (var i=3; i<process.argv.length; i++) {
  getInputFile = process.argv[i];
  //console.log("inputfile: ", getInputFile);
  loremText += fs.readFileSync(getInputFile,'utf-8') + '\n';
  //console.log(loremText);
}

fs.writeFileSync(getOutputFile, loremText);
