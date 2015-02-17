// node string-reverse.js "this is a string"

//console.log(process.argv);

var inputStr = process.argv[2];
//console.log(inputStr);

var reversedStr = inputStr.split('').reverse().join('');
console.log(reversedStr);