//Module and require
//Must a variable to access module
var stuff = require('./stuff-3.js');

//call
console.log(stuff.counter(['j','2']));
console.log(stuff.adder(2,3));
console.log(stuff.adder(stuff.pi, 5));
