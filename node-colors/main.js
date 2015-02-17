var nodeColors = require('./node-colors.js');

var r = process.argv[2];
var g = process.argv[3];
var b = process.argv[4];

// part 1 & 2
// node main.js 255 239 213 => 240.52439999999999
// node main.js 50 15 25 => 23.163
console.log(nodeColors.luminosityRGB(r, g, b));

// part 1 & 2
//$ node main.js 255 239 213 => light
//$ node main.js 50 15 25 => dark
console.log(nodeColors.isLight(r,g,b));

// bonus
//$ node main.js 255 239 213 => 204 191.2 170.4
//$ node main.js 50 15 25 => 40 12 20
console.log(nodeColors.darken(r),  
  + nodeColors.darken(g),
  + nodeColors.darken(b));