// fs - file system module
var fs = require('fs');

// Read a file synchronously
var loremText = fs.readFileSync('./test.txt','utf-8');
console.log(loremText);

// Write a file synchronously 
var reversedLorem = loremText.split('').reverse().join('');
console.log(reversedLorem);  

fs.writeFileSync('./test-modified.txt', reversedLorem);