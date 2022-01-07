const removeFromArray = function(arr, ...vals) {
  for (const val of vals) {
    index = arr.indexOf(val)
  } 
  if (index > -1) {
    arr.splice(index, vals.length);
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
