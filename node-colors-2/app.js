//node color.js papayawhip

var colorName = process.argv[2];

var request = require('request');

request('https://cdn.rawgit.com/metaraine/swatch/74580660c9229541622bbf1fd4198618d9f677e5/webcolors.json',
  function(error, response, body) {
    
    var obj = JSON.parse(body);
    
    for (var i=0; i<140; i++) {
      if (obj[i].name.toLowerCase() === colorName) {
          console.log(obj[i].rgb.r, obj[i].rgb.g, obj[i].rgb.b);
          break;
      }
    }
});