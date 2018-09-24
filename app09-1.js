//filesystem module

var fs = require('fs');

//Blocking code until it finishes reading file (synchronious)
var readMe = fs.readFileSync('readMe.txt', 'utf8');
var writeMe = fs.writeFileSync('writeMe.txt', readMe);
console.log(readMe);

//code
