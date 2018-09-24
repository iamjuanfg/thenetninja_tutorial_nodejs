//
var counter = function(arr){
  return 'There are ' + arr.length + ' elements in this array';
};

//console.log(counter(['a', 'b', 'c']));

//To make whatever we want available outside this module
module.exports = counter;
