var adderExp = function(a,b) {
  return a+b;
}

var subtracterExp = function(a,b) {
  return a-b;
}

// allows other files to use functions in this file
module.exports = {
  adder: adderExp,
  subtracter: subtracterExp
};