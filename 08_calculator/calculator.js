const add = function(a,b) {
	return a+b; 
};

add (2,3)

const subtract = function() {
	return a-b; 
};

const sum = function(...theArgs) {
  let sum = 0;
	for (let i=0; i< theArgs.length; i++){
    sum += theArgs[i];
  }
  return sum; 
};
// get the length of args 
// declare sum and add it back 
const multiply = function(...theArgs) {
  let mul = 1;
	for (let i=0; i< theArgs.length; i++){
    mul *= theArgs[i];
  }
  return mul; 
};

const power = function(a,b) {
	let pow = 1;
	pow =  a ** b; 
  return pow;
};

const factorial = function(a) {
  let sum = 1; 
  for (let i = a; i >= 1; i--)  {
   sum *= i; 
  }
  return sum; 
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
