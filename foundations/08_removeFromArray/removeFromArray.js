const removeFromArray = function(arr, ...num) {
  const array = [...arr];
  return array.filter((item) => !num.includes(item)) 
    }


// Do not edit below this line
module.exports = removeFromArray;
