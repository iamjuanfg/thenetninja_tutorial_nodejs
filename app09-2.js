//filesystem module

var fs = require('fs');

//Non-Blocking code until it finishes reading file (Asynchronious)
fs.readFile('readMe.txt', 'utf8', function(err, data){
  console.log(data);
  fs.writeFile('writeMe.txt', data);
});


console.log('test');
