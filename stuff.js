//
var counter = function(arr){
  return 'There are ' + arr.length + ' elements in this array';
};

var adder = function(a, b){
  return `The sum of the two numbers is ${a+b}`;
};

var pi = 3.142;

//To make whatever we want available outside this module
module.exports.counter = counter;
module.exports.adder = adder;
module.exports.pi = pi;
