//
var http = require('http');

var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');

myReadStream.on('data', function(chunk){
    console.log(`****** Received ${chunk.length} bytes of data.`);
    console.log(chunk);

});

myReadStream.on('end', function(){
    console.log(`****** There will be no mode data.`);
});

