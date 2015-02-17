//node csv-to-json.js input.csv output.js
//

var inputFile = process.argv[2];

var outputFile = process.argv[3];


var fs=require('fs');

fs.readFile(inputFile, 'utf-8', function(err, data){
  //console.log(data);
  
  // JSON.stringify 
  // turns an object in to a JSON text
  // and stores JSON text in a string
  // 
  // JSON.parse
  // turns a string of JSON text
  // into an object

  //console.log(data.length);
  var obj = {};
  var titleArray = [];
  var valueArray = [];
  var dataArray = data.split('\n');
  var jsonStr="[";
  
  dataArray.map(function(cV, index, array) {
    //console.log(cV); 
    if (index === 0 ) {
      titleArray = array[index];
      titleArray = titleArray.split(',');
      //console.log("titleArray:", titleArray);
    }
    else {
      valueArray = array[index].split(',');
      //console.log("valueArray:", valueArray);
      
      for (var i=0; i< valueArray.length; i++){
        obj[titleArray[i]] = valueArray[i]; 
        //console.log("obj:", obj);  
      }
      if (array.length-1 === index) {
        jsonStr += JSON.stringify(obj) + "]";
        //console.log("2:", jsonStr);
      }
      else {
        jsonStr += JSON.stringify(obj) + ", \n";  
        //console.log("1:", jsonStr);
      }
    }



  });

  fs.writeFile(outputFile, jsonStr);
  
  //var names = _.pluck(data,'name');
  //console.log(names);

  //console.log(JSON.stringify(data));

  //console.log(obj[0]);
  //console.log(obj.name);
  //JSON.stringify(data);
});

