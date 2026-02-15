const add = function(x, y) {
  return x + y;
	
};

const subtract = function(x, y) {
	return x-y;
};

const sum = function(arr) {
	let sum = arr.reduce((acc, currVal) => acc + currVal,0);
  return sum;
};

const multiply = function(arr) {
  let result = arr.reduce((acc, currVal) => {
    return acc * currVal;
  }, 1);
  return result
};

const power = function(b, e) {
  return b ** e;
	
};

const factorial = function(a) {
  if (a === 0 || a === 1) {
    return 1
  } else if (a > 0) {
    let result = 1;
    for (let i = 2; i <= a; i++) {
      result *= i
    }
    return result;
  }
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
