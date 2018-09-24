//
function callFunction(fun){
  fun();
}
//nornaml fucntion statement
function sayHi(){
  console.log('hi');
};
sayHi();

//function expression
var sayBye = function(){
  console.log('bye');
};
sayBye();

//Call a function inside another function
callFunction(sayBye);
