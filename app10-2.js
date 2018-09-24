//filesystem module

var fs = require('fs');

//Creating an Asyncronize directory
fs.mkdir('stuff', function(){
  fs.readFile('readMe.txt', 'utf8', function(err , data){
    fs.writeFile('./stuff/writeMe.txt', data);
  });
});
